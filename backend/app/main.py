from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Session, select
from .database import create_db_and_tables, engine
from .models import BudgetGroup
from .routers import router_expenses, router_categories, router_income,router_goals, router_budget, router_rules, router_portfolio # 👈 ADICIONE AQUI

app = FastAPI(
    title="API de Controle Financeiro Pessoal",
    description="Backend para o sistema de finanças pessoais com FastAPI e SQLModel.",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    create_db_and_tables()
    # 👇 INICIALIZA OS GRUPOS PADRÃO SE NÃO EXISTIREM 👇
    with Session(engine) as session:
        existing_groups = session.exec(select(BudgetGroup)).all()
        if not existing_groups:
            default_groups = [
                "Investimentos (Liberd. Financ)",
                "Custo fixo",
                "Confortos",
                "Metas",
                "Prazeres",
                "Conhecimento"
            ]
            for name in default_groups:
                session.add(BudgetGroup(name=name, target_percentage=0))
            session.commit()

@app.get("/", tags=["Root"])
def read_root():
    return {"message": "Bem-vindo à API de Finanças Pessoais!"}

app.include_router(router_expenses)
app.include_router(router_categories)
app.include_router(router_income)
app.include_router(router_goals)
app.include_router(router_budget) 
app.include_router(router_rules) 
app.include_router(router_portfolio) # 👈 ADICIONE AQUI