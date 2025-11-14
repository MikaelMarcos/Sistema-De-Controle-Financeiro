from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from typing import List

from .database import get_session
from .models import User, Expense, TransactionRuleRead
from .auth import get_current_user # 👈 IMPORTA O PROTETOR

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
import joblib
from pathlib import Path

router_ai = APIRouter(prefix="/ai", tags=["AI Engine"])

MODEL_DIR = Path("ai_models")

# 👇 Modelos agora são específicos por usuário
def get_user_model_paths(user_id: int):
    user_model_dir = MODEL_DIR / f"user_{user_id}"
    user_model_dir.mkdir(exist_ok=True)
    return {
        "vectorizer": user_model_dir / "vectorizer.joblib",
        "group_model": user_model_dir / "group_model.joblib",
        "category_model": user_model_dir / "category_model.joblib"
    }

@router_ai.get("/status")
def get_ai_status(*, user: User = Depends(get_current_user)):
    paths = get_user_model_paths(user.id)
    if (paths["vectorizer"].exists() and 
        paths["group_model"].exists() and 
        paths["category_model"].exists()):
        return {"trained": True, "message": "IA pronta."}
    return {"trained": False, "message": "IA precisa de treinamento."}

@router_ai.post("/train")
def train_ai_model(
    *, 
    session: Session = Depends(get_session), 
    user: User = Depends(get_current_user)
):
    paths = get_user_model_paths(user.id)
    
    # Busca dados de treino APENAS deste usuário
    statement = select(Expense).where(
        Expense.user_id == user.id, 
        Expense.category_id != None
    )
    expenses = session.exec(statement).all()

    if len(expenses) < 5: # Reduzido para 5 para facilitar o início
        raise HTTPException(
            status_code=400, 
            detail=f"Dados insuficientes. Pelo menos 5 despesas categorizadas são necessárias. Você tem {len(expenses)}."
        )

    X_train = [exp.description for exp in expenses]
    y_group = [exp.budget_group_id for exp in expenses]
    y_category = [exp.category_id for exp in expenses]

    vectorizer = TfidfVectorizer().fit(X_train)
    joblib.dump(vectorizer, paths["vectorizer"])
    
    X_train_vec = vectorizer.transform(X_train)

    group_model = MultinomialNB().fit(X_train_vec, y_group)
    joblib.dump(group_model, paths["group_model"])
    
    category_model = MultinomialNB().fit(X_train_vec, y_category)
    joblib.dump(category_model, paths["category_model"])

    return {"message": f"Treinamento concluído com {len(expenses)} amostras."}

@router_ai.get("/suggest", response_model=TransactionRuleRead)
def suggest_categorization(
    *,
    user: User = Depends(get_current_user),
    description: str
):
    paths = get_user_model_paths(user.id)
    
    if not (paths["vectorizer"].exists() and paths["group_model"].exists() and paths["category_model"].exists()):
        raise HTTPException(status_code=404, detail="Modelos de IA não encontrados. Por favor, treine a IA primeiro.")

    try:
        vectorizer = joblib.load(paths["vectorizer"])
        group_model = joblib.load(paths["group_model"])
        category_model = joblib.load(paths["category_model"])
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao carregar modelos: {e}")

    description_vec = vectorizer.transform([description])
    
    predicted_group_id = group_model.predict(description_vec)[0]
    predicted_category_id = category_model.predict(description_vec)[0]

    return {
        "budget_group_id": int(predicted_group_id),
        "category_id": int(predicted_category_id)
    }