import sys
import os
sys.path.append(os.getcwd())
from sqlmodel import Session, create_engine, text
from app.models import Goal

# Ajuste o caminho se necessário. O padrão costuma ser database.db na raiz ou backend
sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

engine = create_engine(sqlite_url)

def migrate():
    with Session(engine) as session:
        try:
            # Tenta selecionar a coluna para ver se já existe
            session.exec(text("SELECT image_url FROM goal LIMIT 1"))
            print("Coluna 'image_url' já existe.")
        except Exception:
            print("Coluna 'image_url' não existe. Adicionando...")
            session.exec(text("ALTER TABLE goal ADD COLUMN image_url TEXT"))
            session.commit()
            print("Coluna adicionada com sucesso.")

if __name__ == "__main__":
    migrate()
