import sys
import os
from sqlalchemy import create_engine, text

# Add parent directory to sys.path to allow imports from app
sys.path.append(os.getcwd())

try:
    from app.models import User
except ImportError as e:
    print(f"ImportError: {e}")
    # try direct import if running from inside app (unlikely here)
    try:
        from models import User
    except ImportError:
        print("Could not import User model.")

# Adjust the database URL if necessary
DATABASE_URL = "sqlite:///./financeiro.db"
if not os.path.exists("financeiro.db"):
    print("Warning: financeiro.db not found in current directory.")

engine = create_engine(DATABASE_URL)

def list_users():
    print(f"Connecting to database: {DATABASE_URL}")
    with engine.connect() as conn:
        try:
            result = conn.execute(text("SELECT id, email, hashed_password FROM user"))
            users = result.fetchall()
            if not users:
                print("No users found.")
            for user in users:
                print(f"ID: {user.id}, Email: {user.email}, Hashed Password: {user.hashed_password}")
        except Exception as e:
            print(f"Database error: {e}")

if __name__ == "__main__":
    list_users()
