from sqlmodel import create_engine, SQLModel, Session

# 1. Define o caminho do banco de dados SQLite
DATABASE_URL = "sqlite:///./financeiro.db"

# 2. Cria a "engine" de conexão
# connect_args é necessário para o SQLite
engine = create_engine(DATABASE_URL, echo=True, connect_args={"check_same_thread": False})

# 3. Função para criar as tabelas no banco
def create_db_and_tables():
    # SQLModel.metadata.create_all() vai criar as tabelas
    # com base em todos os modelos que importarmos antes de chamá-la
    SQLModel.metadata.create_all(engine)

# 4. Função "dependência" para o FastAPI
# Isso garante que tenhamos uma sessão de banco de dados
# por requisição e que ela seja fechada ao final.
def get_session():
    with Session(engine) as session:
        yield session