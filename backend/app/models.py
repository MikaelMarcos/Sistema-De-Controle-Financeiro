from sqlmodel import SQLModel, Field, Relationship
from typing import Optional, List
from datetime import datetime

# --- Modelo de GRUPO DE ORÇAMENTO ---
class BudgetGroup(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(unique=True, index=True)
    target_percentage: int = Field(default=0)
    expenses: List["Expense"] = Relationship(back_populates="budget_group")

# --- Modelos de Categoria ---
class CategoryBase(SQLModel):
    name: str = Field(index=True, unique=True)
    description: Optional[str] = None
class CategoryCreate(CategoryBase):
    pass
class Category(CategoryBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    expenses: List["Expense"] = Relationship(back_populates="category")
class CategoryRead(CategoryBase):
    id: int

# --- Modelos de Metas ---
class GoalBase(SQLModel):
    name: str = Field(index=True)
    target_amount: float
    current_amount: float = Field(default=0.0)
    deadline: Optional[datetime] = Field(default=None)
    notes: Optional[str] = None
class GoalCreate(GoalBase):
    pass
class Goal(GoalBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    expenses: List["Expense"] = Relationship(back_populates="goal")
class GoalRead(GoalBase):
    id: int
    monthly_contribution: float = 0.0 # Campo calculado
class GoalAdjustment(SQLModel):
    amount: float = Field(gt=0)
    description: Optional[str] = None

# --- Modelos de Despesa ---
class ExpenseBase(SQLModel):
    description: str
    amount: float
    date: datetime = Field(default_factory=datetime.utcnow)
    paid: bool = Field(default=True)
    budget_group_id: int = Field(foreign_key="budgetgroup.id")
    category_id: Optional[int] = Field(default=None, foreign_key="category.id")
    goal_id: Optional[int] = Field(default=None, foreign_key="goal.id")
class ExpenseCreate(ExpenseBase):
    pass
class Expense(ExpenseBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    budget_group: BudgetGroup = Relationship(back_populates="expenses")
    category: Optional[Category] = Relationship(back_populates="expenses")
    goal: Optional[Goal] = Relationship(back_populates="expenses")
class ExpenseRead(ExpenseBase):
    id: int

# --- Modelos de Entrada ---
class IncomeBase(SQLModel):
    description: str
    amount: float
    date: datetime = Field(default_factory=datetime.utcnow)
    received: bool = Field(default=True)
class IncomeCreate(IncomeBase):
    pass
class Income(IncomeBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
class IncomeRead(IncomeBase):
    id: int

# --- Modelos de Regras de Transação ---
class TransactionRule(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    keyword: str = Field(index=True, unique=True)
    budget_group_id: int = Field(foreign_key="budgetgroup.id")
    category_id: Optional[int] = Field(default=None, foreign_key="category.id")
class TransactionRuleRead(SQLModel):
    budget_group_id: int
    category_id: Optional[int] = None

# --- 👇 NOVOS MODELOS DE INVESTIMENTO 👇 ---

# Descreve o ativo (Ex: ITUB4, Bitcoin)
class Asset(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    ticker: str = Field(unique=True, index=True) # Ex: ITUB4, BTC, IFIX
    name: str
    asset_type: str # Ex: "Ação", "FII", "Cripto", "Renda Fixa"
    
    holdings: List["PortfolioHolding"] = Relationship(back_populates="asset")

# Descreve quanto você tem desse ativo
class PortfolioHolding(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    asset_id: int = Field(foreign_key="asset.id")
    quantity: float # Quantidade (ex: 100 ações, 0.5 BTC)
    average_price: float # Seu preço médio de compra
    
    asset: Asset = Relationship(back_populates="holdings")

# Modelos para a API (Criar/Ler)
class AssetCreate(SQLModel):
    ticker: str
    name: str
    asset_type: str
class AssetRead(AssetCreate):
    id: int

class PortfolioHoldingCreate(SQLModel):
    ticker: str # O usuário vai digitar o ticker
    name: str
    asset_type: str # Ex: "Ação"
    quantity: float
    average_price: float

class PortfolioHoldingRead(SQLModel):
    id: int
    quantity: float
    average_price: float
    asset: AssetRead # Mostra o ativo aninhado

# --- Modelos de Leitura Combinados (Sem alteração) ---
class ExpenseReadWithDetails(ExpenseRead):
    budget_group: BudgetGroup
    category: Optional[CategoryRead] = None
    goal: Optional[GoalRead] = None
class CategoryReadWithExpenses(CategoryRead):
    expenses: List[ExpenseRead] = []
class GoalReadWithExpenses(GoalRead):
    expenses: List[ExpenseRead] = []