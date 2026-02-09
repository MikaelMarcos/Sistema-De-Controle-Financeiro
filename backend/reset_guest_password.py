from sqlmodel import Session, select, create_engine, text
from passlib.context import CryptContext

# Postgres URL
DATABASE_URL = "postgresql://postgres.lhzmhyitpdhmvzvlaanh:mikaelomaislindo@aws-1-sa-east-1.pooler.supabase.com:6543/postgres?sslmode=require"

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_password_hash(password):
    return pwd_context.hash(password)

def reset_password():
    engine = create_engine(DATABASE_URL)
    
    target_email = "convidado@sistema.com"
    new_password = "rarasinha"
    
    print(f"Connecting to database...")
    with Session(engine) as session:
        # Find user using raw SQL to avoid model import issues
        statement = text("SELECT id, email, hashed_password FROM \"user\" WHERE email = :email")
        result = session.exec(statement, params={"email": target_email}).first()
        
        if not result:
            print(f"User {target_email} not found!")
            return

        user_id = result.id
        print(f"Found user {target_email} (ID: {user_id})")
        
        new_hash = get_password_hash(new_password)
        
        # Update password
        update_stmt = text("UPDATE \"user\" SET hashed_password = :hashed_password WHERE id = :id")
        session.exec(update_stmt, params={"hashed_password": new_hash, "id": user_id})
        session.commit()
        
        print(f"Password for {target_email} has been reset to '{new_password}'")

if __name__ == "__main__":
    reset_password()
