from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from typing import List, Optional
from sqlalchemy import extract, func, exc
from sqlalchemy.orm import joinedload
from datetime import datetime, date
from dateutil.relativedelta import relativedelta
from alpha_vantage.timeseries import TimeSeries

from .database import get_session
from .models import (
    Expense, ExpenseCreate, ExpenseRead, ExpenseReadWithDetails,  # 👈 Expense adicionado
    Category, CategoryCreate, CategoryRead,
    Income, IncomeCreate, IncomeRead,
    Goal, GoalCreate, GoalRead, GoalReadWithExpenses, GoalAdjustment,
    BudgetGroup, TransactionRule, TransactionRuleRead,
    Asset, AssetCreate, AssetRead,
    PortfolioHolding, PortfolioHoldingCreate, PortfolioHoldingRead,
    CreditCard, CreditCardCreate, CreditCardRead, PayFaturaRequest  # 👈 PayFaturaRequest adicionado
)

ALPHA_VANTAGE_KEY = "Q78Q2UAD5K1RXJME"

# --- Definição dos Routers ---
router_expenses = APIRouter(prefix="/expenses", tags=["Expenses"])
router_categories = APIRouter(prefix="/categories", tags=["Categories"])
router_income = APIRouter(prefix="/income", tags=["Income"])
router_goals = APIRouter(prefix="/goals", tags=["Goals"])
router_budget = APIRouter(prefix="/budget", tags=["Budget Groups"])
router_rules = APIRouter(prefix="/rules", tags=["Rules"])
router_portfolio = APIRouter(prefix="/portfolio", tags=["Portfolio"])
router_cards = APIRouter(prefix="/cards", tags=["Credit Cards"])

# --- Função Auxiliar de Cálculo de Aporte ---
def _calculate_monthly_contribution(goal: Goal) -> float:
    if not goal.deadline or goal.deadline.date() <= date.today(): return 0.0
    amount_needed = goal.target_amount - goal.current_amount
    if amount_needed <= 0: return 0.0
    today = date.today(); deadline_date = goal.deadline.date()
    months_remaining = (deadline_date.year - today.year) * 12 + (deadline_date.month - today.month)
    if months_remaining <= 0: months_remaining = 1
    return amount_needed / months_remaining

# --- Rotas de Grupos de Orçamento (Budget Groups) ---
@router_budget.get("/", response_model=List[BudgetGroup])
def read_budget_groups(*, session: Session = Depends(get_session)): return session.exec(select(BudgetGroup)).all()
@router_budget.put("/{group_id}", response_model=BudgetGroup)
def update_budget_group_percentage(*, session: Session = Depends(get_session), group_id: int, target_percentage: int):
    group = session.get(BudgetGroup, group_id);
    if not group: raise HTTPException(status_code=404, detail="Grupo não encontrado")
    group.target_percentage = target_percentage
    session.add(group); session.commit(); session.refresh(group)
    return group
@router_budget.get("/analysis")
def analyze_budget(*, session: Session = Depends(get_session), month: int, year: int):
    income_stmt = select(func.sum(Income.amount)).where(extract('month', Income.date) == month, extract('year', Income.date) == year)
    total_income = session.exec(income_stmt).one() or 0.0
    groups = session.exec(select(BudgetGroup)).all()
    analysis = []
    for group in groups:
        expense_stmt = select(func.sum(Expense.amount)).where(Expense.budget_group_id == group.id, extract('month', Expense.date) == month, extract('year', Income.date) == year)
        actual_spent = session.exec(expense_stmt).one() or 0.0
        planned_amount = (total_income * (group.target_percentage / 100.0))
        analysis.append({"group_id": group.id, "name": group.name, "target_percentage": group.target_percentage, "planned_amount": planned_amount, "actual_spent": actual_spent, "is_over_budget": actual_spent > planned_amount if planned_amount > 0 else False})
    return {"month": month, "year": year, "total_income": total_income, "analysis": analysis}

