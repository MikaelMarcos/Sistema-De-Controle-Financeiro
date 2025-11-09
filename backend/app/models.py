from sqlmodel import SQLModel, Field, Relationship
from typing import Optional
from datetime import datetime

# --- Modelos de Categoria ---
class CategoryBase(SQLModel):
    name: str = Field(index=True)
    description: Optional[str] = None

class CategoryCreate(CategoryBase):
    pass

class Category(CategoryBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    expenses: list["Expense"] = Relationship(back_populates="category")

class CategoryRead(CategoryBase):
    id: int

# --- Modelos de Metas (NOVO) ---
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
    expenses: list["Expense"] = Relationship(back_populates="goal")

class GoalRead(GoalBase):
    id: int

# --- Modelos de Despesa (ATUALIZADO) ---
class ExpenseBase(SQLModel):
    description: str
    amount: float
    date: datetime = Field(default_factory=datetime.utcnow) 
    category_id: Optional[int] = Field(default=None, foreign_key="category.id")
    # 👇 NOVA LINHA: Vincula a despesa a uma meta
    goal_id: Optional[int] = Field(default=None, foreign_key="goal.id")

class ExpenseCreate(ExpenseBase):
    pass

class Expense(ExpenseBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    
    # Relação com Categoria
    category: Optional[Category] = Relationship(back_populates="expenses")
    # 👇 NOVA LINHA: Relação com Meta
    goal: Optional[Goal] = Relationship(back_populates="expenses")

class ExpenseRead(ExpenseBase):
    id: int

# Modelo para leitura de Despesa com sua Categoria aninhada
class ExpenseReadWithCategory(ExpenseRead):
    category: Optional[CategoryRead] = None
    goal: Optional[GoalRead] = None # Mostra a meta inteira se vinculada

# Modelo para leitura de Categoria com suas Despesas aninhadas
class CategoryReadWithExpenses(CategoryRead):
    expenses: list[ExpenseRead] = []

# Modelo para leitura de Meta com suas Despesas aninhadas
class GoalReadWithExpenses(GoalRead):
    expenses: list[ExpenseRead] = []

# --- Modelos de Entrada ---
class IncomeBase(SQLModel):
    description: str
    amount: float
    date: datetime = Field(default_factory=datetime.utcnow)

class IncomeCreate(IncomeBase):
    pass

class Income(IncomeBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)

class IncomeRead(IncomeBase):
    id: int

    # ... (depois da classe IncomeRead)

# --- Modelo para Ajustes de Meta (NOVO) ---
class GoalAdjustment(SQLModel):
    # gt=0 significa "greater than 0" (maior que zero)
    amount: float = Field(gt=0) 
    description: Optional[str] = None

# ... (depois da classe GoalAdjustment)

# --- Modelos de Resumo para o Dashboard (NOVOS) ---

class CategorySummary(SQLModel):
    """Modelo para agrupar gastos por categoria"""
    category_name: str
    total: float

class DashboardSummary(SQLModel):
    """Modelo de resposta para o endpoint do dashboard"""
    total_income: float
    total_expenses: float
    balance: float
    savings_rate: float
    category_summary: List[CategorySummary]