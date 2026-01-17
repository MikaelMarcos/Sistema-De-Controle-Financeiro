import sys
import os
from decimal import Decimal
from sqlalchemy import func, extract
from sqlmodel import Session, select, create_engine
from dotenv import load_dotenv

sys.path.append(os.getcwd())

from app.models import BudgetGroup, Expense, Income

# Load env
load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./financeiro.db")
if DATABASE_URL and DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

print(f"Connecting to: {DATABASE_URL}")
engine = create_engine(DATABASE_URL)

def debug():
    with Session(engine) as session:
        # Check Income for Jan 2026
        month = 1
        year = 2026
        income_stmt = select(func.sum(Income.amount)).where(
            extract('month', Income.date) == month,
            extract('year', Income.date) == year,
            Income.received == True
        )
        total_income = session.exec(income_stmt).one() or Decimal(0.0)
        
        print(f"DEBUG_CALC: Total Income={total_income}")
        tithe = total_income * Decimal("0.10")
        print(f"DEBUG_CALC: Tithe={tithe}")
        print(f"DEBUG_CALC: Net={total_income - tithe}")

        # 3. Check Other Groups
        print(f"\n--- Checking All Groups ---")
        groups = session.exec(select(BudgetGroup)).all()
        for g in groups:
             print(f"Group: {g.name} (ID: {g.id}) | Target: {g.target_percentage}%")

if __name__ == "__main__":
    debug()
