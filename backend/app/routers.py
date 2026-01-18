from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session, select
from typing import List, Optional
from sqlalchemy import extract, func, exc
from sqlalchemy.orm import joinedload
from datetime import datetime, date
from dateutil.relativedelta import relativedelta
from decimal import Decimal

from .database import get_session
from .models import (
    User, Expense, ExpenseCreate, ExpenseRead, ExpenseReadWithDetails,
    Category, CategoryCreate, CategoryRead,
    Income, IncomeCreate, IncomeRead,
    Goal, GoalCreate, GoalRead, GoalReadWithExpenses, GoalAdjustment,
    BudgetGroup, BudgetGroupCreate, TransactionRule, TransactionRuleRead,
    CreditCard, CreditCardCreate, CreditCardRead, PayFaturaRequest
)
from .auth import get_current_user



# --- Definição dos Routers ---
router_expenses = APIRouter(prefix="/expenses", tags=["Expenses"])
router_categories = APIRouter(prefix="/categories", tags=["Categories"])
router_income = APIRouter(prefix="/income", tags=["Income"])
router_goals = APIRouter(prefix="/goals", tags=["Goals"])
router_budget = APIRouter(prefix="/budget", tags=["Budget Groups"])
router_rules = APIRouter(prefix="/rules", tags=["Rules"])
router_cards = APIRouter(prefix="/cards", tags=["Credit Cards"])

# --- Funções Auxiliares ---
def _calculate_monthly_contribution(goal: Goal) -> Decimal:
    if not goal.deadline or goal.deadline.date() <= date.today():
        return Decimal(0.0)
    amount_needed = goal.target_amount - goal.current_amount
    if amount_needed <= 0:
        return Decimal(0.0)
    today = date.today()
    deadline_date = goal.deadline.date()
    months_remaining = (deadline_date.year - today.year) * 12 + (deadline_date.month - today.month)
    if months_remaining <= 0:
        months_remaining = 1
    return amount_needed / Decimal(months_remaining)

def analyze_budget_for_user(session: Session, user: User, month: int, year: int):
    print(f"--- ANALYZE BUDGET START: User {user.id} Month {month}/{year} ---")
    try:
        income_stmt = select(func.sum(Income.amount)).where(
            Income.user_id == user.id,
            extract('month', Income.date) == month,
            extract('year', Income.date) == year,
            Income.received == True
        )
        total_income = session.exec(income_stmt).one() or Decimal(0.0)
        print(f"Total Income: {total_income}")
        
        groups = session.exec(select(BudgetGroup).where(BudgetGroup.user_id == user.id)).all()
        
        if not groups:
            print("No groups found. Creating defaults...")
            default_names = ["Custo Fixo", "Metas", "Investimentos", "Prazer", "Conhecimento", "Conforto"]
            for name in default_names:
                bg = BudgetGroup(name=name, user_id=user.id, target_percentage=0)
                session.add(bg)
            session.commit()
            groups = session.exec(select(BudgetGroup).where(BudgetGroup.user_id == user.id)).all()

        # Filter Dízimo
        groups = [g for g in groups if "dizimo" not in (g.name or "").lower() and "dízimo" not in (g.name or "").lower()]
        print(f"Groups count after filter: {len(groups)}")

        tithe_amount = total_income * Decimal("0.10")
        net_income = total_income - tithe_amount
        print(f"Net Income: {net_income}")

        analysis = []
        
        for group in groups:
            expense_stmt = select(func.sum(Expense.amount)).where(
                Expense.user_id == user.id,
                Expense.budget_group_id == group.id,
                Expense.paid == True,
                Expense.credit_card_id == None,
                extract('month', Expense.date) == month,
                extract('year', Expense.date) == year
            )
            actual_spent = session.exec(expense_stmt).one() or Decimal(0.0)
            
            planned_amount = (net_income * (Decimal(group.target_percentage) / Decimal(100.0)))
            
            analysis.append({
                "group_id": group.id, 
                "name": group.name, 
                "target_percentage": group.target_percentage,
                "planned_amount": float(planned_amount), 
                "actual_spent": float(actual_spent),
                "is_over_budget": actual_spent > planned_amount if planned_amount > 0 else False
            })
        
        print("Analysis complete.")
        return {
            "month": month, 
            "year": year, 
            "total_income": float(total_income), 
            "tithe_amount": float(tithe_amount),
            "net_income": float(net_income),
            "analysis": analysis
        }
    except Exception as e:
        print(f"ERROR in analyze_budget: {e}")
        # Log stack trace if possible
        import traceback
        traceback.print_exc()
        raise e

