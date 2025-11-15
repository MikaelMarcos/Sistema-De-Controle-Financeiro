'use client';

import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Listbox, Transition } from '@headlessui/react';

// --- Ícones Premium ---
const SelectorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" /></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>;
const EditIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>;
const DeleteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>;

const API_URL = 'https://api-financeiro-vbsl.onrender.com';

const formatCurrency = (value) => {
  if (value === null || value === undefined) value = 0;
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

// --- Sistema de Cores Aprimorado para Barras de Progresso ---
const getProgressColor = (percentage) => {
  const p = Math.max(0, Math.min(100, percentage));
  
  if (p < 10) {
    return 'from-red-800 to-red-600';
  } else if (p < 20) {
    return 'from-red-600 to-orange-700';
  } else if (p < 30) {
    return 'from-orange-700 to-orange-500';
  } else if (p < 40) {
    return 'from-orange-500 to-amber-500';
  } else if (p < 50) {
    return 'from-amber-500 to-yellow-500';
  } else if (p < 60) {
    return 'from-yellow-500 to-yellow-400';
  } else if (p < 70) {
    return 'from-yellow-400 to-lime-400';
  } else if (p < 80) {
    return 'from-lime-400 to-green-500';
  } else if (p < 90) {
    return 'from-green-500 to-emerald-500';
  } else if (p < 100) {
    return 'from-emerald-500 to-emerald-400';
  } else {
    return 'from-green-400 to-emerald-300';
  }
};

const getTextColor = (percentage) => {
  const p = Math.max(0, Math.min(100, percentage));
  
  if (p < 30) return 'text-red-400';
  if (p < 50) return 'text-orange-400';
  if (p < 70) return 'text-yellow-400';
  if (p < 90) return 'text-lime-400';
  return 'text-emerald-400';
};

const getStatusText = (percentage) => {
  const p = Math.max(0, Math.min(100, percentage));
  
  if (p < 10) return 'Iniciando';
  if (p < 25) return 'Começando';
  if (p < 40) return 'Em andamento';
  if (p < 60) return 'Na metade';
  if (p < 75) return 'Bom progresso';
  if (p < 90) return 'Quase lá';
  if (p < 100) return 'Finalizando';
  return 'Concluído!';
};

// --- Componente: Card de Meta Premium CORRIGIDO ---
function GoalCard({ goal, onEditClick, onDeleteClick }) {
  const remainingAmount = goal.target_amount - goal.current_amount;
  const progressPercentage = goal.target_amount > 0 ? (goal.current_amount / goal.target_amount) * 100 : 0;
  const formatDate = (dateString) => dateString ? new Date(dateString).toLocaleDateString('pt-BR', { timeZone: 'UTC' }) : "Sem prazo";
  
  const percentage = Math.round(progressPercentage);
  const progressColor = getProgressColor(percentage);
  const textColor = getTextColor(percentage);
  const statusText = getStatusText(percentage);
  const isCompleted = percentage >= 100;

  return (
    <div className="bg-gradient-to-br from-fin-dark/70 to-fin-card/50 p-6 rounded-3xl shadow-xl border border-white/10 hover:border-fin-gold/30 transition-all duration-500 group hover:shadow-2xl relative overflow-hidden">
      {/* Efeito de brilho no hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-fin-gold/5 to-fin-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Cabeçalho - Layout Corrigido */}
      <div className="flex justify-between items-start mb-4 relative">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-2xl leading-tight text-white truncate pr-4">
            {goal.name}
          </h3>
          
          {/* Badge de Status - AGORA DEBAIXO DO NOME */}
          <div className={`mt-2 inline-flex text-xs font-bold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm ${
            isCompleted 
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
              : 'bg-fin-dark/80 text-gray-300 border border-white/10'
          }`}>
            {isCompleted ? '🎉 Concluído!' : statusText}
          </div>
        </div>
        
        {/* Porcentagem - AGORA SEM CONFLITO */}
        <div className="flex flex-col items-end gap-2">
          <span className={`text-2xl font-bold ${textColor} whitespace-nowrap`}>
            {percentage}%
          </span>
          
          {/* Botões de Ação - AGORA MAIS ORGANIZADOS */}
          <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button 
              onClick={onEditClick} 
              className="p-2 bg-fin-dark/80 backdrop-blur-sm rounded-lg hover:bg-fin-gold/20 text-blue-400 hover:text-blue-300 transition-all duration-300 shadow-lg"
              title="Editar Meta"
            >
              <EditIcon />
            </button>
            <button 
              onClick={onDeleteClick} 
              className="p-2 bg-fin-dark/80 backdrop-blur-sm rounded-lg hover:bg-red-500/20 text-fin-red hover:text-red-400 transition-all duration-300 shadow-lg"
              title="Deletar Meta"
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
      
      {/* Barra de Progresso Aprimorada */}
      <div className="w-full bg-black/40 backdrop-blur-sm rounded-full h-4 p-0.5 border border-white/10 mb-6 shadow-inner relative overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out shadow-lg bg-gradient-to-r ${progressColor} relative overflow-hidden`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse-slow"></div>
        </div>
        
        {/* Marcadores de progresso */}
        <div className="absolute inset-0 flex justify-between items-center px-1 pointer-events-none">
          {[0, 25, 50, 75, 100].map((mark) => (
            <div key={mark} className="w-1 h-1 bg-white/20 rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Informações da Meta */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between items-center py-2 border-b border-white/5">
          <span className="text-gray-400">Guardado:</span>
          <span className="font-bold text-white text-lg">{formatCurrency(goal.current_amount)}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-white/5">
          <span className="text-gray-400">Objetivo:</span>
          <span className="font-bold text-white text-lg">{formatCurrency(goal.target_amount)}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-white/5">
          <span className="text-gray-400">Faltam:</span>
          <span className="font-bold text-fin-terra text-lg">{formatCurrency(Math.max(remainingAmount, 0))}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-400">Prazo:</span>
          <span className="font-medium text-white">{formatDate(goal.deadline)}</span>
        </div>

        {/* Aporte Mensal */}
        {goal.monthly_contribution > 0 && (
          <div className="pt-4 mt-4 border-t border-white/10">
            <div className="bg-gradient-to-r from-fin-dark/80 to-fin-card/60 p-4 rounded-xl border backdrop-blur-sm border-white/10">
              <div className="flex justify-between items-center">
                <span className="font-medium text-base text-gray-300">
                  💰 Guarde por mês:
                </span>
                <span className="font-bold text-xl text-fin-gold">
                  {formatCurrency(goal.monthly_contribution)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// --- Os outros componentes (Modal, Form, etc.) permanecem os mesmos ---
// [Manter os componentes EditGoalModal, GoalCreateForm, CustomSelect exatamente como estavam]

// --- Componente: Modal de Edição Premium ---
function EditGoalModal({ goal, onClose, onGoalUpdated }) {
  const [name, setName] = useState(goal.name);
  const [targetAmount, setTargetAmount] = useState(goal.target_amount);
  const [deadline, setDeadline] = useState(goal.deadline ? goal.deadline.split('T')[0] : '');
  const [notes, setNotes] = useState(goal.notes || '');
  const [adjustmentAmount, setAdjustmentAmount] = useState('');

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedGoalData = { name, target_amount: parseFloat(targetAmount), deadline: deadline ? new Date(deadline).toISOString() : null, notes };
    axios.put(`${API_URL}/goals/${goal.id}`, updatedGoalData)
      .then(response => { onGoalUpdated(response.data); onClose(); })
      .catch(error => console.error("Erro:", error));
  };

  const handleAdjustmentSubmit = (e, type) => {
    e.preventDefault();
    const amount = parseFloat(adjustmentAmount);
    if (!amount || amount <= 0) return alert("Insira um valor positivo.");
    axios.post(`${API_URL}/goals/${goal.id}/${type}`, { amount })
      .then(response => { onGoalUpdated(response.data); setAdjustmentAmount(''); })
      .catch(error => alert(`Erro: ${error.response?.data?.detail || 'Operação falhou'}`));
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="bg-gradient-to-br from-fin-dark to-fin-card/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-lg border border-fin-gold/20 relative overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fin-gold to-fin-highlight"></div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-fin-gold to-fin-highlight bg-clip-text text-transparent">Gerenciar Meta</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl transition-all duration-300 hover:scale-110">&times;</button>
        </div>
        
        <form onSubmit={handleEditSubmit} className="space-y-4">
          <h3 className="text-lg font-semibold text-white border-b border-white/20 pb-2">Editar Detalhes</h3>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome da Meta" className="w-full p-4 bg-fin-dark/40 backdrop-blur-sm rounded-xl border-2 border-white/10 focus:border-fin-gold text-white transition-all duration-300"/>
          <input type="number" value={targetAmount} onChange={e => setTargetAmount(e.target.value)} placeholder="Valor Estimado" className="w-full p-4 bg-fin-dark/40 backdrop-blur-sm rounded-xl border-2 border-white/10 focus:border-fin-gold text-white transition-all duration-300"/>
          <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} className="w-full p-4 bg-fin-dark/40 backdrop-blur-sm rounded-xl border-2 border-white/10 focus:border-fin-gold text-white transition-all duration-300"/>
          <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Observações" rows="3" className="w-full p-4 bg-fin-dark/40 backdrop-blur-sm rounded-xl border-2 border-white/10 focus:border-fin-gold text-white transition-all duration-300 resize-none"/>
          <button type="submit" className="w-full bg-gradient-to-r from-fin-highlight to-fin-gold hover:from-fin-gold hover:to-fin-highlight text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Salvar Alterações</button>
        </form>
        
        <hr className="my-6 border-white/20" />
        
        <form className="space-y-4" onSubmit={(e) => handleAdjustmentSubmit(e, 'deposit')}>
          <h3 className="text-lg font-semibold text-white border-b border-white/20 pb-2">Ajuste Manual</h3>
          <input type="number" value={adjustmentAmount} onChange={e => setAdjustmentAmount(e.target.value)} placeholder="Valor do Ajuste" className="w-full p-4 bg-fin-dark/40 backdrop-blur-sm rounded-xl border-2 border-white/10 focus:border-fin-gold text-white transition-all duration-300"/>
          <div className="flex space-x-4">
            <button type="submit" className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Depositar</button>
            <button type="button" onClick={(e) => handleAdjustmentSubmit(e, 'withdraw')} className="flex-1 bg-gradient-to-r from-fin-red to-red-600 hover:from-red-700 hover:to-fin-red text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Retirar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// --- Componente: Formulário de Criação Premium ---
function GoalCreateForm({ onGoalAdded }) {
  const [name, setName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [currentAmount, setCurrentAmount] = useState('');
  const [deadline, setDeadline] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !targetAmount) return alert("Preencha Nome e Valor Estimado.");
    const newGoal = { name, target_amount: parseFloat(targetAmount), current_amount: parseFloat(currentAmount) || 0.0, deadline: deadline ? new Date(deadline).toISOString() : null, notes };
    axios.post(`${API_URL}/goals/`, newGoal)
      .then(response => {
        onGoalAdded(response.data);
        setName(''); setTargetAmount(''); setCurrentAmount(''); setDeadline(''); setNotes('');
      })
      .catch(error => console.error("Erro ao criar meta:", error));
  };

  return (
    <div className="bg-gradient-to-br from-fin-card/80 to-fin-dark/90 p-8 rounded-3xl shadow-2xl mb-8 border border-fin-gold/20 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fin-gold to-fin-highlight"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-fin-gold/10 rounded-full blur-3xl"></div>
      
      <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
        <span className="bg-gradient-to-r from-fin-gold to-fin-highlight p-2 rounded-xl">🎯</span>
        Nova Meta Financeira
      </h2>
      <p className="text-gray-400 mb-6">Planeje seu futuro com metas claras e alcançáveis</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome da Meta (ex: Casamento)" className="w-full p-4 bg-fin-dark/40 backdrop-blur-sm rounded-xl border-2 border-white/10 focus:border-fin-gold text-white transition-all duration-300"/>
          <input type="number" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} placeholder="Valor Estimado (ex: 20000)" className="w-full p-4 bg-fin-dark/40 backdrop-blur-sm rounded-xl border-2 border-white/10 focus:border-fin-gold text-white transition-all duration-300"/>
          <input type="number" value={currentAmount} onChange={(e) => setCurrentAmount(e.target.value)} placeholder="Valor Inicial (opcional)" className="w-full p-4 bg-fin-dark/40 backdrop-blur-sm rounded-xl border-2 border-white/10 focus:border-fin-gold text-white transition-all duration-300"/>
          <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="w-full p-4 bg-fin-dark/40 backdrop-blur-sm rounded-xl border-2 border-white/10 focus:border-fin-gold text-white transition-all duration-300" title="Prazo final"/>
        </div>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Observações (opcional)" rows="2" className="w-full p-4 bg-fin-dark/40 backdrop-blur-sm rounded-xl border-2 border-white/10 focus:border-fin-gold text-white transition-all duration-300 resize-none"/>
        <button type="submit" className="w-full bg-gradient-to-r from-fin-highlight to-fin-gold hover:from-fin-gold hover:to-fin-highlight text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group">
          <span className="flex items-center justify-center gap-2">
            Criar Meta
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </span>
        </button>
      </form>
    </div>
  );
}

// --- Componente Principal da Página ---
export default function MetasPage() {
  const [goals, setGoals] = useState([]);
  const [editingGoal, setEditingGoal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fetchGoals = () => {
    setIsLoading(true);
    axios.get(`${API_URL}/goals/`)
      .then(response => setGoals(response.data))
      .catch(error => console.error("Erro ao buscar metas:", error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => { 
    if (isClient) {
      fetchGoals(); 
    }
  }, [isClient]);

  const handleGoalAdded = (newGoal) => {
    setGoals(prevGoals => [newGoal, ...prevGoals]);
  };

  const handleGoalDeleted = (deletedGoalId) => {
    if (confirm(`Tem certeza que deseja deletar esta meta?`)) {
      axios.delete(`${API_URL}/goals/${deletedGoalId}`)
        .then(() => setGoals(prevGoals => prevGoals.filter(goal => goal.id !== deletedGoalId)))
        .catch(error => console.error("Erro ao deletar meta:", error));
    }
  };

  const handleGoalUpdated = (updatedGoal) => {
    setGoals(prevGoals => prevGoals.map(goal => goal.id === updatedGoal.id ? updatedGoal : goal));
    fetchGoals();
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-fin-dark via-fin-card to-fin-dark py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-fin-card/80 to-fin-dark/90 p-8 rounded-3xl shadow-2xl mb-8 border border-fin-gold/20 animate-pulse">
            <div className="h-8 bg-gray-700 rounded mb-2 w-1/3"></div>
            <div className="h-4 bg-gray-700 rounded mb-6 w-2/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-12 bg-gray-700 rounded-xl"></div>
              ))}
            </div>
            <div className="h-12 bg-gray-700 rounded-xl"></div>
          </div>
          
          <div className="flex justify-between items-center mb-8">
            <div>
              <div className="h-10 bg-gray-700 rounded w-48 mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-64"></div>
            </div>
            <div className="h-8 bg-gray-700 rounded-full w-20"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-fin-dark/50 p-6 rounded-3xl border border-white/10 animate-pulse">
                <div className="h-6 bg-gray-700 rounded mb-4"></div>
                <div className="h-4 bg-gray-700 rounded mb-6"></div>
                <div className="space-y-3">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="h-4 bg-gray-700 rounded"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-fin-dark via-fin-card to-fin-dark py-8">
      <div className="max-w-7xl mx-auto px-4">
        {editingGoal && (
          <EditGoalModal
            goal={editingGoal}
            onClose={() => setEditingGoal(null)}
            onGoalUpdated={handleGoalUpdated}
          />
        )}
        
        <GoalCreateForm onGoalAdded={handleGoalAdded} />
        
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold text-white">
              Minhas Metas
            </h2>
            <p className="text-gray-400 mt-2">Acompanhe seu progresso financeiro</p>
          </div>
          <div className="text-sm text-gray-400 bg-fin-dark/50 px-4 py-2 rounded-full border border-white/10">
            {goals.length} {goals.length === 1 ? 'meta' : 'metas'}
          </div>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-fin-dark/50 p-6 rounded-3xl border border-white/10 animate-pulse">
                <div className="h-6 bg-gray-700 rounded mb-4"></div>
                <div className="h-4 bg-gray-700 rounded mb-6"></div>
                <div className="space-y-3">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="h-4 bg-gray-700 rounded"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : goals.length === 0 ? (
          <div className="text-center bg-fin-dark/50 p-16 rounded-3xl border border-white/10 backdrop-blur-sm">
            <div className="text-6xl mb-6">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4">Nenhuma meta criada</h3>
            <p className="text-gray-400 text-lg max-w-md mx-auto">
              Comece a planejar seu futuro criando sua primeira meta financeira!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map(goal => (
              <GoalCard 
                key={goal.id} 
                goal={goal} 
                onEditClick={() => setEditingGoal(goal)}
                onDeleteClick={() => handleGoalDeleted(goal.id)}
              />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}