import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=api_key)

financial_data = "Dados Financeiros Atuais (Janeiro/2026):\n- Total Entradas: R$ 0.00\n- Total Despesas: R$ 0.00\n- Saldo do Mês: R$ 0.00\n"

history_context = "Usuário: Olá!\nAssistente: Olá, sou seu Gestor Financeiro.\n"

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

message = "Qual meu saldo"
full_prompt = f"{system_prompt}\n\nUsuário Agora: {message}\nAssistente:"

models_to_try = [
    "models/gemini-2.5-flash", 
    "gemini-2.5-flash",
    "gemini-1.5-flash", 
    "models/gemini-1.5-flash"
]

for model_name in models_to_try:
    try:
        print(f"Tentando modelo: {model_name}...")
        model = genai.GenerativeModel(model_name)
        response = model.generate_content(full_prompt)
        print(f"Sucesso com {model_name}: {response.text[:50]}...")
        break
    except Exception as e:
        print(f"Erro com {model_name}: {e}")
