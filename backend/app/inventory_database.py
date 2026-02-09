from sqlmodel import SQLModel, create_engine, Session

# Nome do arquivo do banco de dados SQLite separado
SQLITE_FILE_NAME = "inventory.db"
SQLITE_URL = f"sqlite:///{SQLITE_FILE_NAME}"

# Cria o engine. connect_args check_same_thread=False é necessário para SQLite e FastAPI
connect_args = {"check_same_thread": False}
engine = create_engine(SQLITE_URL, connect_args=connect_args)

def create_inventory_db_and_tables():
    SQLModel.metadata.create_all(engine)

def get_inventory_session():
    with Session(engine) as session:
        yield session