# --- Rotas de Grupos de Orçamento ---
@router_budget.post("/", response_model=BudgetGroup)
def create_budget_group(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), group: BudgetGroupCreate):
    existing = session.exec(select(BudgetGroup).where(BudgetGroup.name == group.name, BudgetGroup.user_id == user.id)).first()
    if existing:
        raise HTTPException(status_code=400, detail="Grupo já existe.")
    db_group = BudgetGroup(name=group.name, user_id=user.id, target_percentage=0)
    session.add(db_group)
    session.commit()
    session.refresh(db_group)
    return db_group

@router_budget.get("/", response_model=List[BudgetGroup])
def read_budget_groups(*, session: Session = Depends(get_session), user: User = Depends(get_current_user)):
    groups = session.exec(select(BudgetGroup).where(BudgetGroup.user_id == user.id)).all()
    
    # FILTRO DE SEGURANÇA
    groups = [g for g in groups if "dizimo" not in g.name.lower() and "dízimo" not in g.name.lower()]
    
    # 👇 AQUI ESTÁ A MÁGICA: Se não tiver grupos, cria os padrões 👇
    if not groups:
        default_names = ["Custo Fixo", "Metas", "Investimentos", "Prazer", "Conhecimento", "Conforto"]
        new_groups = []
        for name in default_names:
            bg = BudgetGroup(name=name, user_id=user.id, target_percentage=0)
            session.add(bg)
            new_groups.append(bg)
        
        session.commit()
        
        # Atualiza os IDs
        for bg in new_groups:
            session.refresh(bg)
            
        return new_groups
        
    return groups

@router_budget.put("/{group_id}", response_model=BudgetGroup)
def update_budget_group_percentage(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), group_id: int, target_percentage: int):
    group = session.get(BudgetGroup, group_id)
    if not group or group.user_id != user.id:
        raise HTTPException(status_code=404, detail="Grupo não encontrado")
    group.target_percentage = target_percentage
    session.add(group)
    session.commit()
    session.refresh(group)
    return group

@router_budget.get("/analysis")
def analyze_budget(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), month: int, year: int):
    return analyze_budget_for_user(session=session, user=user, month=month, year=year)

# --- Rotas de Despesas (Expenses) ---
@router_expenses.post("/", response_model=List[ExpenseRead])
def create_expense(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), expense_in: ExpenseCreate):
    installments_total = expense_in.installments_total
    if installments_total > 1 and not expense_in.credit_card_id:
        raise HTTPException(status_code=400, detail="Parcelamento só é permitido em cartão de crédito.")
    
    installment_amount = round(expense_in.total_amount / installments_total, 2)
    total_except_last = installment_amount * (installments_total - 1)
    last_installment_amount = expense_in.total_amount - total_except_last
    created_expenses = []

    for i in range(installments_total):
        current_installment = i + 1
        installment_date = expense_in.date + relativedelta(months=i)
        is_paid = expense_in.paid
        
        if expense_in.credit_card_id:
            is_paid = False
        elif i > 0:
            is_paid = False

        db_expense = Expense(
            description=f"{expense_in.description} ({current_installment}/{installments_total})",
            amount=last_installment_amount if current_installment == installments_total else installment_amount,
            date=installment_date,
            paid=is_paid,
            budget_group_id=expense_in.budget_group_id,
            category_id=expense_in.category_id,
            goal_id=expense_in.goal_id,
            credit_card_id=expense_in.credit_card_id,
            installment_current=current_installment,
            installments_total=installments_total,
            user_id=user.id
        )
        
        if db_expense.goal_id and current_installment == 1:
            goal = session.get(Goal, db_expense.goal_id)
            if not goal or goal.user_id != user.id:
                raise HTTPException(status_code=404, detail="Meta não encontrada")
            goal.current_amount += expense_in.total_amount
            session.add(goal)
            
        session.add(db_expense)
        created_expenses.append(db_expense)

    keyword = expense_in.description.lower().strip()
    existing_rule = session.exec(select(TransactionRule).where(TransactionRule.keyword == keyword, TransactionRule.user_id == user.id)).first()
    if not existing_rule:
        new_rule = TransactionRule(keyword=keyword, budget_group_id=expense_in.budget_group_id, category_id=expense_in.category_id, user_id=user.id)
        session.add(new_rule)
    
    try:
        session.commit()
    except exc.IntegrityError:
        session.rollback()
        raise HTTPException(status_code=500, detail="Erro ao salvar.")
    
    for exp in created_expenses:
        session.refresh(exp)
        
    return created_expenses

