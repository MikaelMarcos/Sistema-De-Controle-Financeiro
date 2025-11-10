from sqlmodel import SQLModel, Field, Relationship
from typing import Optional, List
from datetime import datetime

# --- Modelo de GRUPO DE ORÇAMENTO ---
class BudgetGroup(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(unique=True, index=True)
    target_percentage: int = Field(default=0)
    
    expenses: List["Expense"] = Relationship(back_populates="budget_group")

# --- Modelos de Categoria (Subgrupos Opcionais) ---
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

class GoalAdjustment(SQLModel):
    amount: float = Field(gt=0)
    description: Optional[str] = None

# --- Modelos de Despesa ---
class ExpenseBase(SQLModel):
    description: str
    amount: float
    date: datetime = Field(default_factory=datetime.utcnow)
    budget_group_id: int = Field(foreign_key="budgetgroup.id") # Obrigatório
    category_id: Optional[int] = Field(default=None, foreign_key="category.id") # Opcional
    goal_id: Optional[int] = Field(default=None, foreign_key="goal.id") # Opcional

class ExpenseCreate(ExpenseBase):
    pass

class Expense(ExpenseBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    budget_group: BudgetGroup = Relationship(back_populates="expenses")
    category: Optional[Category] = Relationship(back_populates="expenses")
    goal: Optional[Goal] = Relationship(back_populates="expenses")

class ExpenseRead(ExpenseBase):
    id: int

# --- Modelos de Leitura Combinados (ESTAVAM FALTANDO AQUI) ---
class ExpenseReadWithDetails(ExpenseRead):
    budget_group: BudgetGroup
    category: Optional[CategoryRead] = None
    goal: Optional[GoalRead] = None

class CategoryReadWithExpenses(CategoryRead):
    expenses: List[ExpenseRead] = []

class GoalReadWithExpenses(GoalRead):
    expenses: List[ExpenseRead] = []

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