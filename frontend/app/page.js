'use client'; 

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Importa os componentes de autenticação
import AuthGuard from '@/components/AuthGuard';

import { useAuth } from '@/context/AuthContext';
import { usePrivacy } from '@/context/PrivacyContext';

Chart.register(ArcElement, Tooltip, Legend);

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const formatCurrency = (v) => Number(v ?? 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// --- Sistema de Cores para Progresso ---
const getProgressColor = (percentage) => {
  const p = Math.max(0, Math.min(100, percentage));
  if (p < 10) return 'from-red-800 to-red-600';
  else if (p < 20) return 'from-red-600 to-orange-700';
  else if (p < 30) return 'from-orange-700 to-orange-500';
  else if (p < 40) return 'from-orange-500 to-amber-500';
  else if (p < 50) return 'from-amber-500 to-yellow-500';
  else if (p < 60) return 'from-yellow-500 to-yellow-400';
  else if (p < 70) return 'from-yellow-400 to-lime-400';
  else if (p < 80) return 'from-lime-400 to-green-500';
  else if (p < 90) return 'from-green-500 to-emerald-500';
  else if (p < 100) return 'from-emerald-500 to-emerald-400';
  else return 'from-green-400 to-emerald-300';
};

const getTextColor = (percentage) => {
  const p = Math.max(0, Math.min(100, percentage));
  if (p < 30) return 'text-red-400';
  if (p < 50) return 'text-orange-400';
  if (p < 70) return 'text-yellow-400';
  if (p < 90) return 'text-lime-400';
  return 'text-emerald-400';
};

// --- Seletor de Mês ---
// --- Seletor de Mês (Estilo Pill) ---
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
  
  const formattedDate = `${currentDate.toLocaleString('pt-BR', { month: 'long' })} ${currentDate.getFullYear()}`.replace(/^\w/, (c) => c.toUpperCase());

  return (
    <div className="flex justify-center mb-8">
      <div className="glass p-1.5 rounded-full inline-flex items-center gap-4 shadow-glass">
        <button 
          onClick={handlePreviousMonth} 
          className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        <div className="text-center px-4 w-48">
          <h2 className="text-lg font-bold text-white tracking-wide capitalize">
            {formattedDate}
          </h2>
        </div>
        
        <button 
          onClick={handleNextMonth} 
          className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// --- Card de Resumo ---
function SummaryCard({ title, amount, type, privacy }) {
  const formattedAmount = formatCurrency(amount);
  
  const getCardStyles = () => {
    const baseStyles = "relative overflow-hidden p-6 rounded-3xl backdrop-blur-md border transition-all duration-500 group hover:-translate-y-1 hover:shadow-2xl ";
    switch(type) {
      case 'income': return baseStyles + "bg-gradient-to-br from-green-900/40 to-emerald-900/20 border-green-500/30 shadow-[0_8px_30px_rgba(16,185,129,0.15)]";
      case 'expense': return baseStyles + "bg-gradient-to-br from-red-900/40 to-rose-900/20 border-red-500/30 shadow-[0_8px_30px_rgba(239,68,68,0.15)]";
      case 'balance': return amount >= 0 ? baseStyles + "bg-gradient-to-br from-blue-900/40 to-cyan-900/20 border-blue-500/30 shadow-[0_8px_30px_rgba(59,130,246,0.15)]" : baseStyles + "bg-gradient-to-br from-orange-900/40 to-red-900/20 border-orange-500/30";
      case 'credit': return baseStyles + "bg-gradient-to-br from-purple-900/40 to-indigo-900/20 border-purple-500/30 shadow-[0_8px_30px_rgba(139,92,246,0.15)]";
      default: return baseStyles + "bg-fin-card/80 border-white";
    }
  };
  const getTextColor = () => {
    switch(type) {
      case 'income': return "text-green-400 group-hover:text-green-300";
      case 'expense': return "text-red-400 group-hover:text-red-300";
      case 'balance': return amount >= 0 ? "text-cyan-400 group-hover:text-cyan-300" : "text-orange-400";
      case 'credit': return "text-purple-400 group-hover:text-purple-300";
      default: return "text-white";
    }
  };
  const getIcon = () => {
    switch(type) {
      case 'income': return "💰";
      case 'expense': return "💸";
      case 'balance': return amount >= 0 ? "⚖️" : "📉";
      case 'credit': return "💳";
      default: return "📊";
    }
  };

  return (
    <div className={getCardStyles()}>
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500 text-6xl pointer-events-none">
        {getIcon()}
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">{title}</h2>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-lg">{getIcon()}</div>
        </div>

        <p className={`text-3xl font-bold tracking-tight transition-colors duration-300 ${getTextColor()} ${privacy ? 'blur-md select-none' : ''}`}>{formattedAmount}</p>
        
        {type === 'balance' && (
          <div className={`mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${amount >= 0 ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${amount >= 0 ? 'bg-cyan-400 animate-pulse' : 'bg-orange-400'}`}></span>
            {amount >= 0 ? 'Positivo' : 'Negativo'}
          </div>
        )}
      </div>
    </div>
  );
}

// --- Lista de Despesas ---
// --- Lista de Despesas (Design Glass) ---
function ExpenseList({ expenses, onExpenseDeleted, privacy }) {
  const handleDelete = (id) => { 
    if (confirm("Tem certeza que deseja excluir esta despesa?")) {
      axios.delete(`${API_URL}/expenses/${id}`).then(() => onExpenseDeleted()); 
    }
  };
  const formatDate = (d) => new Date(d).toLocaleDateString('pt-BR', { timeZone: 'UTC', day: '2-digit', month: '2-digit' });

  return (
    <div className="glass rounded-3xl p-6 md:p-8 animate-fade-in-down">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold text-white">Últimas do Caixa</h2>
          <p className="text-xs text-gray-400 mt-1">Transações recentes em dinheiro</p>
        </div>
        <div className="bg-fin-card/50 border border-white/5 rounded-full px-3 py-1">
          <span className="text-xs font-medium text-fin-gray-300">{expenses.length} registros</span>
        </div>
      </div>
      
      {expenses.length === 0 ? (
        <div className="text-center py-12 bg-white/5 rounded-2xl border border-white/5 border-dashed">
          <div className="text-5xl mb-3 opacity-50">📝</div>
          <p className="text-gray-400 font-light">Nenhuma despesa em caixa.</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          {expenses.map(expense => (
            <div key={expense.id} className="group flex justify-between items-center bg-fin-dark/40 hover:bg-fin-card/60 p-4 rounded-2xl border border-white/5 hover:border-fin-highlight/20 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fin-card to-fin-dark border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <span className="text-xl">💸</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-gray-400 bg-white/5 px-2 py-0.5 rounded-full">{formatDate(expense.date)}</span>
                    <span className="text-[10px] font-bold text-fin-highlight/80 bg-fin-highlight/10 px-2 py-0.5 rounded-full">{expense.budget_group?.name || 'Geral'}</span>
                  </div>
                  <span className="font-semibold text-white block group-hover:text-fin-highlight transition-colors">{expense.description}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`font-bold text-fin-red/90 text-lg group-hover:text-fin-red transition-colors ${privacy ? 'blur-sm select-none' : ''}`}>- {formatCurrency(expense.amount)}</span>
                <button 
                  onClick={() => handleDelete(expense.id)} 
                  className="w-8 h-8 flex items-center justify-center rounded-xl text-gray-500 hover:text-fin-red hover:bg-fin-red/10 transition-all opacity-0 group-hover:opacity-100"
                  title="Excluir"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// --- Card de Meta (Design Premium) ---
function DashboardGoals({ goals, privacy }) {
  const completedGoals = goals.filter(goal => (goal.current_amount / goal.target_amount) * 100 >= 100);
  const activeGoals = goals.filter(goal => (goal.current_amount / goal.target_amount) * 100 < 100).slice(0, 3);

  if (goals.length === 0) {
    return (
      <div className="glass rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center animate-fade-in-down">
        <div className="text-5xl mb-4 opacity-80">🎯</div>
        <h3 className="text-lg font-bold text-white mb-2">Comece a Planejar</h3>
        <p className="text-gray-400 text-sm mb-6">Defina metas para conquistar seus sonhos.</p>
        <a href="/metas" className="bg-fin-highlight hover:bg-sky-300 text-fin-dark font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-sky-500/20 transform hover:-translate-y-1">Criar Primeira Meta</a>
      </div>
    );
  }
  
  const DashboardGoalCard = ({ goal }) => {
    const progressPercentage = goal.target_amount > 0 ? (goal.current_amount / goal.target_amount) * 100 : 0;
    const percentage = Math.round(progressPercentage);
    const progressColor = getProgressColor(percentage);
    const textColor = getTextColor(percentage);
    const isCompleted = percentage >= 100;

    return (
      <div className="relative bg-fin-dark/40 p-5 rounded-2xl border border-white/5 hover:border-fin-highlight/30 transition-all duration-300 group cursor-pointer overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute inset-0 bg-gradient-to-r from-fin-highlight/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-sm md:text-base text-gray-200 group-hover:text-white truncate flex-1 pr-2">{goal.name}</h3>
            <span className={`text-lg font-bold ${textColor} whitespace-nowrap`}>{percentage}%</span>
          </div>
          
          <div className="w-full bg-black/50 backdrop-blur-sm rounded-full h-2 p-0.5 border border-white/5 mb-3 shadow-inner relative overflow-hidden">
            <div className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${progressColor} relative`} style={{ width: `${Math.min(percentage, 100)}%` }}>
               <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-wider">
             <span className="text-gray-500 group-hover:text-gray-400 transition-colors">{isCompleted ? '🎉 Concluído!' : 'Em progresso'}</span>
             <span className={`text-fin-highlight ${privacy ? 'blur-sm select-none' : ''}`}>{formatCurrency(goal.current_amount)}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="glass rounded-3xl p-6 md:p-8 h-full animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          🎯 Metas Ativas
        </h2>
        <a href="/metas" className="text-xs font-bold text-fin-highlight hover:text-white transition-colors uppercase tracking-wider">Ver todas →</a>
      </div>
      
      <div className="space-y-4 mb-6">
        {activeGoals.map(goal => (<DashboardGoalCard key={goal.id} goal={goal} />))}
      </div>
      
      {completedGoals.length > 0 && (
        <div className="mt-4 pt-4 border-t border-white/10">
           <div className="flex items-center gap-2 text-sm text-green-400 font-bold bg-green-400/10 p-3 rounded-xl border border-green-400/20">
             <span>🏆</span>
             <span>{completedGoals.length} {completedGoals.length === 1 ? 'meta concluída' : 'metas concluídas'}!</span>
           </div>
        </div>
      )}
    </div>
  );
}

// --- Gráfico de Pizza (Design Glass) ---
function ExpensePieChart({ expenses, privacy }) {
  const categorySpending = expenses.reduce((acc, expense) => {
    const categoryName = expense.category?.name || 'Sem Categoria';
    acc[categoryName] = (acc[categoryName] || 0) + Number(expense.amount);
    return acc;
  }, {});

  const labels = Object.keys(categorySpending);
  const dataValues = Object.values(categorySpending);
  const total = dataValues.reduce((sum, val) => sum + val, 0);
  
  const soberColors = [
    '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
    '#06B6D4', '#84CC16', '#F97316', '#6366F1', '#EC4899',
    '#14B8A6', '#F43F5E', '#0EA5E9', '#22C55E', '#EAB308'
  ];
  const borderColors = ['rgba(30, 41, 59, 0.8)'];

  const chartData = {
    labels: labels,
    datasets: [{
        data: dataValues,
        backgroundColor: soberColors.slice(0, labels.length),
        borderColor: borderColors,
        borderWidth: 2,
        hoverOffset: 20,
        borderRadius: 4
    }],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: 20 },
    plugins: {
      legend: {
        position: 'right',
        labels: { color: '#94A3B8', font: { size: 10, weight: '600', family: "'Inter', sans-serif" }, usePointStyle: true, boxWidth: 8, padding: 15 },
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        titleColor: '#F8FAFC', bodyColor: '#E2E8F0', borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, padding: 12, cornerRadius: 12,
        callbacks: {
          label: function (context) {
            if (privacy) return ' ••••';
            const value = context.parsed;
            const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
            return ` ${formatCurrency(value)} (${percentage}%)`;
          }
        }
      },
    },
    elements: { arc: { borderJoinStyle: 'round' } }
  };

  if (expenses.length === 0) {
    return (
      <div className="glass rounded-3xl p-8 flex flex-col items-center justify-center h-full text-center">
        <div className="text-5xl mb-4 opacity-50">📊</div>
        <h2 className="text-lg font-bold text-white mb-2">Sem dados de gastos</h2>
        <p className="text-gray-400 text-sm">Registre suas despesas para ver a distribuição.</p>
      </div>
    );
  }

  return (
    <div className="glass rounded-3xl p-6 md:p-8 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">Gastos por Categoria</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div className="lg:col-span-2 relative h-[300px]">
          <Pie data={chartData} options={chartOptions} />
          {/* Centro do Gráfico */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="text-center bg-fin-dark/80 backdrop-blur-md p-4 rounded-full border border-white/5 shadow-2xl">
               <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Total</div>
               <div className={`text-lg font-bold text-white ${privacy ? 'blur-sm select-none' : ''}`}>{formatCurrency(total)}</div>
             </div>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-3 max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
           {labels.map((label, index) => (
             <div key={label} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 rounded-full shadow-[0_0_8px_currentColor]" style={{ color: soberColors[index], backgroundColor: soberColors[index] }}></div>
                   <span className="text-sm font-medium text-gray-300 truncate max-w-[100px]" title={label}>{label}</span>
                 </div>
                 <div className="text-right">
                    <div className={`text-sm font-bold text-white ${privacy ? 'blur-sm select-none' : ''}`}>{formatCurrency(categorySpending[label])}</div>
                    <div className="text-[10px] text-gray-400 font-bold">{((categorySpending[label] / total) * 100).toFixed(0)}%</div>
                 </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

// --- Componente Principal (CORRIGIDO PARA O BUG DE HIDRATAÇÃO) ---
export default function Home() {
  const { isPrivacyEnabled } = usePrivacy();
  const [allExpenses, setAllExpenses] = useState([]);
  const [cashExpenses, setCashExpenses] = useState([]);
  const [goals, setGoals] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalCashExpenses, setTotalCashExpenses] = useState(0);
  const [totalCreditExpenses, setTotalCreditExpenses] = useState(0);
  const [balance, setBalance] = useState(0);
  
  // 👇 CORREÇÃO: Inicializa o estado como 'null'
  const [currentDate, setCurrentDate] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  
  // 👇 CORREÇÃO: Define a data inicial apenas no cliente
  useEffect(() => {
    setCurrentDate(new Date());
    setLastUpdate(new Date());
  }, []);

  useEffect(() => {
    // 👇 CORREÇÃO: Espera 'currentDate' ser definido
    if (!currentDate) return;

    const fetchData = async () => {
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      try {
        const [expenseRes, incomeRes, goalsRes] = await Promise.all([
          axios.get(`${API_URL}/expenses/?year=${year}&month=${month}`),
          axios.get(`${API_URL}/income/?year=${year}&month=${month}`),
          axios.get(`${API_URL}/goals/`)
        ]);

        const allExpensesData = expenseRes.data;
        const allIncomes = incomeRes.data;

        const cashOnlyExpenses = allExpensesData.filter(exp => exp.paid);
        const creditOnlyExpenses = allExpensesData.filter(exp => exp.credit_card_id && !exp.paid);
        const receivedIncomes = allIncomes.filter(inc => inc.received);

        setAllExpenses(allExpensesData);
        setCashExpenses(cashOnlyExpenses);
        setGoals(goalsRes.data);

        const totalInc = receivedIncomes.reduce((acc, i) => acc + Number(i.amount), 0);
        const totalCashExp = cashOnlyExpenses.reduce((acc, e) => acc + Number(e.amount), 0);
        const totalCreditExp = creditOnlyExpenses.reduce((acc, e) => acc + Number(e.amount), 0);
        
        setTotalIncome(totalInc);
        setTotalCashExpenses(totalCashExp);
        setTotalCreditExpenses(totalCreditExp);
        setBalance(totalInc - totalCashExp);

      } catch (error) { 
        console.error("Erro ao carregar dados:", error); 
      }
    };
    fetchData();
  }, [currentDate, lastUpdate]); // 'isClient' removido das dependências

  // 👇 CORREÇÃO: Mostra o skeleton se 'currentDate' for 'null'
  if (!currentDate) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-fin-dark via-fin-card to-fin-dark">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-20 bg-fin-card/50 rounded-2xl mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-32 bg-fin-card/50 rounded-2xl"></div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 h-96 bg-fin-card/50 rounded-2xl"></div>
              <div className="lg:col-span-1 h-96 bg-fin-card/50 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AuthGuard>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <MonthSelector currentDate={currentDate} onDateChange={setCurrentDate} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <SummaryCard title="Receita (Caixa)" amount={totalIncome} type="income" privacy={isPrivacyEnabled} />
            <SummaryCard title="Despesas (Caixa)" amount={totalCashExpenses} type="expense" privacy={isPrivacyEnabled} />
            <SummaryCard title="Balanço de Caixa" amount={balance} type="balance" privacy={isPrivacyEnabled} />
            <SummaryCard title="Faturas Abertas" amount={totalCreditExpenses} type="credit" privacy={isPrivacyEnabled} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <ExpenseList 
                expenses={cashExpenses} 
                onExpenseDeleted={() => setLastUpdate(new Date())} 
                privacy={isPrivacyEnabled}
              />
              {/* O gráfico agora recebe TODAS as despesas (incluindo cartão) */}
              <ExpensePieChart expenses={allExpenses} privacy={isPrivacyEnabled} />
            </div>
            <div className="lg:col-span-1">
              <DashboardGoals goals={goals} privacy={isPrivacyEnabled} />
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes pulse-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    </AuthGuard>
  );
}