@router_expenses.get("/", response_model=List[ExpenseReadWithDetails])
def read_expenses(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), month: Optional[int] = None, year: Optional[int] = None):
    statement = select(Expense).where(Expense.user_id == user.id).options(
        joinedload(Expense.budget_group), 
        joinedload(Expense.category),
        joinedload(Expense.goal), 
        joinedload(Expense.credit_card)
    )
    if month and year:
        start_date = datetime(year, month, 1)
        end_date = start_date + relativedelta(months=1)
        statement = statement.where(
            Expense.date >= start_date,
            Expense.date < end_date
        )
    statement = statement.order_by(Expense.date.desc())
    return session.exec(statement).all()

@router_expenses.put("/{expense_id}", response_model=ExpenseRead)
def update_expense(
    *,
    session: Session = Depends(get_session),
    user: User = Depends(get_current_user),
    expense_id: int,
    expense_in: ExpenseCreate
):
    db_expense = session.get(Expense, expense_id)
    if not db_expense or db_expense.user_id != user.id:
        raise HTTPException(status_code=404, detail="Despesa não encontrada")

    db_expense.description = expense_in.description
    db_expense.amount = expense_in.total_amount 
    db_expense.date = expense_in.date
    db_expense.paid = expense_in.paid
    db_expense.budget_group_id = expense_in.budget_group_id
    db_expense.category_id = expense_in.category_id
    db_expense.goal_id = expense_in.goal_id
    db_expense.credit_card_id = expense_in.credit_card_id
    
    session.add(db_expense)
    session.commit()
    session.refresh(db_expense)
    return db_expense

@router_expenses.delete("/{expense_id}")
def delete_expense(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), expense_id: int):
    expense = session.get(Expense, expense_id)
    if not expense or expense.user_id != user.id:
        raise HTTPException(status_code=404, detail="Despesa não encontrada")
    session.delete(expense)
    session.commit()
    return {"ok": True}

@router_expenses.patch("/{expense_id}/toggle-status", response_model=ExpenseRead)
def toggle_expense_status(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), expense_id: int):
    expense = session.get(Expense, expense_id)
    if not expense or expense.user_id != user.id:
        raise HTTPException(status_code=404, detail="Despesa não encontrada")
    expense.paid = not expense.paid
    session.add(expense)
    session.commit()
    session.refresh(expense)
    return expense

# --- Rotas de Categorias ---
@router_categories.post("/", response_model=CategoryRead)
def create_category(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), category: CategoryCreate):
    existing = session.exec(select(Category).where(Category.name == category.name, Category.user_id == user.id)).first()
    if existing: return existing
    db_category = Category.from_orm(category, update={"user_id": user.id})
    session.add(db_category)
    session.commit()
    session.refresh(db_category)
    return db_category

@router_categories.get("/", response_model=List[CategoryRead])
def read_categories(*, session: Session = Depends(get_session), user: User = Depends(get_current_user)):
    return session.exec(select(Category).where(Category.user_id == user.id)).all()

# --- Rotas de Entradas ---
@router_income.post("/", response_model=IncomeRead)
def create_income(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), income: IncomeCreate):
    db_income = Income.from_orm(income, update={"user_id": user.id})
    session.add(db_income)
    session.commit()
    session.refresh(db_income)
    return db_income

@router_income.get("/", response_model=List[IncomeRead])
def read_income(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), month: Optional[int] = None, year: Optional[int] = None):
    statement = select(Income).where(Income.user_id == user.id)
    if month and year:
        start_date = datetime(year, month, 1)
        end_date = start_date + relativedelta(months=1)
        statement = statement.where(
            Income.date >= start_date,
            Income.date < end_date
        )
    statement = statement.order_by(Income.date.desc())
    return session.exec(statement).all()

