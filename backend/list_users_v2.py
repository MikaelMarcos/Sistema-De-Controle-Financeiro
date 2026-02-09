import sys
import os
from sqlalchemy import create_engine, text

# Postgres URL from test_db_connection.py
DATABASE_URL_PG = "postgresql://postgres.lhzmhyitpdhmvzvlaanh:mikaelomaislindo@aws-1-sa-east-1.pooler.supabase.com:6543/postgres?sslmode=require"
# Local SQLite
DATABASE_URL_SQLITE = "sqlite:///./financeiro.db"

OUTPUT_FILE = "users_list.txt"

def list_users(db_url, name):
    print(f"Connecting to {name}: {db_url}")
    try:
        engine = create_engine(db_url)
        with engine.connect() as conn:
            result = conn.execute(text("SELECT id, email, hashed_password FROM \"user\"")) # Quote user for postgres as it is a reserved word
            users = result.fetchall()
            
            with open(OUTPUT_FILE, "a", encoding="utf-8") as f:
                f.write(f"\n--- Users in {name} ---\n")
                if not users:
                    f.write("No users found.\n")
                for user in users:
                    f.write(f"ID: {user[0]}, Email: {user[1]}, Hashed Password: {user[2]}\n")
            
            print(f"Successfully listed users from {name}")
            
    except Exception as e:
        print(f"Error connecting to {name}: {e}")
        with open(OUTPUT_FILE, "a", encoding="utf-8") as f:
             f.write(f"\nError in {name}: {str(e)}\n")

if __name__ == "__main__":
    # Clear output file
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("User List Report\n")
        
    # Try SQLite
    list_users(DATABASE_URL_SQLITE, "SQLite")
    
    # Try Postgres
    list_users(DATABASE_URL_PG, "Postgres")