# --- Rotas de Despesas (Expenses) ---
@router_expenses.post("/", response_model=List[ExpenseRead])
def create_expense(*, session: Session = Depends(get_session), expense_in: ExpenseCreate):
    installments_total = expense_in.installments_total
    if installments_total > 1 and not expense_in.credit_card_id:
        raise HTTPException(status_code=400, detail="Parcelamento só é permitido em compras no cartão de crédito.")
    installment_amount = round(expense_in.total_amount / installments_total, 2)
    total_except_last = installment_amount * (installments_total - 1)
    last_installment_amount = expense_in.total_amount - total_except_last
    created_expenses = []
    for i in range(installments_total):
        current_installment = i + 1
        installment_date = expense_in.date + relativedelta(months=i)
        is_paid = expense_in.paid
        if expense_in.credit_card_id: is_paid = False
        if i == 0 and not expense_in.credit_card_id: is_paid = expense_in.paid
        elif i > 0 and not expense_in.credit_card_id: is_paid = False
        db_expense = Expense(
            description=f"{expense_in.description} ({current_installment}/{installments_total})",
            amount=last_installment_amount if current_installment == installments_total else installment_amount,
            date=installment_date, paid=is_paid, budget_group_id=expense_in.budget_group_id,
            category_id=expense_in.category_id, goal_id=expense_in.goal_id, credit_card_id=expense_in.credit_card_id,
            installment_current=current_installment, installments_total=installments_total
        )
        if db_expense.goal_id and current_installment == 1:
            goal = session.get(Goal, db_expense.goal_id)
            if not goal: raise HTTPException(status_code=404, detail="Meta não encontrada")
            goal.current_amount += expense_in.total_amount; session.add(goal)
        session.add(db_expense); created_expenses.append(db_expense)
    keyword = expense_in.description.lower().strip()
    existing_rule = session.exec(select(TransactionRule).where(TransactionRule.keyword == keyword)).first()
    if not existing_rule:
        new_rule = TransactionRule(keyword=keyword, budget_group_id=expense_in.budget_group_id, category_id=expense_in.category_id)
        session.add(new_rule)
    try: session.commit()
    except exc.IntegrityError: session.rollback(); raise HTTPException(status_code=500, detail="Erro ao salvar despesa e regra.")
    for exp in created_expenses: session.refresh(exp)
    return created_expenses
@router_expenses.get("/", response_model=List[ExpenseReadWithDetails])
def read_expenses(*, session: Session = Depends(get_session), month: Optional[int] = None, year: Optional[int] = None):
    statement = select(Expense).options(joinedload(Expense.budget_group), joinedload(Expense.category), joinedload(Expense.goal), joinedload(Expense.credit_card))
    if month and year: statement = statement.where(extract('month', Expense.date) == month).where(extract('year', Expense.date) == year)
    statement = statement.order_by(Expense.date.desc())
    return session.exec(statement).all()
@router_expenses.delete("/{expense_id}")
def delete_expense(*, session: Session = Depends(get_session), expense_id: int):
    expense = session.get(Expense, expense_id);
    if not expense: raise HTTPException(status_code=404, detail="Despesa não encontrada")
    session.delete(expense); session.commit()
    return {"ok": True}
@router_expenses.patch("/{expense_id}/toggle-status", response_model=ExpenseRead)
def toggle_expense_status(*, session: Session = Depends(get_session), expense_id: int):
    expense = session.get(Expense, expense_id);
    if not expense: raise HTTPException(status_code=404, detail="Despesa não encontrada")
    expense.paid = not expense.paid
    session.add(expense); session.commit(); session.refresh(expense)
    return expense

# --- Rotas de Categorias (Subgrupos) ---
@router_categories.post("/", response_model=CategoryRead)
def create_category(*, session: Session = Depends(get_session), category: CategoryCreate):
    existing = session.exec(select(Category).where(Category.name == category.name)).first()
    if existing: return existing
    db_category = Category.from_orm(category); session.add(db_category); session.commit(); session.refresh(db_category)
    return db_category
