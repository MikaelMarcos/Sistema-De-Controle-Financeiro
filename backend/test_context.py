import sys
import os
from sqlmodel import Session, select, create_engine
from app.models import Expense, User, Income, Goal
from dotenv import load_dotenv
from app.agent_router import get_financial_context

load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")
if DATABASE_URL and DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

engine = create_engine(DATABASE_URL, echo=False)

def test():
    try:
        with Session(engine) as session:
            users = session.exec(select(User)).all()
            for u in users:
                print(f"Testing user {u.email} (ID {u.id})...")
                try:
                    ctx = get_financial_context(session, u.id)
                    print(f"Context success for {u.email}!")
                except Exception as e:
                    print(f"Error getting context for {u.email}: {e}")
    except Exception as e:
        print(f"DB Error: {e}")

if __name__ == "__main__":
    test()
