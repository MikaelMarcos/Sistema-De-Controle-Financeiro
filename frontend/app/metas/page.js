'use client';

import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Listbox, Transition } from '@headlessui/react';
import AuthGuard from '@/components/AuthGuard'; // Importa o Guardião

// --- Ícones ---
const SelectorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" /></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-800"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>;
const EditIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>;
const DeleteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>;

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const formatCurrency = (value) => {
  if (value === null || value === undefined) value = 0;
  const numValue = Number(value); // Garante que é número
  return numValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

// --- Função de Cor Gradual ---
const getDynamicColor = (percentage) => {
  const p = Math.max(0, Math.min(100, percentage));
  const hue = (p * 1.2).toFixed(0);
  return `hsl(${hue}, 90%, 55%)`;
};

// --- Componente: Seletor (usado no Modal) ---
function CustomSelect({ label, value, onChange, options, placeholder, required = false, textClass = "text-white" }) {
  const selectedOption = options.find(option => option.id === value) || null;
  return (
    <div>
      {label && <label className="block text-sm font-medium text-white/80 mb-2">{label} {required && '*'}</label>}
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <div className="relative">
            <Listbox.Button className={`relative w-full p-4 pr-10 text-left bg-fin-dark/60 rounded-xl border-2 transition-all text-white ${textClass} ${open ? 'border-fin-gold' : 'border-white/10'}`}>
              <span className="block truncate">{selectedOption ? selectedOption.name : <span className="text-white/40">{placeholder}</span>}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"><SelectorIcon /></span>
            </Listbox.Button>
            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-fin-gold/50" style={{ backgroundColor: '#A7C7E7' }}>
                {options.map((option) => (
                  <Listbox.Option key={option.id} className={({ active }) => `relative cursor-pointer select-none py-2 pl-10 pr-4 ${ active ? 'bg-blue-200 text-blue-900' : 'text-gray-800' }`} value={option.id}>
                    {({ selected }) => (<><span className={`block truncate ${selected ? 'font-bold' : 'font-normal'}`}>{option.name}</span>{selected ? (<span className="absolute inset-y-0 left-0 flex items-center pl-3"><CheckIcon /></span>) : null}</>)}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
}

// --- Componente: Modal de Edição (Responsivo e com Botão Corrigido) ---
// --- Componente: Modal de Edição (Responsivo e com Botão Corrigido) ---
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
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-fin-dark/95 p-6 rounded-3xl shadow-2xl w-full max-w-lg border border-fin-gold/20 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-fin-gold flex items-center gap-2">
             <span>✏️</span> Gerenciar Meta
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl md:text-3xl transition-colors">&times;</button>
        </div>
        <form onSubmit={handleEditSubmit} className="space-y-4">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-white/10 pb-2 mb-4">Editar Detalhes</h3>
          
          <div>
             <label className="text-xs text-gray-400 ml-1 mb-1 block">Nome</label>
             <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome da Meta" className="w-full p-3 bg-fin-dark/50 rounded-xl border border-white/10 focus:border-fin-gold focus:ring-1 focus:ring-fin-gold/50 text-white transition-all outline-none"/>
          </div>
          <div>
             <label className="text-xs text-gray-400 ml-1 mb-1 block">Valor Alvo</label>
             <input type="number" value={targetAmount} onChange={e => setTargetAmount(e.target.value)} placeholder="Valor Estimado" className="w-full p-3 bg-fin-dark/50 rounded-xl border border-white/10 focus:border-fin-gold focus:ring-1 focus:ring-fin-gold/50 text-white transition-all outline-none"/>
          </div>
          <div>
             <label className="text-xs text-gray-400 ml-1 mb-1 block">Data Limite</label>
             <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} className="w-full p-3 bg-fin-dark/50 rounded-xl border border-white/10 focus:border-fin-gold focus:ring-1 focus:ring-fin-gold/50 text-white transition-all outline-none [color-scheme:dark]"/>
          </div>
          <div>
             <label className="text-xs text-gray-400 ml-1 mb-1 block">Anotações</label>
             <input type="text" value={notes} onChange={e => setNotes(e.target.value)} placeholder="Observações" className="w-full p-3 bg-fin-dark/50 rounded-xl border border-white/10 focus:border-fin-gold focus:ring-1 focus:ring-fin-gold/50 text-white transition-all outline-none"/>
          </div>
          
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-blue-900/20">Salvar Alterações</button>
        </form>
        
        <div className="my-8 border-t border-white/10"></div>
        
        <form className="space-y-4" onSubmit={(e) => handleAdjustmentSubmit(e, 'deposit')}>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-white/10 pb-2 mb-4">Ajuste Manual de Saldo</h3>
          <div>
            <label className="text-xs text-gray-400 ml-1 mb-1 block">Valor do Ajuste</label>
            <input type="number" value={adjustmentAmount} onChange={e => setAdjustmentAmount(e.target.value)} placeholder="0.00" className="w-full p-4 bg-fin-dark/50 rounded-xl border border-white/10 focus:border-fin-gold focus:ring-1 focus:ring-fin-gold/50 text-white font-bold text-lg text-center transition-all outline-none"/>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-green-900/20 flex items-center justify-center gap-2">
              <span>➕</span> Depositar
            </button>
            <button 
              type="button" 
              onClick={(e) => handleAdjustmentSubmit(e, 'withdraw')} 
              className="w-full bg-fin-red hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-red-900/20 flex items-center justify-center gap-2"
            >
              <span>➖</span> Retirar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// --- Componente: Formulário de Criação (Redesign Premium) ---
// --- Componente: Formulário de Criação (Redesign Premium) ---
function GoalCreateForm({ onGoalAdded }) {
  const [name, setName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [currentAmount, setCurrentAmount] = useState('');
  const [deadline, setDeadline] = useState('');
  const [notes, setNotes] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !targetAmount) return alert("Preencha Nome e Valor Estimado.");
    const newGoal = { name, target_amount: parseFloat(targetAmount), current_amount: parseFloat(currentAmount) || 0.0, deadline: deadline ? new Date(deadline).toISOString() : null, notes };
    axios.post(`${API_URL}/goals/`, newGoal)
      .then(response => {
        onGoalAdded(response.data);
        setName(''); setTargetAmount(''); setCurrentAmount(''); setDeadline(''); setNotes('');
        setIsExpanded(false);
      })
      .catch(error => console.error("Erro:", error));
  };

  return (
    <div className="mb-8 animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
      {!isExpanded ? (
        <button 
          onClick={() => setIsExpanded(true)}
          className="w-full glass p-6 rounded-2xl flex items-center justify-center gap-3 text-white transition-all duration-300 group hover:border-fin-gold/30 hover:shadow-lg hover:shadow-fin-gold/10"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fin-gold to-orange-500 flex items-center justify-center text-fin-dark shadow-md group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-bold text-lg tracking-wide">Criar Nova Meta</span>
        </button>
      ) : (
        <div className="glass p-6 md:p-8 rounded-3xl animate-fade-in-down">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fin-gold to-orange-500 flex items-center justify-center text-fin-dark text-xl shadow-lg">
                <span>🚀</span>
              </div>
              <h2 className="text-xl font-bold text-white">Nova Conquista</h2>
            </div>
            <button onClick={() => setIsExpanded(false)} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Nome da Meta</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex: Viagem para Europa" className="w-full p-4 bg-fin-dark/50 border border-white/10 rounded-xl focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/50 text-white placeholder-gray-500 transition-all outline-none" autoFocus />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Valor do Objetivo (R$)</label>
                <input type="number" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} placeholder="0,00" className="w-full p-4 bg-fin-dark/50 border border-white/10 rounded-xl focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/50 text-white placeholder-gray-500 transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Já tenho guardado (R$)</label>
                <input type="number" value={currentAmount} onChange={(e) => setCurrentAmount(e.target.value)} placeholder="0,00 (Opcional)" className="w-full p-4 bg-fin-dark/50 border border-white/10 rounded-xl focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/50 text-white placeholder-gray-500 transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Data Alvo</label>
                <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="w-full p-4 bg-fin-dark/50 border border-white/10 rounded-xl focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/50 text-white transition-all outline-none [color-scheme:dark]" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Notas</label>
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Detalhes adicionais..." rows="2" className="w-full p-4 bg-fin-dark/50 border border-white/10 rounded-xl focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/50 text-white placeholder-gray-500 transition-all outline-none resize-none" />
            </div>
            
            <button type="submit" className="w-full py-4 bg-gradient-to-r from-fin-gold to-orange-600 hover:from-fin-gold/80 hover:to-orange-500 text-fin-dark font-bold rounded-xl shadow-lg shadow-orange-900/20 transform hover:-translate-y-0.5 transition-all duration-200">
              Criar Meta
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

// --- Componente: Card de Meta (Redesign Premium) ---
// --- Componente: Card de Meta (Redesign Premium) ---
function GoalCard({ goal, onEditClick, onDeleteClick }) {
  const remainingAmount = Math.max(0, goal.target_amount - goal.current_amount);
  const progressRaw = goal.target_amount > 0 ? (goal.current_amount / goal.target_amount) * 100 : 0;
  const percentage = Math.round(Number(progressRaw)); 
  
  const formatDate = (dateString) => {
    if (!dateString) return "Sem data";
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };
  
  // Cores dinâmicas baseadas no progresso
  const getProgressColor = (p) => {
    if (p >= 100) return 'from-emerald-400 to-emerald-600';
    if (p >= 75) return 'from-blue-400 to-indigo-600';
    if (p >= 50) return 'from-fin-gold to-orange-500';
    if (p >= 25) return 'from-orange-400 to-red-500';
    return 'from-fin-red to-red-700';
  };

  const progressGradient = getProgressColor(percentage);

  return (
    <div className="group relative glass p-6 transition-all duration-300 hover:border-fin-gold/30 hover:shadow-2xl hover:shadow-fin-gold/5 flex flex-col h-full">
      {/* Glow Effect no Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-fin-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-fin-gold transition-colors truncate pr-2 line-clamp-1" title={goal.name}>
                {goal.name}
              </h3>
              <div className="text-xs text-gray-400 mt-1 flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-full w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                {formatDate(goal.deadline)}
              </div>
            </div>
            
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={onEditClick} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors" title="Editar">
                <EditIcon />
              </button>
              <button onClick={onDeleteClick} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors" title="Excluir">
                <DeleteIcon />
              </button>
            </div>
          </div>

          {/* Progress Circle & Text */}
          <div className="flex items-end justify-between mb-2">
             <span className="text-3xl font-bold text-white tracking-tight flex items-baseline">
               {percentage}<span className="text-sm text-gray-500 ml-0.5 font-normal">%</span>
             </span>
             <span className="text-xs text-gray-400 font-medium mb-1.5 bg-fin-dark/40 px-2 py-1 rounded-lg border border-white/5">
               Meta: <span className="text-white">{formatCurrency(goal.target_amount)}</span>
             </span>
          </div>

          {/* Barra de Progresso */}
          <div className="h-2.5 w-full bg-fin-dark/60 rounded-full overflow-hidden mb-6 shadow-inner border border-white/5">
            <div 
              className={`h-full rounded-full bg-gradient-to-r ${progressGradient} shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all duration-1000 ease-out`}
              style={{ width: `${Math.min(percentage, 100)}%` }}
            ></div>
          </div>
        </div>

        <div>
          {/* Detalhes Financeiros */}
          <div className="bg-fin-dark/40 rounded-xl p-4 flex justify-between items-center border border-white/5 mb-3">
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-0.5">Guardado</p>
              <p className="text-sm font-bold text-green-400">{formatCurrency(goal.current_amount)}</p>
            </div>
            <div className="h-8 w-px bg-white/5"></div>
            <div className="text-right">
               <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-0.5">Falta</p>
               <p className="text-sm font-bold text-gray-300">{formatCurrency(remainingAmount)}</p>
            </div>
          </div>

          {/* Aporte Mensal Sugerido */}
          {goal.monthly_contribution > 0 && remainingAmount > 0 && (
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/5 border border-blue-500/10 text-[11px] text-blue-300 w-full justify-center">
                 <span>📅 Guarde <b>{formatCurrency(goal.monthly_contribution)}</b> por mês</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Componente Principal da Página ---
export default function MetasPage() {
  const [goals, setGoals] = useState([]);
  const [editingGoal, setEditingGoal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGoals = () => {
    setIsLoading(true);
    axios.get(`${API_URL}/goals/`)
      .then(response => setGoals(response.data))
      .catch(error => console.error("Erro ao buscar metas:", error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => { fetchGoals(); }, []);

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
    fetchGoals(); // Recarrega para garantir que o aporte mensal seja recalculado
  };

  const totalAccumulated = goals.reduce((sum, goal) => sum + Number(goal.current_amount || 0), 0);

  return (
    <AuthGuard>
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {editingGoal && (
          <EditGoalModal
            goal={editingGoal}
            onClose={() => setEditingGoal(null)}
            onGoalUpdated={handleGoalUpdated}
          />
        )}
        <GoalCreateForm onGoalAdded={handleGoalAdded} />
        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-white">Minhas Metas</h2>
        {isLoading ? (
          <div className="text-center text-white/60 py-8 md:py-12">Carregando metas...</div>
        ) : goals.length === 0 ? (
          <div className="text-center bg-fin-dark/50 p-8 md:p-12 rounded-2xl text-white/60">
            <div className="text-4xl md:text-5xl mb-4">🧭</div>
            Nenhuma meta criada ainda. Comece a planejar seu futuro!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
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

        {/* Card de Total Acumulado (Compacto e no Rodapé) */}
        {goals.length > 0 && (
          <div className="bg-gradient-to-r from-emerald-600/10 to-teal-600/10 border border-emerald-500/10 p-4 rounded-2xl flex items-center justify-between backdrop-blur-sm shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-sm font-bold text-white">Patrimônio em Metas</h2>
              </div>
            </div>
            <div className="text-lg font-bold text-emerald-300 tracking-tight">
              {formatCurrency(totalAccumulated)}
            </div>
          </div>
        )}
      </div>
    </AuthGuard>
  );
}