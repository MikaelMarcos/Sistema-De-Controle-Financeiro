'use client'; 
import AuthGuard from '@/components/AuthGuard'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const API_URL = 'http://localhost:8000';
const formatCurrency = (v) => (v ?? 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

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
    <div className="flex justify-between items-center mb-8 p-4 bg-gradient-to-r from-fin-dark/80 to-fin-card/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl">
      <button 
        onClick={handlePreviousMonth} 
        className="p-3 text-fin-gold hover:bg-fin-gold/10 rounded-xl transition-all duration-300 hover:scale-105 border border-fin-gold/20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white tracking-wide">
          {formattedDate}
        </h2>
        <p className="text-xs text-gray-400 mt-1">Controle Financeiro Mensal</p>
      </div>
      
      <button 
        onClick={handleNextMonth} 
        className="p-3 text-fin-gold hover:bg-fin-gold/10 rounded-xl transition-all duration-300 hover:scale-105 border border-fin-gold/20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}

// --- Card de Resumo ---
function SummaryCard({ title, amount, type }) {
  const formattedAmount = formatCurrency(amount);
  
  const getCardStyles = () => {
    const baseStyles = "p-6 rounded-2xl shadow-lg backdrop-blur-sm border transition-all duration-300 border-opacity-20 ";
    switch(type) {
      case 'income': return baseStyles + "bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-500";
      case 'expense': return baseStyles + "bg-gradient-to-br from-red-500/10 to-pink-600/10 border-red-500";
      case 'balance': return amount >= 0 ? baseStyles + "bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border-blue-500" : baseStyles + "bg-gradient-to-br from-red-500/10 to-orange-600/10 border-red-500";
      case 'credit': return baseStyles + "bg-gradient-to-br from-purple-500/10 to-indigo-600/10 border-purple-500";
      default: return baseStyles + "bg-fin-card/80 border-white";
    }
  };
  const getTextColor = () => {
    switch(type) {
      case 'income': return "text-green-400";
      case 'expense': return "text-red-400";
      case 'balance': return amount >= 0 ? "text-cyan-400" : "text-orange-400";
      case 'credit': return "text-purple-400";
      default: return "text-white";
    }
  };
  const getIcon = () => {
    switch(type) {
      case 'income': return "💰";
      case 'expense': return "💸";
      case 'balance': return amount >= 0 ? "📈" : "📉";
      case 'credit': return "💳";
      default: return "📊";
    }
  };

  return (
    <div className={getCardStyles()}>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">{title}</h2>
        <span className="text-lg">{getIcon()}</span>
      </div>
      <p className={`text-2xl font-bold ${getTextColor()}`}>{formattedAmount}</p>
      {type === 'balance' && (<div className={`mt-2 text-xs font-medium ${amount >= 0 ? 'text-cyan-400' : 'text-orange-400'}`}>{amount >= 0 ? 'Positivo' : 'Negativo'}</div>)}
    </div>
  );
}

// --- Lista de Despesas ---
function ExpenseList({ expenses, onExpenseDeleted }) {
  const handleDelete = (id) => { 
    if (confirm("Tem certeza que deseja excluir esta despesa?")) {
      axios.delete(`${API_URL}/expenses/${id}`).then(() => onExpenseDeleted()); 
    }
  };
  const formatDate = (d) => new Date(d).toLocaleDateString('pt-BR', { timeZone: 'UTC' });

  return (
    <div className="bg-gradient-to-br from-fin-card/60 to-fin-dark/60 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Últimas Movimentações <span className="text-xs bg-fin-terra/20 text-fin-terra px-2 py-1 rounded-full ml-2">Caixa</span></h2>
        <div className="text-xs text-gray-400 bg-black/30 px-3 py-1 rounded-full">{expenses.length} {expenses.length === 1 ? 'item' : 'itens'}</div>
      </div>
      {expenses.length === 0 ? (
        <div className="text-center py-8"><div className="text-4xl mb-2">📝</div><p className="text-gray-400 font-light">Nenhuma despesa em caixa neste mês.</p></div>
      ) : (
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {expenses.map(expense => (
            <div key={expense.id} className="flex justify-between items-center bg-black/20 p-4 rounded-xl border border-white/5">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-fin-gold/20 rounded-lg flex items-center justify-center"><span className="text-fin-gold">💸</span></div>
                <div>
                  <span className="text-xs text-gray-400">{formatDate(expense.date)}</span>
                  <span className="font-medium text-white block">{expense.description}</span>
                  <span className="text-sm text-fin-gold/80 flex items-center gap-1"><span className="w-1 h-1 bg-fin-gold rounded-full"></span>{expense.budget_group?.name || 'Sem categoria'}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-red-400 text-lg">- {formatCurrency(expense.amount)}</span>
                <button onClick={() => handleDelete(expense.id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// --- Card de Meta ---
function DashboardGoals({ goals }) {
  const completedGoals = goals.filter(goal => (goal.current_amount / goal.target_amount) * 100 >= 100);
  const activeGoals = goals.filter(goal => (goal.current_amount / goal.target_amount) * 100 < 100).slice(0, 3);

  if (goals.length === 0) {
    return (
      <div className="bg-gradient-to-br from-fin-card/60 to-fin-dark/60 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm h-full flex flex-col items-center justify-center text-center">
        <div className="text-4xl mb-3">🎯</div>
        <h3 className="text-lg font-semibold text-white mb-2">Sem metas ativas</h3>
        <p className="text-gray-400 text-sm">Crie sua primeira meta</p>
        <a href="/metas" className="inline-block mt-4 bg-gradient-to-r from-fin-highlight to-fin-gold text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg">Criar Meta</a>
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
      <div className="bg-gradient-to-br from-fin-dark/70 to-fin-card/50 p-5 rounded-2xl border border-white/10 hover:border-fin-gold/30 transition-all duration-300 group cursor-pointer">
        <div className="flex justify-between items-start mb-3"><h3 className="font-bold text-lg text-white truncate flex-1 pr-2">{goal.name}</h3><span className={`text-xl font-bold ${textColor} whitespace-nowrap`}>{percentage}%</span></div>
        <div className="w-full bg-black/40 backdrop-blur-sm rounded-full h-2.5 p-0.5 border border-white/10 mb-3 shadow-inner relative overflow-hidden"><div className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${progressColor} relative overflow-hidden`} style={{ width: `${Math.min(percentage, 100)}%` }}><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse-slow"></div></div></div>
        <div className="flex justify-between items-center text-xs"><span className="text-gray-400">{isCompleted ? '🎉 Concluído!' : 'Em andamento'}</span><span className="text-fin-gold font-medium">{formatCurrency(goal.current_amount)} / {formatCurrency(goal.target_amount)}</span></div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-fin-card/60 to-fin-dark/60 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm h-full">
      <div className="flex justify-between items-center mb-6"><h2 className="text-xl font-bold text-white flex items-center gap-2"><span className="bg-gradient-to-r from-fin-gold to-fin-highlight bg-clip-text text-transparent">Progresso das Metas</span></h2><div className="text-xs text-gray-400 bg-black/30 px-3 py-1 rounded-full border border-white/10">{completedGoals.length}/{goals.length} concluídas</div></div>
      <div className="space-y-3 mb-6"><h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Metas Ativas ({activeGoals.length})</h3>{activeGoals.map(goal => (<DashboardGoalCard key={goal.id} goal={goal} />))}</div>
      {completedGoals.length > 0 && (
        <div className="space-y-3"><h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Concluídas ({completedGoals.length})</h3>{completedGoals.slice(0, 2).map(goal => (<div key={goal.id} className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-4 rounded-xl border border-green-500/20"><div className="flex justify-between items-center"><span className="font-medium text-white text-sm">{goal.name}</span><span className="text-green-400 font-bold">🎉 100%</span></div><div className="text-xs text-gray-400 mt-1">Valor alcançado: {formatCurrency(goal.target_amount)}</div></div>))}</div>
      )}
      <a href="/metas" className="block w-full mt-4 text-center bg-fin-dark/50 hover:bg-fin-dark/70 text-fin-gold font-medium py-2 px-4 rounded-lg border border-fin-gold/20 transition-all duration-300 hover:border-fin-gold/40">Ver Todas as Metas →</a>
    </div>
  );
}

// --- Gráfico de Pizza ---
function ExpensePieChart({ expenses }) {
  const categorySpending = expenses.reduce((acc, expense) => {
    const categoryName = expense.category?.name || 'Sem Categoria';
    acc[categoryName] = (acc[categoryName] || 0) + expense.amount;
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
  const borderColors = ['#024059'];
  const hoverColors = soberColors.map(color => color);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: soberColors.slice(0, labels.length),
        borderColor: borderColors,
        borderWidth: 2,
        hoverBackgroundColor: hoverColors.slice(0, labels.length),
        hoverBorderColor: '#FFFFFF',
        hoverBorderWidth: 3,
        spacing: 0, 
        hoverOffset: 15,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: 15 },
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#E2E8F0',
          font: { size: 11, weight: '500', family: "'Inter', sans-serif" },
          boxWidth: 14, boxHeight: 14, padding: 12,
          usePointStyle: true, pointStyle: 'circle',
        },
        onHover: function(event) { event.native.target.style.cursor = 'pointer'; },
        onLeave: function(event) { event.native.target.style.cursor = 'default'; },
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        titleColor: '#F1F5F9', bodyColor: '#CBD5E1',
        titleFont: { size: 12, weight: '600' },
        bodyFont: { size: 11, weight: '500' },
        borderColor: '#334155', borderWidth: 1, cornerRadius: 8, padding: 12,
        displayColors: true, usePointStyle: true, boxPadding: 4,
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.parsed;
            const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
            return `${label}: ${formatCurrency(value)} (${percentage}%)`;
          },
          title: function (context) { return context[0].label; }
        },
      },
    },
    interaction: { intersect: false, mode: 'index' },
    animation: { animateScale: true, animateRotate: true, duration: 800, easing: 'easeOutCubic' },
    elements: { arc: { borderJoinStyle: 'bevel' } }
  };

  const topCategory = Object.entries(categorySpending).reduce((max, [cat, amount]) =>
    amount > max.amount ? { category: cat, amount } : max,
    { category: '', amount: 0 }
  );

  if (expenses.length === 0) {
    return (
      <div className="bg-gradient-to-br from-fin-card/60 to-fin-dark/60 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm h-full flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📊</div>
          <h2 className="text-xl font-bold text-white mb-2">Gastos por Categoria</h2>
          <p className="text-gray-400 text-lg">Sem gastos para exibir</p>
          <p className="text-sm text-gray-500 mt-1">Registre despesas para ver a distribuição</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-fin-card/60 to-fin-dark/60 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-3">
          <span className="bg-gradient-to-r from-fin-gold to-fin-highlight p-2 rounded-xl">📊</span>
          Distribuição de Gastos
        </h2>
        <div className="text-xs text-gray-400 bg-black/30 px-3 py-2 rounded-full border border-white/10">
          {labels.length} {labels.length === 1 ? 'categoria' : 'categorias'}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div className="lg:col-span-2 relative" style={{ height: '300px' }}>
          <Pie data={chartData} options={chartOptions} />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{formatCurrency(total)}</div>
              <div className="text-xs text-gray-400 font-medium">Total Gasto</div>
              <div className="text-xs text-fin-gold mt-1">{labels.length} categorias</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-gradient-to-br from-fin-dark/80 to-fin-card/60 p-4 rounded-xl border border-white/10">
            <h3 className="text-sm font-semibold text-gray-300 mb-3">📈 Maior Gasto</h3>
            <div className="text-lg font-bold text-white truncate" title={topCategory.category}>{topCategory.category}</div>
            <div className="text-fin-gold font-semibold text-sm">{formatCurrency(topCategory.amount)}</div>
            <div className="text-xs text-gray-400 mt-1">{total > 0 ? ((topCategory.amount / total) * 100).toFixed(1) : 0}% do total</div>
          </div>
          <div className="bg-gradient-to-br from-fin-dark/80 to-fin-card/60 p-4 rounded-xl border border-white/10">
            <h3 className="text-sm font-semibold text-gray-300 mb-3">📋 Resumo</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-400">Total:</span><span className="text-white font-medium">{formatCurrency(total)}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Categorias:</span><span className="text-fin-gold font-medium">{labels.length}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Transações:</span><span className="text-white font-medium">{expenses.length}</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden mt-6">
        <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
          {labels.map((label, index) => (
            <div key={label} className="flex items-center gap-2 text-xs">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: soberColors[index] }}></div>
              <span className="text-gray-300 truncate" title={label}>{label}</span>
              <span className="text-fin-gold font-medium ml-auto">{total > 0 ? ((categorySpending[label] / total) * 100).toFixed(0) : 0}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Componente Principal (CORRIGIDO) ---
export default function Home() {
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
  // const [isClient, setIsClient] = useState(false); // Não é mais necessário

useEffect(() => {
    // 👇 ADICIONE ESTAS LINHAS DE COMENTÁRIO 👇
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentDate(new Date());
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLastUpdate(new Date());
  }, []); // O array vazio está correto

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

        const cashOnlyExpenses = allExpensesData.filter(exp => !exp.credit_card_id && exp.paid);
        const creditOnlyExpenses = allExpensesData.filter(exp => exp.credit_card_id && !exp.paid);
        const receivedIncomes = allIncomes.filter(inc => inc.received);

        setAllExpenses(allExpensesData);
        setCashExpenses(cashOnlyExpenses);
        setGoals(goalsRes.data);

        const totalInc = receivedIncomes.reduce((acc, i) => acc + i.amount, 0);
        const totalCashExp = cashOnlyExpenses.reduce((acc, e) => acc + e.amount, 0);
        const totalCreditExp = creditOnlyExpenses.reduce((acc, e) => acc + e.amount, 0);
        
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
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <MonthSelector currentDate={currentDate} onDateChange={setCurrentDate} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <SummaryCard title="Receita (Caixa)" amount={totalIncome} type="income" />
          <SummaryCard title="Despesas (Caixa)" amount={totalCashExpenses} type="expense" />
          <SummaryCard title="Balanço de Caixa" amount={balance} type="balance" />
          <SummaryCard title="Faturas Abertas" amount={totalCreditExpenses} type="credit" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ExpenseList 
              expenses={cashExpenses} 
              onExpenseDeleted={() => setLastUpdate(new Date())} 
            />
            {/* O gráfico agora recebe TODAS as despesas (incluindo cartão) */}
            <ExpensePieChart expenses={allExpenses} />
          </div>
          <div className="lg:col-span-1">
            <DashboardGoals goals={goals} />
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
  );
}