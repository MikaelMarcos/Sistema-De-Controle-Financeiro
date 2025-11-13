from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from typing import List

from .database import get_session
from .models import Expense, TransactionRuleRead # Usaremos TransactionRuleRead para a resposta

# Importações de IA
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB # Um classificador clássico e rápido para texto
from sklearn.pipeline import Pipeline
import joblib
from pathlib import Path

# --- Configuração do Roteador e Modelos ---
router_ai = APIRouter(prefix="/ai", tags=["AI Engine"])

# Define onde os modelos treinados serão salvos
MODEL_DIR = Path("ai_models")
VECTORIZER_PATH = MODEL_DIR / "vectorizer.joblib"
GROUP_MODEL_PATH = MODEL_DIR / "group_model.joblib"
CATEGORY_MODEL_PATH = MODEL_DIR / "category_model.joblib"

# --- Rotas da IA ---

@router_ai.get("/status")
def get_ai_status():
    """Verifica se os modelos de IA estão treinados e prontos para uso."""
    if (VECTORIZER_PATH.exists() and 
        GROUP_MODEL_PATH.exists() and 
        CATEGORY_MODEL_PATH.exists()):
        return {"trained": True, "message": "IA pronta."}
    return {"trained": False, "message": "IA precisa de treinamento."}

@router_ai.post("/train")
def train_ai_model(*, session: Session = Depends(get_session)):
    """
    Treina (ou retreina) os modelos de IA com base no histórico de despesas.
    """
    # 1. Busca os dados de treinamento (despesas que já foram categorizadas)
    statement = select(Expense).where(Expense.category_id != None)
    expenses = session.exec(statement).all()

    if len(expenses) < 10: # Define um mínimo de 10 amostras para treinar
        raise HTTPException(
            status_code=400, 
            detail=f"Dados insuficientes. Pelo menos 10 despesas categorizadas são necessárias. Você tem {len(expenses)}."
        )

    # 2. Prepara os dados para o Scikit-learn
    X_train = [exp.description for exp in expenses]
    y_group = [exp.budget_group_id for exp in expenses]
    y_category = [exp.category_id for exp in expenses]

    # 3. Cria o "pipeline" do modelo
    pipeline = Pipeline([
        ('vectorizer', TfidfVectorizer()),
        ('classifier', MultinomialNB())
    ])

    # 4. Treina e Salva os Modelos
    MODEL_DIR.mkdir(exist_ok=True) # Cria a pasta /ai_models/ se não existir

    # Treina e salva o Vectorizer (o "dicionário")
    vectorizer = TfidfVectorizer().fit(X_train)
    joblib.dump(vectorizer, VECTORIZER_PATH)
    
    # Transforma os dados de texto em números
    X_train_vec = vectorizer.transform(X_train)

    # Treina e salva o modelo de GRUPO
    group_model = MultinomialNB().fit(X_train_vec, y_group)
    joblib.dump(group_model, GROUP_MODEL_PATH)
    
    # Treina e salva o modelo de CATEGORIA
    category_model = MultinomialNB().fit(X_train_vec, y_category)
    joblib.dump(category_model, CATEGORY_MODEL_PATH)

    return {"message": f"Treinamento concluído com sucesso com {len(expenses)} amostras."}


@router_ai.get("/suggest", response_model=TransactionRuleRead)
def suggest_categorization(
    *,
    description: str
):
    """
    Usa os modelos treinados para prever o Grupo e a Categoria de uma nova descrição.
    """
    # 1. Verifica se os modelos existem
    if not (VECTORIZER_PATH.exists() and GROUP_MODEL_PATH.exists() and CATEGORY_MODEL_PATH.exists()):
        raise HTTPException(status_code=404, detail="Modelos de IA não encontrados. Por favor, treine a IA primeiro.")

    # 2. Carrega os modelos salvos
    try:
        vectorizer = joblib.load(VECTORIZER_PATH)
        group_model = joblib.load(GROUP_MODEL_PATH)
        category_model = joblib.load(CATEGORY_MODEL_PATH)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao carregar modelos: {e}")

    # 3. Faz a Previsão
    description_vec = vectorizer.transform([description])
    
    predicted_group_id = group_model.predict(description_vec)[0]
    predicted_category_id = category_model.predict(description_vec)[0]

    # O [0] pega o primeiro (e único) resultado da previsão
    return {
        "budget_group_id": int(predicted_group_id),
        "category_id": int(predicted_category_id)
    }