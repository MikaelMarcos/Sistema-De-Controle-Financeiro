from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import create_db_and_tables
# 👇 Adicione router_goals aqui
from .routers import router_expenses, router_categories, router_income, router_goals, router_dashboard
# ... (código do app = FastAPI() e CORS) ...
app = FastAPI(
    title="API de Controle Financeiro Pessoal",
    description="Backend para o sistema de finanças pessoais com FastAPI e SQLModel.",
    version="1.0.0"
)

origins = [
    "http://localhost:3000",
    "http://localhost",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Evento de Startup ---
@app.on_event("startup")
def on_startup():
    create_db_and_tables()

# --- Rotas Principais ---
@app.get("/", tags=["Root"])
def read_root():
    return {"message": "Bem-vindo à API de Finanças Pessoais!"}

# --- Inclui os Routers ---
app.include_router(router_dashboard) 
app.include_router(router_expenses)
app.include_router(router_categories)
app.include_router(router_income)
app.include_router(router_goals) 