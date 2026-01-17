import sys
import os
from sqlmodel import Session, select, create_engine
from app.models import BudgetGroup, Expense, TransactionRule

sys.path.append(os.getcwd())

sys.path.append(os.getcwd())

# Load .env to get same DB URL
from dotenv import load_dotenv
load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./financeiro.db")
if DATABASE_URL and DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

# Quiet engine
engine = create_engine(DATABASE_URL, echo=False)

def force_delete_dizimo():
    print("Iniciando remoção forçada...")
    try:
        with Session(engine) as session:
            # 1. Find Dízimo groups
            dizimo_groups = session.exec(select(BudgetGroup).where(BudgetGroup.name.ilike("%izimo%"))).all()
            if not dizimo_groups:
                print("Nenhum grupo Dízimo encontrado.")
                return

            # 2. Find Target Group (Custo Fixo)
            target_group = session.exec(select(BudgetGroup).where(BudgetGroup.name == "Custo Fixo")).first()
            if not target_group:
                print("Custo Fixo não encontrado. Criando...")
                target_group = BudgetGroup(name="Custo Fixo", target_percentage=0, user_id=dizimo_groups[0].user_id)
                session.add(target_group)
                session.commit()
                session.refresh(target_group)

            # 3. Reassign and Delete
            for d_group in dizimo_groups:
                print(f"Processando grupo: {d_group.name} (ID: {d_group.id})")
                
                # Reassign expenses
                expenses = session.exec(select(Expense).where(Expense.budget_group_id == d_group.id)).all()
                for exp in expenses:
                    print(f"  -> Movendo despesa {exp.id} para Custo Fixo")
                    exp.budget_group_id = target_group.id
                    session.add(exp)
                
                # Reassign transaction rules
                rules = session.exec(select(TransactionRule).where(TransactionRule.budget_group_id == d_group.id)).all()
                for rule in rules:
                    print(f"  -> Movendo regra {rule.id} ('{rule.keyword}') para Custo Fixo")
                    rule.budget_group_id = target_group.id
                    session.add(rule)
                
                # Flush changes to DB so exp/rules are updated
                session.flush()

                # Delete group
                session.delete(d_group)
            
            session.commit()
            print("Grupos Dízimo removidos com sucesso.")
    except Exception as e:
        print(f"ERRO CRÍTICO: {e}")
        # session rollback is automatic on exit context or we can't rollback if context failed.
        # But for SQLModel/SQLAlchemy session context manager, rollback happens on exception often.
        # Minimal handling here.

if __name__ == "__main__":
    force_delete_dizimo()
