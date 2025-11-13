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

# --- Modelos de Cartão de Crédito ---
class CreditCardBase(SQLModel):
    name: str = Field(index=True)
    closing_day: int
    due_day: int
class CreditCard(CreditCardBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    expenses: List["Expense"] = Relationship(back_populates="credit_card")
class CreditCardCreate(CreditCardBase):
    pass
class CreditCardRead(CreditCardBase):
    id: int

# --- Modelo para Pagamento de Fatura ---
class PayFaturaRequest(SQLModel):
    amount: float # O valor exato que você pagou
    budget_group_id: int # O grupo onde esse PAGAMENTO será categorizado (ex: "Custo Fixo")

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
    monthly_contribution: float = 0.0
class GoalAdjustment(SQLModel):
    amount: float = Field(gt=0)
    description: Optional[str] = None

# --- Modelos de Despesa (ATUALIZADO) ---
class ExpenseBase(SQLModel):
    description: str
    amount: float # Agora, este será o valor da PARCELA
    date: datetime = Field(default_factory=datetime.utcnow)
    paid: bool = Field(default=True)
    budget_group_id: int = Field(foreign_key="budgetgroup.id")
    category_id: Optional[int] = Field(default=None, foreign_key="category.id")
    goal_id: Optional[int] = Field(default=None, foreign_key="goal.id")
    credit_card_id: Optional[int] = Field(default=None, foreign_key="creditcard.id")

    # 👇 NOVOS CAMPOS DE PARCELAMENTO
    installment_current: int = Field(default=1) # Parcela atual (ex: 1)
    installments_total: int = Field(default=1) # Total de parcelas (ex: 3)

class ExpenseCreate(SQLModel):
    # O formulário enviará o VALOR TOTAL e o NÚMERO DE PARCELAS
    description: str
    total_amount: float # Ex: 300.00
    date: datetime = Field(default_factory=datetime.utcnow)
    paid: bool = Field(default=True)
    budget_group_id: int
    category_id: Optional[int] = None
    goal_id: Optional[int] = None
    credit_card_id: Optional[int] = None
    installments_total: int = Field(default=1)

class Expense(ExpenseBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
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

# --- Modelos de Entrada (sem alteração) ---
class IncomeBase(SQLModel):
    description: str; amount: float; date: datetime = Field(default_factory=datetime.utcnow); received: bool = Field(default=True)
class IncomeCreate(IncomeBase): pass
class Income(IncomeBase, table=True): id: Optional[int] = Field(default=None, primary_key=True)
class IncomeRead(IncomeBase): id: int

# --- Modelos de Regras (sem alteração) ---
class TransactionRule(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True); keyword: str = Field(index=True, unique=True)
    budget_group_id: int = Field(foreign_key="budgetgroup.id"); category_id: Optional[int] = Field(default=None, foreign_key="category.id")
class TransactionRuleRead(SQLModel):
    budget_group_id: int; category_id: Optional[int] = None

# --- Modelos de Investimento (sem alteração) ---
class Asset(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True); ticker: str = Field(unique=True, index=True); name: str; asset_type: str
    holdings: List["PortfolioHolding"] = Relationship(back_populates="asset")
class AssetCreate(SQLModel): ticker: str; name: str; asset_type: str
class AssetRead(AssetCreate): id: int
class PortfolioHolding(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True); asset_id: int = Field(foreign_key="asset.id")
    quantity: float; average_price: float
    asset: Asset = Relationship(back_populates="holdings")
class PortfolioHoldingCreate(SQLModel): ticker: str; name: str; asset_type: str; quantity: float; average_price: float
class PortfolioHoldingRead(SQLModel): id: int; quantity: float; average_price: float; asset: AssetRead

# --- Modelos de Leitura Combinados (sem alteração) ---
class CategoryReadWithExpenses(CategoryRead): expenses: List[ExpenseRead] = []
class GoalReadWithExpenses(GoalRead): expenses: List[ExpenseRead] = []