@router_categories.get("/", response_model=List[CategoryRead])
def read_categories(*, session: Session = Depends(get_session)):
    return session.exec(select(Category)).all()

# --- Rotas de Entradas (Income) ---
@router_income.post("/", response_model=IncomeRead)
def create_income(*, session: Session = Depends(get_session), income: IncomeCreate):
    db_income = Income.from_orm(income); session.add(db_income); session.commit(); session.refresh(db_income)
    return db_income
@router_income.get("/", response_model=List[IncomeRead])
def read_income(*, session: Session = Depends(get_session), month: Optional[int] = None, year: Optional[int] = None):
    statement = select(Income);
    if month and year: statement = statement.where(extract('month', Income.date) == month).where(extract('year', Income.date) == year)
    statement = statement.order_by(Income.date.desc())
    return session.exec(statement).all()
@router_income.delete("/{income_id}")
def delete_income(*, session: Session = Depends(get_session), income_id: int):
    income = session.get(Income, income_id);
    if not income: raise HTTPException(status_code=404, detail="Entrada não encontrada")
    session.delete(income); session.commit()
    return {"ok": True}
@router_income.patch("/{income_id}/toggle-status", response_model=IncomeRead)
def toggle_income_status(*, session: Session = Depends(get_session), income_id: int):
    income = session.get(Income, income_id);
    if not income: raise HTTPException(status_code=404, detail="Entrada não encontrada")
    income.received = not income.received
    session.add(income); session.commit(); session.refresh(income)
    return income

# --- Rotas de Metas (Goals) ---
@router_goals.post("/", response_model=GoalRead)
def create_goal(*, session: Session = Depends(get_session), goal: GoalCreate):
    db_goal = Goal.from_orm(goal); session.add(db_goal); session.commit(); session.refresh(db_goal)
    goal_read = GoalRead.from_orm(db_goal); goal_read.monthly_contribution = _calculate_monthly_contribution(db_goal)
    return goal_read
@router_goals.get("/", response_model=List[GoalRead])
def read_goals(*, session: Session = Depends(get_session)):
    goals = session.exec(select(Goal)).all(); goals_read_list = []
    for goal in goals:
        goal_read = GoalRead.from_orm(goal); goal_read.monthly_contribution = _calculate_monthly_contribution(goal); goals_read_list.append(goal_read)
    return goals_read_list
@router_goals.get("/{goal_id}", response_model=GoalReadWithExpenses)
def read_goal(*, session: Session = Depends(get_session), goal_id: int):
    goal = session.get(Goal, goal_id);
    if not goal: raise HTTPException(status_code=404, detail="Meta não encontrada")
    goal_read = GoalReadWithExpenses.from_orm(goal); goal_read.monthly_contribution = _calculate_monthly_contribution(goal)
    return goal_read
@router_goals.put("/{goal_id}", response_model=GoalRead)
def update_goal(*, session: Session = Depends(get_session), goal_id: int, goal: GoalCreate):
    db_goal = session.get(Goal, goal_id);
    if not db_goal: raise HTTPException(status_code=404, detail="Meta não encontrada")
    goal_data = goal.dict(exclude_unset=True)
    for key, value in goal_data.items():
        if key != "current_amount": setattr(db_goal, key, value)
    session.add(db_goal); session.commit(); session.refresh(db_goal)
    goal_read = GoalRead.from_orm(db_goal); goal_read.monthly_contribution = _calculate_monthly_contribution(db_goal)
    return goal_read
@router_goals.delete("/{goal_id}")
def delete_goal(*, session: Session = Depends(get_session), goal_id: int):
    db_goal = session.get(Goal, goal_id);
    if not db_goal: raise HTTPException(status_code=404, detail="Meta não encontrada")
    statement = select(Expense).where(Expense.goal_id == goal_id); expenses_to_update = session.exec(statement).all()
    for expense in expenses_to_update: expense.goal_id = None; session.add(expense)
    session.delete(db_goal); session.commit()
    return {"ok": True}
