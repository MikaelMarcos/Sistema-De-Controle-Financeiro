'use client'; 

import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

// --- Seletor de Mês Estilizado ---
function MonthSelector({ currentDate, onDateChange }) {
  const handlePreviousMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    onDateChange(newDate);
  };
  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    onDateChange(newDate);
  };
  const formattedDate = currentDate.toLocaleString('pt-BR', { month: 'long', year: 'numeric' }).replace(/^\w/, (c) => c.toUpperCase());

  return (
    <div className="flex justify-between items-center mb-8">
      <button onClick={handlePreviousMonth} className="p-2 text-fin-gold hover:bg-fin-card rounded-full transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <h2 className="text-3xl font-light text-white tracking-wide">{formattedDate}</h2>
      <button onClick={handleNextMonth} className="p-2 text-fin-gold hover:bg-fin-card rounded-full transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}

// --- Card de Resumo com novas cores ---
function SummaryCard({ title, amount, type }) {
  const formattedAmount = amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
  let colorClass = "text-white";
  if (type === 'income') colorClass = "text-fin-gold"; // Dourado para Entradas
  if (type === 'expense') colorClass = "text-fin-red"; // Vermelho terra para Despesas
  if (type === 'balance') colorClass = amount >= 0 ? "text-fin-highlight" : "text-fin-red";

  return (
    <div className="bg-fin-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/5">
      <h2 className="text-sm font-medium text-gray-300 mb-2 uppercase tracking-wider">{title}</h2>
      <p className={`text-3xl font-bold ${colorClass}`}>{formattedAmount}</p>
    </div>
  );
}

// --- Lista de Despesas Modernizada ---
function ExpenseList({ expenses, onExpenseDeleted }) {
  const handleDelete = (id) => {
    if (confirm("Tem certeza que deseja deletar esta despesa?")) {
      axios.delete(`${API_URL}/expenses/${id}`).then(() => onExpenseDeleted()).catch(e => console.error(e));
    }
  };
  const formatDate = (d) => new Date(d).toLocaleDateString('pt-BR', { timeZone: 'UTC' });

  return (
    <div className="bg-fin-card/50 p-6 rounded-2xl border border-white/5">
      <h2 className="text-xl font-semibold mb-6 text-fin-terra">Últimas Movimentações</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-400 font-light italic">Nenhuma despesa neste mês.</p>
      ) : (
        <ul className="space-y-3">
          {expenses.map(expense => (
            <li key={expense.id} className="flex justify-between items-center bg-fin-dark/40 p-4 rounded-xl hover:bg-fin-dark/60 transition-all border border-white/5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                   <span className="text-xs text-gray-400">{formatDate(expense.date)}</span>
                   {expense.goal && <span className="text-[10px] px-2 py-0.5 rounded-full bg-fin-highlight/20 text-fin-highlight font-bold">Meta: {expense.goal.name}</span>}
                </div>
                <span className="font-medium text-white">{expense.description}</span>
                <span className="text-sm ml-2 text-fin-gold/80">
                  {expense.budget_group?.name} {expense.category ? `→ ${expense.category.name}` : ''}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-fin-red">- R$ {expense.amount.toFixed(2)}</span>
                <button onClick={() => handleDelete(expense.id)} className="text-fin-red/50 hover:text-fin-red transition-colors text-xl">&times;</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// --- Card de Meta Destaque ---
function GoalsCard({ goals }) {
  const featuredGoal = goals.length > 0 ? goals[0] : null;
  if (!featuredGoal) return <div className="bg-fin-card/50 p-6 rounded-2xl border border-white/5 text-gray-400">Sem metas ativas.</div>;

  const { name, current_amount, target_amount } = featuredGoal;
  const progress = target_amount > 0 ? (current_amount / target_amount) * 100 : 0;

  return (
    <div className="bg-gradient-to-br from-fin-card to-fin-dark p-6 rounded-2xl shadow-xl border border-fin-gold/20 h-full relative overflow-hidden">
      {/* Efeito de brilho no fundo */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-fin-gold/10 rounded-full blur-3xl"></div>
      
      <h2 className="text-xl font-bold mb-6 text-fin-highlight flex items-center gap-2">
        🎯 Foco Principal
      </h2>
      <div>
        <div className="flex justify-between items-baseline mb-2">
          <span className="font-semibold text-2xl text-white">{name}</span>
          <span className="text-lg font-bold text-fin-highlight">{progress.toFixed(0)}%</span>
        </div>
        <div className="w-full bg-fin-dark rounded-full h-4 mb-4 p-0.5 border border-white/10">
          <div className="bg-gradient-to-r from-fin-gold to-fin-highlight h-full rounded-full shadow-[0_0_10px_rgba(242,171,109,0.5)]" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-300">
          <span>Atual: <strong className="text-white">R$ {current_amount.toLocaleString('pt-BR')}</strong></span>
          <span>Alvo: <strong className="text-white">R$ {target_amount.toLocaleString('pt-BR')}</strong></span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [expenses, setExpenses] = useState([]);
  const [goals, setGoals] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [balance, setBalance] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      try {
        const [expenseRes, incomeRes, goalsRes] = await Promise.all([
          axios.get(`${API_URL}/expenses/?year=${year}&month=${month}`),
          axios.get(`${API_URL}/income/?year=${year}&month=${month}`),
          axios.get(`${API_URL}/goals/`)
        ]);
        setExpenses(expenseRes.data);
        setGoals(goalsRes.data);
        const tInc = incomeRes.data.reduce((acc, i) => acc + i.amount, 0);
        const tExp = expenseRes.data.reduce((acc, e) => acc + e.amount, 0);
        setTotalIncome(tInc);
        setTotalExpenses(tExp);
        setBalance(tInc - tExp);
      } catch (error) { console.error("Erro:", error); }
    };
    fetchData();
  }, [currentDate, lastUpdate]);

  return (
    <div>
      <MonthSelector currentDate={currentDate} onDateChange={setCurrentDate} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <SummaryCard title="Entradas" amount={totalIncome} type="income" />
        <SummaryCard title="Saídas" amount={totalExpenses} type="expense" />
        <SummaryCard title="Balanço" amount={balance} type="balance" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ExpenseList expenses={expenses} onExpenseDeleted={() => setLastUpdate(new Date())} />
        </div>
        <div className="lg:col-span-1">
          <GoalsCard goals={goals} />
        </div>
      </div>
    </div>
  );
}