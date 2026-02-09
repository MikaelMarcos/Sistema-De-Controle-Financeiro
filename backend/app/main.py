from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import create_db_and_tables
from .routers import (
    router_expenses, router_categories, router_income, 
    router_goals, router_budget, router_rules,
    router_cards
)
from .agent_router import router_agent # 👈 IMPORT

from .ai_router import router_ai
from .reports_router import router_reports
from .auth_router import router_auth # 👈 IMPORTA O NOVO ROUTER
from .inventory_router import router_inventory # 👈 ROUTER ESTOQUE
from .inventory_database import create_inventory_db_and_tables # 👈 CRIA DB ESTOQUE

app = FastAPI(
    title="API de Controle Financeiro Pessoal",
    description="Backend para o sistema de finanças pessoais com FastAPI e SQLModel.",
    version="2.0.0" # Versão 2.0 com Auth!
)

origins = [
    "http://localhost:3000",
    "https://sistema-de-controle-financeiro-gilt.vercel.app",
    "https://sistema-de-controle-financeiro-mikaelmarcos-projects.vercel.app",
    "https://sistema-de-controle-financeiro.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    # Removemos a lógica de criar BudgetGroup daqui
    create_db_and_tables()
    create_inventory_db_and_tables() # 👈 CRIA TABELAS DE ESTOQUE (inventory.db)

@app.get("/", tags=["Root"])
def read_root():
    return {"message": "Bem-vindo à API de Finanças Pessoais! Faça login para continuar."}

@app.get("/health", tags=["Health"])
def health_check():
    return {"status": "ok"}

# --- Inclui os Routers ---
app.include_router(router_auth) # 👈 ADICIONA O ROUTER DE AUTH
app.include_router(router_expenses)
app.include_router(router_categories)
app.include_router(router_income)
app.include_router(router_goals)
app.include_router(router_budget)
app.include_router(router_rules)
app.include_router(router_agent) # 👈 AGENTE IA


app.include_router(router_ai)
app.include_router(router_cards)
app.include_router(router_cards)
app.include_router(router_reports)
app.include_router(router_inventory) # 👈 GESTÃO DE ESTOQUE