from sqlmodel import create_engine, SQLModel, Session
import os

# 1. Tenta pegar a URL do banco das variáveis de ambiente (Nuvem)
# Se não encontrar, usa o SQLite local como fallback (Desenvolvimento)
DATABASE_URL = os.getenv('postgresql://neondb_owner:npg_g4e1QSyFlEzc@ep-shiny-mountain-ac4a3oyr-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require', "sqlite:///./financeiro.db")

# 2. Correção necessária para o SQLAlchemy:
# Alguns provedores (como o Render/Neon) fornecem a URL começando com "postgres://"
# Mas o SQLAlchemy exige que seja "postgresql://"
if DATABASE_URL and DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

# 3. Configurações específicas
# check_same_thread é necessário APENAS para SQLite
connect_args = {"check_same_thread": False} if "sqlite" in DATABASE_URL else {}

# 4. Cria a engine de conexão
engine = create_engine(DATABASE_URL, echo=True, connect_args=connect_args)

def create_db_and_tables():
    """Cria as tabelas no banco de dados."""
    SQLModel.metadata.create_all(engine)

def get_session():
    """Dependência para obter a sessão do banco."""
    with Session(engine) as session:
        yield session