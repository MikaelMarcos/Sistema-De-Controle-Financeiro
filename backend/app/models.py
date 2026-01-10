from sqlmodel import SQLModel, Field, Relationship
from typing import Optional, List
from datetime import datetime
from decimal import Decimal
from sqlalchemy import Column, Numeric

# --- Modelo de Usuário ---
class UserBase(SQLModel):
    email: str = Field(unique=True, index=True)

class UserCreate(UserBase):
    password: str

class User(UserBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    hashed_password: str
    expenses: List["Expense"] = Relationship(back_populates="user")
    incomes: List["Income"] = Relationship(back_populates="user")
    goals: List["Goal"] = Relationship(back_populates="user")
    credit_cards: List["CreditCard"] = Relationship(back_populates="user")
    budget_groups: List["BudgetGroup"] = Relationship(back_populates="user")
    categories: List["Category"] = Relationship(back_populates="user")
    portfolio_holdings: List["PortfolioHolding"] = Relationship(back_populates="user")
    transaction_rules: List["TransactionRule"] = Relationship(back_populates="user")

# --- Modelo de GRUPO DE ORÇAMENTO ---
class BudgetGroup(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    target_percentage: int = Field(default=0)
    user_id: int = Field(foreign_key="user.id")
    user: User = Relationship(back_populates="budget_groups")
    expenses: List["Expense"] = Relationship(back_populates="budget_group")

class BudgetGroupCreate(SQLModel):
    name: str

# --- Modelos de Categoria ---
class CategoryBase(SQLModel):
    name: str = Field(index=True, unique=True)
    description: Optional[str] = None
class CategoryCreate(CategoryBase):
    pass
class Category(CategoryBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    user: User = Relationship(back_populates="categories")
    expenses: List["Expense"] = Relationship(back_populates="category")
class CategoryRead(CategoryBase):
    id: int

# --- Modelos de Cartão de Crédito ---
class CreditCardBase(SQLModel):
    name: str = Field(index=True)
    closing_day: int
    due_day: int
class CreditCard(CreditCardBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    user: User = Relationship(back_populates="credit_cards")
    expenses: List["Expense"] = Relationship(back_populates="credit_card")
class CreditCardCreate(CreditCardBase):
    pass
class CreditCardRead(CreditCardBase):
    id: int

# --- 👇 CLASSE QUE FALTAVA 👇 ---
class PayFaturaRequest(SQLModel):
    amount: Decimal
    budget_group_id: int

# --- Modelos de Metas ---
class GoalBase(SQLModel):
    name: str = Field(index=True)
    target_amount: Decimal = Field(sa_column=Column(Numeric(15, 2)))
    current_amount: Decimal = Field(default=0.0, sa_column=Column(Numeric(15, 2)))
    deadline: Optional[datetime] = Field(default=None)
    notes: Optional[str] = None
    image_url: Optional[str] = Field(default=None)
class GoalCreate(GoalBase):
    pass
class Goal(GoalBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    user: User = Relationship(back_populates="goals")
    expenses: List["Expense"] = Relationship(back_populates="goal")
class GoalRead(GoalBase):
    id: int
    monthly_contribution: Decimal = 0.0
class GoalAdjustment(SQLModel):
    amount: Decimal = Field(gt=0, sa_column=Column(Numeric(15, 2)))
    description: Optional[str] = None

# --- Modelos de Despesa ---
class ExpenseBase(SQLModel):
    description: str
    amount: Decimal = Field(sa_column=Column(Numeric(15, 2)))
    date: datetime = Field(default_factory=datetime.utcnow)
    paid: bool = Field(default=True)
    budget_group_id: int = Field(foreign_key="budgetgroup.id")
    category_id: Optional[int] = Field(default=None, foreign_key="category.id")
    goal_id: Optional[int] = Field(default=None, foreign_key="goal.id")
    credit_card_id: Optional[int] = Field(default=None, foreign_key="creditcard.id")
    installment_current: int = Field(default=1)
    installments_total: int = Field(default=1)
class ExpenseCreate(SQLModel):
    description: str
    total_amount: Decimal
    date: datetime = Field(default_factory=datetime.utcnow)
    paid: bool = Field(default=True)
    budget_group_id: int
    category_id: Optional[int] = None
    goal_id: Optional[int] = None
    credit_card_id: Optional[int] = None
    installments_total: int = Field(default=1)
class Expense(ExpenseBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    user: User = Relationship(back_populates="expenses")
    budget_group: BudgetGroup = Relationship(back_populates="expenses")
    category: Optional[Category] = Relationship(back_populates="expenses")
    goal: Optional[Goal] = Relationship(back_populates="expenses")
    credit_card: Optional[CreditCard] = Relationship(back_populates="expenses")
class ExpenseRead(ExpenseBase):
    id: int
class ExpenseReadWithDetails(ExpenseRead):
    budget_group: BudgetGroup
    category: Optional[CategoryRead] = None
    goal: Optional[GoalRead] = None
    credit_card: Optional[CreditCardRead] = None

# --- Modelos de Entrada ---
class IncomeBase(SQLModel):
    description: str
    amount: Decimal = Field(sa_column=Column(Numeric(15, 2)))
    date: datetime = Field(default_factory=datetime.utcnow)
    received: bool = Field(default=True)
class IncomeCreate(IncomeBase):
    pass
class Income(IncomeBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    user: User = Relationship(back_populates="incomes")
class IncomeRead(IncomeBase):
    id: int

# --- Modelos de Regras de Transação ---
class TransactionRule(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    keyword: str = Field(index=True)
    budget_group_id: int = Field(foreign_key="budgetgroup.id")
    category_id: Optional[int] = Field(default=None, foreign_key="category.id")
    user_id: int = Field(foreign_key="user.id")
    user: User = Relationship(back_populates="transaction_rules")
class TransactionRuleRead(SQLModel):
    budget_group_id: int
    category_id: Optional[int] = None

# --- Modelos de Investimento ---
class Asset(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    ticker: str = Field(unique=True, index=True)
    name: str
    asset_type: str
    holdings: List["PortfolioHolding"] = Relationship(back_populates="asset")
class AssetCreate(SQLModel):
    ticker: str; name: str; asset_type: str
class AssetRead(AssetCreate):
    id: int
class PortfolioHolding(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    asset_id: int = Field(foreign_key="asset.id")
    quantity: Decimal = Field(sa_column=Column(Numeric(15, 6)))
    average_price: Decimal = Field(sa_column=Column(Numeric(15, 2)))
    user_id: int = Field(foreign_key="user.id")
    user: User = Relationship(back_populates="portfolio_holdings")
    asset: Asset = Relationship(back_populates="holdings")
class PortfolioHoldingCreate(SQLModel):
    ticker: str; name: str; asset_type: str; quantity: Decimal; average_price: Decimal
class PortfolioHoldingRead(SQLModel):
    id: int; quantity: Decimal; average_price: Decimal; asset: AssetRead

# --- Modelos de Leitura Combinados ---
class CategoryReadWithExpenses(CategoryRead):
    expenses: List[ExpenseRead] = []
class GoalReadWithExpenses(GoalRead):
    expenses: List[ExpenseRead] = []