@router_goals.post("/{goal_id}/deposit", response_model=GoalRead)
def deposit_to_goal(*, session: Session = Depends(get_session), goal_id: int, adjustment: GoalAdjustment):
    db_goal = session.get(Goal, goal_id);
    if not db_goal: raise HTTPException(status_code=404, detail="Meta não encontrada")
    db_goal.current_amount += adjustment.amount; session.add(db_goal); session.commit(); session.refresh(db_goal)
    goal_read = GoalRead.from_orm(db_goal); goal_read.monthly_contribution = _calculate_monthly_contribution(db_goal)
    return goal_read
@router_goals.post("/{goal_id}/withdraw", response_model=GoalRead)
def withdraw_from_goal(*, session: Session = Depends(get_session), goal_id: int, adjustment: GoalAdjustment):
    db_goal = session.get(Goal, goal_id);
    if not db_goal: raise HTTPException(status_code=404, detail="Meta não encontrada")
    if db_goal.current_amount < adjustment.amount: raise HTTPException(status_code=400, detail="Valor de retirada maior.")
    db_goal.current_amount -= adjustment.amount; session.add(db_goal); session.commit(); session.refresh(db_goal)
    goal_read = GoalRead.from_orm(db_goal); goal_read.monthly_contribution = _calculate_monthly_contribution(db_goal)
    return goal_read

# --- Rotas de Regras (Rules) ---
@router_rules.get("/suggest", response_model=TransactionRuleRead)
def suggest_categorization(*, session: Session = Depends(get_session), description: str):
    keyword = description.lower().strip()
    if not keyword: raise HTTPException(status_code=404, detail="Descrição vazia")
    rule = session.exec(select(TransactionRule).where(TransactionRule.keyword == keyword)).first()
    if rule: return rule
    raise HTTPException(status_code=404, detail="Nenhuma regra encontrada")

# --- Rotas do Portfólio ---
@router_portfolio.post("/", response_model=PortfolioHoldingRead)
def add_portfolio_holding(*, session: Session = Depends(get_session), holding: PortfolioHoldingCreate):
    asset = session.exec(select(Asset).where(Asset.ticker == holding.ticker)).first()
    if not asset: asset = Asset(ticker=holding.ticker, name=holding.name, asset_type=holding.asset_type); session.add(asset); session.commit(); session.refresh(asset)
    db_holding = PortfolioHolding(asset_id=asset.id, quantity=holding.quantity, average_price=holding.average_price)
    session.add(db_holding); session.commit(); session.refresh(db_holding)
    return db_holding
@router_portfolio.get("/", response_model=List[PortfolioHoldingRead])
def get_portfolio_holdings(*, session: Session = Depends(get_session)):
    return session.exec(select(PortfolioHolding)).all()
@router_portfolio.delete("/{holding_id}")
def delete_portfolio_holding(*, session: Session = Depends(get_session), holding_id: int):
    holding = session.get(PortfolioHolding, holding_id);
    if not holding: raise HTTPException(status_code=404, detail="Ativo não encontrado")
    session.delete(holding); session.commit()
    return {"ok": True}
@router_portfolio.get("/quote/{ticker}")
def get_stock_price(*, ticker: str):
    ts = TimeSeries(key=ALPHA_VANTAGE_KEY, output_format='json'); api_ticker = ticker.upper()
    if not any(char.isdigit() for char in ticker) and len(ticker) > 3: pass
    elif ".SA" not in api_ticker: api_ticker = f"{api_ticker}.SA"
    try:
        data, meta_data = ts.get_quote_endpoint(api_ticker); price_str = data.get('05. price');
        if not price_str: raise HTTPException(status_code=404, detail="Preço não encontrado")
        return {"ticker": ticker, "price": float(price_str)}
    except Exception as e:
        try:
            data, meta_data = ts.get_quote_endpoint(ticker.upper()); price_str = data.get('05. price');
            if not price_str: raise
            return {"ticker": ticker, "price": float(price_str)}
        except Exception: raise HTTPException(status_code=404, detail=f"Ticker '{ticker}' não encontrado ou erro na API.")

