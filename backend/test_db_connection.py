from sqlmodel import create_engine, Session, text
import sys

# A string de conexão fornecida
DATABASE_URL = "postgresql://postgres:mikaelomaislindo@db.lhzmhyitpdhmvzvlaanh.supabase.co:5432/postgres?sslmode=require"

try:
    print(f"Tentando conectar em: {DATABASE_URL.split('@')[1]}...") # Esconde a senha no log visual
    engine = create_engine(DATABASE_URL)
    
    with Session(engine) as session:
        # Tenta executar um comando simples (SELECT 1)
        result = session.exec(text("SELECT 1")).first()
        print(f"\n✅ CONEXÃO BEM SUCEDIDA! Resultado do teste: {result}")
        
except Exception as e:
    print(f"\n❌ FALHA NA CONEXÃO.")
    print(f"Erro detalhado: {str(e)}")
    sys.exit(1)