@router_income.put("/{income_id}", response_model=IncomeRead)
def update_income(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), income_id: int, income: IncomeCreate):
    db_income = session.get(Income, income_id)
    if not db_income or db_income.user_id != user.id:
        raise HTTPException(status_code=404, detail="Entrada não encontrada")
    income_data = income.dict(exclude_unset=True)
    for key, value in income_data.items():
        setattr(db_income, key, value)
    session.add(db_income)
    session.commit()
    session.refresh(db_income)
    return db_income

@router_income.delete("/{income_id}")
def delete_income(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), income_id: int):
    income = session.get(Income, income_id)
    if not income or income.user_id != user.id:
        raise HTTPException(status_code=404, detail="Entrada não encontrada")
    session.delete(income)
    session.commit()
    return {"ok": True}

@router_income.patch("/{income_id}/toggle-status", response_model=IncomeRead)
def toggle_income_status(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), income_id: int):
    income = session.get(Income, income_id)
    if not income or income.user_id != user.id:
        raise HTTPException(status_code=404, detail="Entrada não encontrada")
    income.received = not income.received
    session.add(income)
    session.commit()
    session.refresh(income)
    return income

# --- Rotas de Metas ---
@router_goals.post("/", response_model=GoalRead)
def create_goal(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), goal: GoalCreate):
    db_goal = Goal.from_orm(goal, update={"user_id": user.id})
    session.add(db_goal)
    session.commit()
    session.refresh(db_goal)
    goal_read = GoalRead.from_orm(db_goal)
    goal_read.monthly_contribution = _calculate_monthly_contribution(db_goal)
    return goal_read

@router_goals.get("/", response_model=List[GoalRead])
def read_goals(*, session: Session = Depends(get_session), user: User = Depends(get_current_user)):
    goals = session.exec(select(Goal).where(Goal.user_id == user.id)).all()
    goals_read_list = []
    for goal in goals:
        goal_read = GoalRead.from_orm(goal)
        goal_read.monthly_contribution = _calculate_monthly_contribution(goal)
        goals_read_list.append(goal_read)
    return goals_read_list

@router_goals.get("/{goal_id}", response_model=GoalReadWithExpenses)
def read_goal(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), goal_id: int):
    goal = session.get(Goal, goal_id)
    if not goal or goal.user_id != user.id:
        raise HTTPException(status_code=404, detail="Meta não encontrada")
    goal_read = GoalReadWithExpenses.from_orm(goal)
    goal_read.monthly_contribution = _calculate_monthly_contribution(goal)
    return goal_read

@router_goals.put("/{goal_id}", response_model=GoalRead)
def update_goal(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), goal_id: int, goal: GoalCreate):
    db_goal = session.get(Goal, goal_id)
    if not db_goal or db_goal.user_id != user.id:
        raise HTTPException(status_code=404, detail="Meta não encontrada")
    goal_data = goal.dict(exclude_unset=True)
    for key, value in goal_data.items():
        if key != "current_amount":
            setattr(db_goal, key, value)
    session.add(db_goal)
    session.commit()
    session.refresh(db_goal)
    goal_read = GoalRead.from_orm(db_goal)
    goal_read.monthly_contribution = _calculate_monthly_contribution(db_goal)
    return goal_read

@router_goals.delete("/{goal_id}")
def delete_goal(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), goal_id: int):
    db_goal = session.get(Goal, goal_id)
    if not db_goal or db_goal.user_id != user.id:
        raise HTTPException(status_code=404, detail="Meta não encontrada")
    statement = select(Expense).where(Expense.goal_id == goal_id)
    expenses_to_update = session.exec(statement).all()
    for expense in expenses_to_update:
        expense.goal_id = None
        session.add(expense)
    session.delete(db_goal)
    session.commit()
    return {"ok": True}

@router_goals.post("/{goal_id}/deposit", response_model=GoalRead)
def deposit_to_goal(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), goal_id: int, adjustment: GoalAdjustment):
    db_goal = session.get(Goal, goal_id)
    if not db_goal or db_goal.user_id != user.id:
        raise HTTPException(status_code=404, detail="Meta não encontrada")
    db_goal.current_amount += adjustment.amount
    session.add(db_goal)
    session.commit()
    session.refresh(db_goal)
    goal_read = GoalRead.from_orm(db_goal)
    goal_read.monthly_contribution = _calculate_monthly_contribution(db_goal)
    return goal_read

