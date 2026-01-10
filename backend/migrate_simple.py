from sqlalchemy import create_engine, text
import os

# URL do Supabase obtida do .env
DATABASE_URL = "postgresql://postgres.lhzmhyitpdhmvzvlaanh:mikaelomaislindo@aws-1-sa-east-1.pooler.supabase.com:6543/postgres"

def migrate():
    engine = create_engine(DATABASE_URL)
    with engine.connect() as conn:
        try:
            # Check column
            # In Postgres, we query information_schema
            result = conn.execute(text("SELECT column_name FROM information_schema.columns WHERE table_name='goal' AND column_name='image_url'"))
            if result.first():
                 print("Coluna 'image_url' já existe.")
            else:
                 print("Adicionando coluna 'image_url'...")
                 conn.execute(text("ALTER TABLE goal ADD COLUMN image_url TEXT"))
                 conn.commit()
                 print("Coluna adicionada com sucesso!")
        except Exception as e:
            print(f"Erro: {e}")

if __name__ == "__main__":
    migrate()