# --- Rotas de Cartão de Crédito (ATUALIZADAS) ---
@router_cards.post("/", response_model=CreditCardRead)
def create_credit_card(*, session: Session = Depends(get_session), card: CreditCardCreate):
    db_card = CreditCard.from_orm(card); session.add(db_card); session.commit(); session.refresh(db_card)
    return db_card

@router_cards.get("/", response_model=List[CreditCardRead])
def read_credit_cards(*, session: Session = Depends(get_session)):
    return session.exec(select(CreditCard)).all()

@router_cards.put("/{card_id}", response_model=CreditCardRead)
def update_credit_card(*, session: Session = Depends(get_session), card_id: int, card: CreditCardCreate):
    db_card = session.get(CreditCard, card_id);
    if not db_card: raise HTTPException(status_code=404, detail="Cartão não encontrado")
    card_data = card.dict(exclude_unset=True)
    for key, value in card_data.items(): setattr(db_card, key, value)
    session.add(db_card); session.commit(); session.refresh(db_card)
    return db_card

@router_cards.delete("/{card_id}")
def delete_credit_card(*, session: Session = Depends(get_session), card_id: int):
    card = session.get(CreditCard, card_id);
    if not card: raise HTTPException(status_code=404, detail="Cartão não encontrado")
    statement = select(Expense).where(Expense.credit_card_id == card_id); expenses_to_update = session.exec(statement).all()
    for exp in expenses_to_update: exp.credit_card_id = None; session.add(exp)
    session.delete(card); session.commit()
    return {"ok": True}

# --- 👇 NOVA ROTA DE PAGAMENTO DE FATURA 👇 ---

@router_cards.post("/{card_id}/pay", response_model=ExpenseRead)
def pay_credit_card_fatura(
    *,
    session: Session = Depends(get_session),
    card_id: int,
    payment_data: PayFaturaRequest
):
    """
    Paga a fatura do cartão:
    1. Marca todas as despesas pendentes daquele cartão como 'pagas'.
    2. Cria uma nova despesa de "saída de caixa" para o pagamento.
    """
    
    card = session.get(CreditCard, card_id)
    if not card:
        raise HTTPException(status_code=404, detail="Cartão não encontrado")
    
    # 1. Encontra todas as despesas PENDENTES deste cartão
    statement = select(Expense).where(
        Expense.credit_card_id == card_id,
        Expense.paid == False
    )
    pending_expenses = session.exec(statement).all()
    
    # 2. Marca todas elas como 'paid = True'
    for exp in pending_expenses:
        exp.paid = True
        session.add(exp)
        
    # 3. Cria a nova despesa (o pagamento da fatura)
    #    Esta é a despesa que REALMENTE sai do seu caixa.
    payment_expense = Expense(
        description=f"Pagamento Fatura - {card.name}",
        amount=payment_data.amount,
        date=datetime.now(), # O pagamento é hoje
        paid=True, # Sim, este pagamento já foi feito (saiu do caixa)
        budget_group_id=payment_data.budget_group_id,
        category_id=None, # Opcional: criar uma subcategoria "Pagamento de Fatura"
        credit_card_id=None # O pagamento em si NÃO é no crédito
    )
    session.add(payment_expense)
    
    try:
        session.commit()
    except Exception as e:
        session.rollback()
        raise HTTPException(status_code=500, detail=f"Erro ao processar pagamento: {e}")
    
    session.refresh(payment_expense)
    
    # Retorna a despesa de pagamento que acabou de ser criada
    return payment_expense