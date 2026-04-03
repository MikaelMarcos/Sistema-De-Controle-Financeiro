from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select, SQLModel
from typing import List, Optional
import google.generativeai as genai
import os
from datetime import datetime, timedelta
import json
from dotenv import load_dotenv

from .database import get_session
from .models import (
    User, Expense, Income, Goal, BudgetGroup, Category, 
    ChatHistory, ChatHistoryRead
)
from .auth import get_current_user

router_agent = APIRouter(prefix="/agent", tags=["Financial Agent"])

load_dotenv()

# Configura Gemini
KEY = os.getenv("GEMINI_API_KEY")
if KEY:
    genai.configure(api_key=KEY)
    print(f"Gemini configurado com chave: {KEY[:5]}...{KEY[-3:]}")
else:
    print("Aviso: GEMINI_API_KEY não encontrada.")

@router_agent.get("/test")
def test_agent_connection():
    models_to_try = ["gemini-1.5-flash", "gemini-pro", "models/gemini-1.5-flash", "gemini-1.5-pro"]
    last_error = None
    
    for model_name in models_to_try:
        try:
            model = genai.GenerativeModel(model_name)
            response = model.generate_content("Ping")
            return {"status": "success", "response": response.text, "model": model_name}
        except Exception as e:
            last_error = e
    
    available = []
    try:
        for m in genai.list_models():
            if 'generateContent' in m.supported_generation_methods:
                available.append(m.name)
    except Exception as e:
        available = [f"Error listing models: {str(e)}"]

    return {"status": "error", "detail": str(last_error), "available_models": available}

def get_financial_context(session: Session, user_id: int) -> str:
    """Coleta um resumo financeiro do usuário para o prompt."""
    
    # 1. Resumo do Mês Atual
    now = datetime.now()
    start_date = datetime(now.year, now.month, 1)
    
    expenses = session.exec(select(Expense).where(
        Expense.user_id == user_id,
        Expense.date >= start_date
    )).all()
    
    incomes = session.exec(select(Income).where(
        Income.user_id == user_id,
        Income.date >= start_date
    )).all()

    total_expenses = sum(e.amount for e in expenses)
    total_incomes = sum(i.amount for i in incomes)
    balance = total_incomes - total_expenses
    
    # 2. Metas
    goals = session.exec(select(Goal).where(Goal.user_id == user_id)).all()
    goals_summary = "\n".join([f"- {g.name}: R$ {g.current_amount} de R$ {g.target_amount}" for g in goals])
    
    # 3. Maiores Despesas Recentes
    sorted_expenses = sorted(expenses, key=lambda x: x.amount, reverse=True)[:5]
    top_expenses_summary = "\n".join([f"- {e.description}: R$ {e.amount} ({e.date.strftime('%d/%m')})" for e in sorted_expenses])

    context = f"""
    Dados Financeiros Atuais ({now.strftime('%B/%Y')}):
    - Total Entradas: R$ {total_incomes:.2f}
    - Total Despesas: R$ {total_expenses:.2f}
    - Saldo do Mês: R$ {balance:.2f}
    
    Metas Ativas:
    {goals_summary if goals else "Nenhuma meta definida."}
    
    Maiores Gastos do Mês:
    {top_expenses_summary if sorted_expenses else "Nenhum gasto registrado."}
    """
    return context

class ChatRequest(SQLModel):
    message: str

@router_agent.post("/chat", response_model=ChatHistoryRead)
def chat_with_agent(
    payload: ChatRequest,
    session: Session = Depends(get_session),
    user: User = Depends(get_current_user)
):
    try:
        if not os.getenv("GEMINI_API_KEY"):
             raise HTTPException(status_code=500, detail="Chave API do Gemini não configurada.")

        # 1. Recuperar Histórico Recente (limitado para não estourar contexto)
        history_objs = session.exec(select(ChatHistory).where(ChatHistory.user_id == user.id).order_by(ChatHistory.id.desc()).limit(10)).all()
        history_objs.reverse() # Colocar na ordem cronológica
        
        history_context = ""
        for h in history_objs:
            role_label = "Usuário" if h.role == "user" else "Assistente"
            history_context += f"{role_label}: {h.content}\n"

        # 2. Construir Contexto Financeiro
        financial_data = get_financial_context(session, user.id)

        # 3. Montar Prompt do Sistema
        system_prompt = f"""
        Você é um Gestor Financeiro Pessoal altamente inteligente e prestativo.
        Seu objetivo é ajudar o usuário a organizar suas finanças, atingir metas e cortar gastos desnecessários.
        
        Você tem acesso aos dados financeiros do usuário abaixo. Use-os para dar conselhos personalizados.
        Se o usuário perguntar sobre gastos, metas ou saldo, use os dados fornecidos.
        
        CONTEXTO FINANCEIRO ATUAL:
        {financial_data}
        
        HISTÓRICO DE CONVERSA RECENTE:
        {history_context}
        
        INSTRUÇÕES:
        - Responda de forma clara, motivadora e direta.
        - Se precisar apresentar dados, use tabelas Markdown.
        - Se sugerir gráficos, descreva-os claramente (ex: "Seria interessante visualizar um gráfico de pizza das suas categorias...").
        - O usuário fala Português.
        """

        full_prompt = f"{system_prompt}\n\nUsuário Agora: {payload.message}\nAssistente:"

        # 4. Chamar Gemini com Fallback
        models_to_try = [
            "models/gemini-2.5-flash", 
            "gemini-2.5-flash",
            "gemini-1.5-flash", 
            "models/gemini-1.5-flash",
            "gemini-pro", 
            "models/gemini-pro"
        ]
        ai_reply = None
        last_error = None

        for model_name in models_to_try:
            try:
                print(f"Tentando modelo: {model_name}...")
                model = genai.GenerativeModel(model_name)
                response = model.generate_content(full_prompt)
                ai_reply = response.text
                print(f"Sucesso com modelo: {model_name}")
                break
            except Exception as e:
                print(f"Falha com modelo {model_name}: {e}")
                last_error = e

        if not ai_reply:
             print(f"ERRO FATAL NA IA: {last_error}")
             raise HTTPException(status_code=500, detail=f"Erro na IA (todos modelos falharam). Detalhe: {str(last_error)}")

        # 5. Salvar no Banco
        user_msg_db = ChatHistory(user_id=user.id, role="user", content=payload.message)
        session.add(user_msg_db)
        
        ai_msg_db = ChatHistory(user_id=user.id, role="model", content=ai_reply)
        session.add(ai_msg_db)
        
        session.commit()
        session.refresh(ai_msg_db)
        
        return ai_msg_db

    except HTTPException as he:
        raise he
    except Exception as e:
        import traceback
        traceback.print_exc()
        print(f"ERRO INTERNO NO SERVIDOR: {e}")
        raise HTTPException(status_code=500, detail=f"Erro Interno do Servidor: {str(e)}")

@router_agent.get("/history", response_model=List[ChatHistoryRead])
def get_chat_history(
    limit: int = 50,
    session: Session = Depends(get_session),
    user: User = Depends(get_current_user)
):
    history = session.exec(select(ChatHistory).where(ChatHistory.user_id == user.id).order_by(ChatHistory.id)).all()
    # Retorna os últimos 'limit', mas mantendo a ordem cronológica
    return history[-limit:]
