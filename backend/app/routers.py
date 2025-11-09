from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from typing import List, Optional
from datetime import datetime
from sqlalchemy import extract, func

from .database import get_session
from .models import (
    Expense, ExpenseCreate, ExpenseRead, ExpenseReadWithCategory,
    Category, CategoryCreate, CategoryRead, CategoryReadWithExpenses,
    Income, IncomeCreate, IncomeRead,
    Goal, GoalCreate, GoalRead, GoalReadWithExpenses, GoalAdjustment,
    DashboardSummary, CategorySummary
)

# Criamos os routers
router_expenses = APIRouter(prefix="/expenses", tags=["Expenses"])
router_categories = APIRouter(prefix="/categories", tags=["Categories"])
router_income = APIRouter(prefix="/income", tags=["Income"])
router_goals = APIRouter(prefix="/goals", tags=["Goals"])


# Novo router para o Dashboard
router_dashboard = APIRouter(prefix="/dashboard", tags=["Dashboard"])

@router_dashboard.get("/summary", response_model=DashboardSummary)
def get_dashboard_summary(
    *,
    session: Session = Depends(get_session),
    month: int,
    year: int
):
    """
    Calcula e retorna um resumo completo para o dashboard
    filtrado por mês e ano.
    """

    # 1. Total de Entradas (Income)
    total_income_stmt = select(func.sum(Income.amount)).where(
        extract('month', Income.date) == month,
        extract('year', Income.date) == year
    )
    total_income = session.exec(total_income_stmt).first() or 0.0

    # 2. Total de Despesas (Expenses)
    total_expenses_stmt = select(func.sum(Expense.amount)).where(
        extract('month', Expense.date) == month,
        extract('year', Expense.date) == year
    )
    total_expenses = session.exec(total_expenses_stmt).first() or 0.0

    # 3. Resumo por Categoria (A parte do gráfico)
    category_summary_stmt = (
        select(
            Category.name,
            func.sum(Expense.amount).label("total")
        )
        .join(Category, Expense.category_id == Category.id)
        .where(
            extract('month', Expense.date) == month,
            extract('year', Expense.date) == year
        )
        .group_by(Category.name)
        .order_by(func.sum(Expense.amount).desc())
    )

    category_results = session.exec(category_summary_stmt).all()

    # Converte os resultados para o nosso modelo Pydantic
    category_summary = [
        CategorySummary(category_name=name, total=total) 
        for name, total in category_results
    ]

    # 4. Cálculos Finais
    balance = total_income - total_expenses
    savings_rate = (balance / total_income) * 100 if total_income > 0 else 0.0

    return DashboardSummary(
        total_income=total_income,
        total_expenses=total_expenses,
        balance=balance,
        savings_rate=savings_rate,
        category_summary=category_summary
    )
# --- Rotas de Despesas (Expenses) ---

@router_expenses.post("/", response_model=ExpenseRead)
def create_expense(*, session: Session = Depends(get_session), expense: ExpenseCreate):
    """
    Cria uma nova despesa.
    Se um 'goal_id' for fornecido, atualiza o 'current_amount' da meta.
    """
    db_expense = Expense.from_orm(expense)
    
    # A lógica de atualização da meta
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

@router_expenses.get("/", response_model=List[ExpenseReadWithCategory])
def read_expenses(
    *,
    session: Session = Depends(get_session),
    month: Optional[int] = None,
    year: Optional[int] = None
):
    """
    Lê todas as despesas.
    Se 'month' e 'year' forem fornecidos, filtra por esse período.
    """
    statement = select(Expense)
    
    if month and year:
        statement = statement.where(
            extract('month', Expense.date) == month
        ).where(
            extract('year', Expense.date) == year
        )
    
    statement = statement.order_by(Expense.date.desc())
    expenses = session.exec(statement).all()
    return expenses

@router_expenses.delete("/{expense_id}")
def delete_expense(*, session: Session = Depends(get_session), expense_id: int):
    """Deleta uma despesa."""
    expense = session.get(Expense, expense_id)
    if not expense:
        raise HTTPException(status_code=404, detail="Despesa não encontrada")
    
    # NOTA: Implementação futura - se a despesa estava
    # vinculada a uma meta, o valor deveria ser estornado.
    
    session.delete(expense)
    session.commit()
    return {"ok": True, "detail": "Despesa deletada com sucesso"}

# --- Rotas de Categorias (Categories) ---

@router_categories.post("/", response_model=CategoryRead)
def create_category(*, session: Session = Depends(get_session), category: CategoryCreate):
    """Cria uma nova categoria."""
    db_category = Category.from_orm(category)
    session.add(db_category)
    session.commit()
    session.refresh(db_category)
    return db_category

@router_categories.get("/", response_model=List[CategoryRead])
def read_categories(*, session: Session = Depends(get_session)):
    """Lê todas as categorias."""
    categories = session.exec(select(Category)).all()
    return categories

@router_categories.get("/{category_id}", response_model=CategoryReadWithExpenses)
def read_category(*, session: Session = Depends(get_session), category_id: int):
    """Lê uma categoria específica e suas despesas."""
    category = session.get(Category, category_id)
    if not category:
        raise HTTPException(status_code=404, detail="Categoria não encontrada")
    return category

# --- Rotas de Entradas (Income) ---

