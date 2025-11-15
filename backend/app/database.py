from sqlmodel import create_engine, SQLModel, Session
import os

# 1. O código procura por uma variável chamada "DATABASE_URL"
# Se estiver no Render, ele achará o PostgreSQL.
# Se estiver no seu PC, ele não acha e usa o SQLite.
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./financeiro.db")

# 2. Correção para o Render/Neon (Postgres exige postgresql://)
if DATABASE_URL and DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

# 3. Configurações
connect_args = {"check_same_thread": False} if "sqlite" in DATABASE_URL else {}

# 4. Engine
engine = create_engine(DATABASE_URL, echo=True, connect_args=connect_args)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session