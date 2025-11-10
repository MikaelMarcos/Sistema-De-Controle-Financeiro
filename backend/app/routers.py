from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from typing import List, Optional
from sqlalchemy import extract

from .database import get_session
from .models import (
    Expense, ExpenseCreate, ExpenseRead, ExpenseReadWithDetails,
    Category, CategoryCreate, CategoryRead,
    Income, IncomeCreate, IncomeRead,
    Goal, GoalCreate, GoalRead, GoalReadWithExpenses, GoalAdjustment,
    BudgetGroup
)

router_expenses = APIRouter(prefix="/expenses", tags=["Expenses"])
router_categories = APIRouter(prefix="/categories", tags=["Categories"])
router_income = APIRouter(prefix="/income", tags=["Income"])
router_goals = APIRouter(prefix="/goals", tags=["Goals"])
router_budget = APIRouter(prefix="/budget", tags=["Budget Groups"])

# --- Rotas de Grupos de Orçamento ---
@router_budget.get("/", response_model=List[BudgetGroup])
def read_budget_groups(*, session: Session = Depends(get_session)):
    return session.exec(select(BudgetGroup)).all()

@router_budget.put("/{group_id}", response_model=BudgetGroup)
def update_budget_group_percentage(*, session: Session = Depends(get_session), group_id: int, target_percentage: int):
    group = session.get(BudgetGroup, group_id)
    if not group:
        raise HTTPException(status_code=404, detail="Grupo não encontrado")
    group.target_percentage = target_percentage
    session.add(group)
    session.commit()
    session.refresh(group)
    return group

# --- Rotas de Despesas ---
@router_expenses.post("/", response_model=ExpenseRead)
def create_expense(*, session: Session = Depends(get_session), expense: ExpenseCreate):
    db_expense = Expense.from_orm(expense)
    
    # Lógica de Metas
    if db_expense.goal_id:
        goal = session.get(Goal, db_expense.goal_id)
        if not goal:
            raise HTTPException(status_code=404, detail="Meta não encontrada")
        goal.current_amount += db_expense.amount
        session.add(goal)

    session.add(db_expense)
    session.commit()
    session.refresh(db_expense)
    return db_expense

@router_expenses.get("/", response_model=List[ExpenseReadWithDetails])
def read_expenses(*, session: Session = Depends(get_session), month: Optional[int] = None, year: Optional[int] = None):
    statement = select(Expense)
    if month and year:
        statement = statement.where(extract('month', Expense.date) == month).where(extract('year', Expense.date) == year)
    statement = statement.order_by(Expense.date.desc())
    return session.exec(statement).all()

@router_expenses.delete("/{expense_id}")
def delete_expense(*, session: Session = Depends(get_session), expense_id: int):
    expense = session.get(Expense, expense_id)
    if not expense:
        raise HTTPException(status_code=404, detail="Despesa não encontrada")
    # Nota: Se estivesse ligado a uma meta, deveria estornar o valor aqui.
    session.delete(expense)
    session.commit()
    return {"ok": True, "detail": "Despesa deletada com sucesso"}

# --- Rotas de Categorias (Subgrupos) ---
@router_categories.post("/", response_model=CategoryRead)
def create_category(*, session: Session = Depends(get_session), category: CategoryCreate):
    # Verifica se já existe para evitar duplicatas
    existing = session.exec(select(Category).where(Category.name == category.name)).first()
    if existing:
        return existing
        
    db_category = Category.from_orm(category)
    session.add(db_category)
    session.commit()
    session.refresh(db_category)
    return db_category

@router_categories.get("/", response_model=List[CategoryRead])
def read_categories(*, session: Session = Depends(get_session)):
    return session.exec(select(Category)).all()

# --- Rotas de Entradas ---
@router_income.post("/", response_model=IncomeRead)
def create_income(*, session: Session = Depends(get_session), income: IncomeCreate):
    db_income = Income.from_orm(income)
    session.add(db_income)
    session.commit()
    session.refresh(db_income)
    return db_income

@router_income.get("/", response_model=List[IncomeRead])
def read_income(*, session: Session = Depends(get_session), month: Optional[int] = None, year: Optional[int] = None):
    statement = select(Income)
    if month and year:
        statement = statement.where(extract('month', Income.date) == month).where(extract('year', Income.date) == year)
    statement = statement.order_by(Income.date.desc())
    return session.exec(statement).all()

@router_income.delete("/{income_id}")
def delete_income(*, session: Session = Depends(get_session), income_id: int):
    income = session.get(Income, income_id)
    if not income:
        raise HTTPException(status_code=404, detail="Entrada não encontrada")
    session.delete(income)
    session.commit()
    return {"ok": True, "detail": "Entrada deletada com sucesso"}

# --- Rotas de Metas ---
@router_goals.post("/", response_model=GoalRead)
def create_goal(*, session: Session = Depends(get_session), goal: GoalCreate):
    db_goal = Goal.from_orm(goal)
    session.add(db_goal)
    session.commit()
    session.refresh(db_goal)
    return db_goal

@router_goals.get("/", response_model=List[GoalRead])
def read_goals(*, session: Session = Depends(get_session)):
    return session.exec(select(Goal)).all()

@router_goals.put("/{goal_id}", response_model=GoalRead)
def update_goal(*, session: Session = Depends(get_session), goal_id: int, goal: GoalCreate):
    db_goal = session.get(Goal, goal_id)
    if not db_goal:
        raise HTTPException(status_code=404, detail="Meta não encontrada")
    goal_data = goal.dict(exclude_unset=True)
    for key, value in goal_data.items():
        if key != "current_amount":
            setattr(db_goal, key, value)
    session.add(db_goal)
    session.commit()
    session.refresh(db_goal)
    return db_goal

@router_goals.delete("/{goal_id}")
def delete_goal(*, session: Session = Depends(get_session), goal_id: int):
    db_goal = session.get(Goal, goal_id)
    if not db_goal:
        raise HTTPException(status_code=404, detail="Meta não encontrada")
    statement = select(Expense).where(Expense.goal_id == goal_id)
    expenses_to_update = session.exec(statement).all()
    for expense in expenses_to_update:
        expense.goal_id = None
        session.add(expense)
    session.delete(db_goal)
    session.commit()
    return {"ok": True, "detail": "Meta deletada com sucesso"}

@router_goals.post("/{goal_id}/deposit", response_model=GoalRead)
def deposit_to_goal(*, session: Session = Depends(get_session), goal_id: int, adjustment: GoalAdjustment):
    db_goal = session.get(Goal, goal_id)
    if not db_goal:
        raise HTTPException(status_code=404, detail="Meta não encontrada")
    db_goal.current_amount += adjustment.amount
    session.add(db_goal)
    session.commit()
    session.refresh(db_goal)
    return db_goal

@router_goals.post("/{goal_id}/withdraw", response_model=GoalRead)
def withdraw_from_goal(*, session: Session = Depends(get_session), goal_id: int, adjustment: GoalAdjustment):
    db_goal = session.get(Goal, goal_id)
    if not db_goal:
        raise HTTPException(status_code=404, detail="Meta não encontrada")
    if db_goal.current_amount < adjustment.amount:
        raise HTTPException(status_code=400, detail="Valor de retirada maior que o saldo atual.")
    db_goal.current_amount -= adjustment.amount
    session.add(db_goal)
    session.commit()
    session.refresh(db_goal)
    return db_goal