@router_income.post("/", response_model=IncomeRead)
def create_income(*, session: Session = Depends(get_session), income: IncomeCreate):
    """Cria uma nova entrada (receita)."""
    db_income = Income.from_orm(income)
    session.add(db_income)
    session.commit()
    session.refresh(db_income)
    return db_income

@router_income.get("/", response_model=List[IncomeRead])
def read_income(
    *,
    session: Session = Depends(get_session),
    month: Optional[int] = None,
    year: Optional[int] = None
):
    """
    Lê todas as entradas (receitas).
    Se 'month' e 'year' forem fornecidos, filtra por esse período.
    """
    statement = select(Income)
    
    if month and year:
        statement = statement.where(
            extract('month', Income.date) == month
        ).where(
            extract('year', Income.date) == year
        )
        
    statement = statement.order_by(Income.date.desc())
    incomes = session.exec(statement).all()
    return incomes

@router_income.delete("/{income_id}")
def delete_income(*, session: Session = Depends(get_session), income_id: int):
    """Deleta uma entrada (receita)."""
    income = session.get(Income, income_id)
    if not income:
        raise HTTPException(status_code=404, detail="Entrada não encontrada")
    session.delete(income)
    session.commit()
    return {"ok": True, "detail": "Entrada deletada com sucesso"}

# --- Rotas de Metas (Goals) ---

@router_goals.post("/", response_model=GoalRead)
def create_goal(*, session: Session = Depends(get_session), goal: GoalCreate):
    """Cria uma nova meta."""
    db_goal = Goal.from_orm(goal)
    session.add(db_goal)
    session.commit()
    session.refresh(db_goal)
    return db_goal

@router_goals.get("/", response_model=List[GoalRead])
def read_goals(*, session: Session = Depends(get_session)):
    """Lê todas as metas."""
    goals = session.exec(select(Goal)).all()
    return goals

@router_goals.get("/{goal_id}", response_model=GoalReadWithExpenses)
def read_goal(*, session: Session = Depends(get_session), goal_id: int):
    """Lê uma meta específica e suas despesas vinculadas."""
    goal = session.get(Goal, goal_id)
    if not goal:
        raise HTTPException(status_code=404, detail="Meta não encontrada")
    return goal

@router_goals.put("/{goal_id}", response_model=GoalRead)
def update_goal(
    *,
    session: Session = Depends(get_session),
    goal_id: int,
    goal: GoalCreate  # Reutiliza o modelo de criação para atualização
):
    """Atualiza os dados de uma meta (nome, valor total, prazo)."""
    db_goal = session.get(Goal, goal_id)
    if not db_goal:
        raise HTTPException(status_code=404, detail="Meta não encontrada")
    
    goal_data = goal.dict(exclude_unset=True)
    for key, value in goal_data.items():
        # Não permite que esta rota atualize o 'current_amount' manualmente
        # O 'current_amount' só é definido na criação ou por depósito/retirada
        if key != "current_amount":
            setattr(db_goal, key, value)
            
    session.add(db_goal)
    session.commit()
    session.refresh(db_goal)
    return db_goal

@router_goals.delete("/{goal_id}")
def delete_goal(*, session: Session = Depends(get_session), goal_id: int):
    """Deletar uma meta, desvinculando quaisquer despesas associadas."""
    db_goal = session.get(Goal, goal_id)
    if not db_goal:
        raise HTTPException(status_code=404, detail="Meta não encontrada")
    
    # --- INÍCIO DA CORREÇÃO ---
    # 1. Encontra todas as despesas vinculadas a esta meta
    statement = select(Expense).where(Expense.goal_id == goal_id)
    expenses_to_update = session.exec(statement).all()
    
    # 2. Define o goal_id delas como nulo
    for expense in expenses_to_update:
        expense.goal_id = None
        session.add(expense)
    
    # 3. Agora, deleta a meta com segurança
    # --- FIM DA CORREÇÃO ---

    session.delete(db_goal)
    session.commit() # Salva as mudanças (despesas e deleção)
    return {"ok": True, "detail": "Meta deletada com sucesso"}

@router_goals.post("/{goal_id}/deposit", response_model=GoalRead)
def deposit_to_goal(
    *,
    session: Session = Depends(get_session),
    goal_id: int,
    adjustment: GoalAdjustment
):
    """Adiciona um valor (depósito) a uma meta."""
    db_goal = session.get(Goal, goal_id)
    if not db_goal:
        raise HTTPException(status_code=404, detail="Meta não encontrada")
    
    db_goal.current_amount += adjustment.amount
    
    session.add(db_goal)
    session.commit()
    session.refresh(db_goal)
    return db_goal

@router_goals.post("/{goal_id}/withdraw", response_model=GoalRead)
def withdraw_from_goal(
    *,
    session: Session = Depends(get_session),
    goal_id: int,
    adjustment: GoalAdjustment
):
    """Retira um valor (saque) de uma meta."""
    db_goal = session.get(Goal, goal_id)
    if not db_goal:
        raise HTTPException(status_code=404, detail="Meta não encontrada")
    
    # Impede que o valor fique negativo
    if db_goal.current_amount < adjustment.amount:
        raise HTTPException(
            status_code=400, 
            detail="Valor de retirada maior que o saldo atual da meta."
        )
        
    db_goal.current_amount -= adjustment.amount
    
    session.add(db_goal)
    session.commit()
    session.refresh(db_goal)
    return db_goal