@router_goals.post("/{goal_id}/withdraw", response_model=GoalRead)
def withdraw_from_goal(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), goal_id: int, adjustment: GoalAdjustment):
    db_goal = session.get(Goal, goal_id)
    if not db_goal or db_goal.user_id != user.id:
        raise HTTPException(status_code=404, detail="Meta não encontrada")
    if db_goal.current_amount < adjustment.amount:
        raise HTTPException(status_code=400, detail="Valor de retirada maior.")
    db_goal.current_amount -= adjustment.amount
    session.add(db_goal)
    session.commit()
    session.refresh(db_goal)
    goal_read = GoalRead.from_orm(db_goal)
    goal_read.monthly_contribution = _calculate_monthly_contribution(db_goal)
    return goal_read

# --- Rotas de Regras ---
@router_rules.get("/suggest", response_model=TransactionRuleRead)
def suggest_categorization(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), description: str):
    keyword = description.lower().strip()
    if not keyword:
        raise HTTPException(status_code=404, detail="Descrição vazia")
    rule = session.exec(select(TransactionRule).where(TransactionRule.keyword == keyword, TransactionRule.user_id == user.id)).first()
    if rule:
        return rule
    raise HTTPException(status_code=404, detail="Nenhuma regra encontrada")


# --- Rotas de Cartão de Crédito ---
@router_cards.post("/", response_model=CreditCardRead)
def create_credit_card(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), card: CreditCardCreate):
    db_card = CreditCard.from_orm(card, update={"user_id": user.id})
    session.add(db_card)
    session.commit()
    session.refresh(db_card)
    return db_card

@router_cards.get("/", response_model=List[CreditCardRead])
def read_credit_cards(*, session: Session = Depends(get_session), user: User = Depends(get_current_user)):
    return session.exec(select(CreditCard).where(CreditCard.user_id == user.id)).all()

@router_cards.put("/{card_id}", response_model=CreditCardRead)
def update_credit_card(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), card_id: int, card: CreditCardCreate):
    db_card = session.get(CreditCard, card_id)
    if not db_card or db_card.user_id != user.id:
        raise HTTPException(status_code=404, detail="Cartão não encontrado")
    card_data = card.dict(exclude_unset=True)
    for key, value in card_data.items():
        setattr(db_card, key, value)
    session.add(db_card)
    session.commit()
    session.refresh(db_card)
    return db_card

@router_cards.delete("/{card_id}")
def delete_credit_card(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), card_id: int):
    card = session.get(CreditCard, card_id)
    if not card or card.user_id != user.id:
        raise HTTPException(status_code=404, detail="Cartão não encontrado")
    statement = select(Expense).where(Expense.credit_card_id == card_id, Expense.user_id == user.id)
    expenses_to_update = session.exec(statement).all()
    for exp in expenses_to_update:
        exp.credit_card_id = None
        session.add(exp)
    session.delete(card)
    session.commit()
    return {"ok": True}

@router_cards.post("/{card_id}/pay", response_model=ExpenseRead)
def pay_credit_card_fatura(*, session: Session = Depends(get_session), user: User = Depends(get_current_user), card_id: int, payment_data: PayFaturaRequest):
    card = session.get(CreditCard, card_id)
    if not card or card.user_id != user.id:
        raise HTTPException(status_code=404, detail="Cartão não encontrado")
    
    statement = select(Expense).where(
        Expense.credit_card_id == card_id,
        Expense.user_id == user.id,
        Expense.paid == False
    )
    pending_expenses = session.exec(statement).all()
    
    for exp in pending_expenses:
        exp.paid = True
        session.add(exp)
        
    payment_expense = Expense(
        description=f"Pagamento Fatura - {card.name}",
        amount=payment_data.amount,
        date=datetime.now(),
        paid=True,
        budget_group_id=payment_data.budget_group_id,
        user_id=user.id
    )
    session.add(payment_expense)
    try:
        session.commit()
    except Exception as e:
        session.rollback()
        raise HTTPException(status_code=500, detail=f"Erro: {e}")
    
    session.refresh(payment_expense)
    return payment_expense