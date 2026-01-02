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
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
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
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="bg-fin-dark/90 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full max-w-lg border border-fin-gold/30 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-fin-gold">Gerenciar Meta</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl md:text-3xl">&times;</button>
        </div>
        <form onSubmit={handleEditSubmit} className="space-y-4">
          <h3 className="text-base md:text-lg font-semibold text-white border-b border-white/20 pb-2">Editar Detalhes</h3>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome da Meta" className="w-full p-3 md:p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white text-sm md:text-base"/>
          <input type="number" value={targetAmount} onChange={e => setTargetAmount(e.target.value)} placeholder="Valor Estimado" className="w-full p-3 md:p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white text-sm md:text-base"/>
          <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} className="w-full p-3 md:p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white text-sm md:text-base"/>
          <input type="text" value={notes} onChange={e => setNotes(e.target.value)} placeholder="Observações" className="w-full p-3 md:p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white text-sm md:text-base"/>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-all text-sm md:text-base">Salvar Alterações</button>
        </form>
        <hr className="my-6 border-white/20" />
        <form className="space-y-4" onSubmit={(e) => handleAdjustmentSubmit(e, 'deposit')}>
          <h3 className="text-base md:text-lg font-semibold text-white border-b border-white/20 pb-2">Ajuste Manual</h3>
          <input type="number" value={adjustmentAmount} onChange={e => setAdjustmentAmount(e.target.value)} placeholder="Valor do Ajuste" className="w-full p-3 md:p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white text-sm md:text-base"/>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl transition-all text-sm md:text-base">Depositar</button>
            {/* 👇 BOTÃO CORRIGIDO: removido 'hover:bg-red-700' e adicionado 'active:bg-red-800' 👇 */}
            <button 
              type="button" 
              onClick={(e) => handleAdjustmentSubmit(e, 'withdraw')} 
              className="w-full bg-fin-red active:bg-red-800 text-white font-bold py-3 px-4 rounded-xl transition-all text-sm md:text-base"
            >
              Retirar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

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
    <div className="mb-8">
      {!isExpanded ? (
        <button 
          onClick={() => setIsExpanded(true)}
          className="w-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 border border-white/10 p-4 rounded-2xl flex items-center justify-center gap-2 text-white/80 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10"
        >
          <span className="bg-blue-500 rounded-full p-1 group-hover:rotate-90 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="font-medium">Nova Meta</span>
        </button>
      ) : (
        <div className="bg-gray-800/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl animate-fade-in-down">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Planejar Nova Conquista
            </h2>
            <button onClick={() => setIsExpanded(false)} className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-xs text-gray-400 ml-1">Nome da Meta</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex: Viagem para Europa" className="w-full p-4 bg-black/20 rounded-xl border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-600 transition-all outline-none" autoFocus />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-400 ml-1">Valor do Objetivo (R$)</label>
                <input type="number" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} placeholder="0,00" className="w-full p-4 bg-black/20 rounded-xl border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-600 transition-all outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-400 ml-1">Já tenho guardado (R$)</label>
                <input type="number" value={currentAmount} onChange={(e) => setCurrentAmount(e.target.value)} placeholder="0,00 (Opcional)" className="w-full p-4 bg-black/20 rounded-xl border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-600 transition-all outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-400 ml-1">Data Alvo</label>
                <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="w-full p-4 bg-black/20 rounded-xl border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white transition-all outline-none" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-gray-400 ml-1">Notas</label>
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Detalhes adicionais..." rows="2" className="w-full p-4 bg-black/20 rounded-xl border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-600 transition-all outline-none resize-none" />
            </div>
            <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 transform hover:-translate-y-0.5 transition-all duration-200">
              🚀 Criar Meta
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

// --- Componente: Card de Meta (Redesign Premium) ---
function GoalCard({ goal, onEditClick, onDeleteClick }) {
  const remainingAmount = Math.max(0, goal.target_amount - goal.current_amount);
  const progressRaw = goal.target_amount > 0 ? (goal.current_amount / goal.target_amount) * 100 : 0;
  const percentage = Math.round(Number(progressRaw)); // Garante que é número
  
  const formatDate = (dateString) => {
    if (!dateString) return "Sem data";
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
  };
  
  // Cores dinâmicas baseadas no progresso
  const getProgressColor = (p) => {
    if (p >= 100) return 'from-green-400 to-emerald-600';
    if (p >= 75) return 'from-blue-400 to-indigo-600';
    if (p >= 50) return 'from-purple-400 to-violet-600';
    if (p >= 25) return 'from-yellow-400 to-orange-600';
    return 'from-red-400 to-rose-600';
  };

  const progressGradient = getProgressColor(percentage);

  return (
    <div className="group relative bg-gray-800/30 backdrop-blur-md rounded-3xl border border-white/5 p-6 hover:bg-gray-800/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden">
      {/* Glow Effect no Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors truncate pr-2" title={goal.name}>
              {goal.name}
            </h3>
            <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {formatDate(goal.deadline)}
            </div>
          </div>
          <div className="flex gap-1">
            <button onClick={onEditClick} className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
              <EditIcon />
            </button>
            <button onClick={onDeleteClick} className="p-2 hover:bg-red-500/20 rounded-lg text-gray-400 hover:text-red-400 transition-colors">
              <DeleteIcon />
            </button>
          </div>
        </div>

        {/* Progress Circle & Text */}
        <div className="flex items-end justify-between mb-2">
           <span className="text-3xl font-bold text-white tracking-tight">
             {percentage}<span className="text-lg text-gray-400 ml-0.5">%</span>
           </span>
           <span className="text-xs text-gray-400 font-medium mb-1.5">
             Meta: {formatCurrency(goal.target_amount)}
           </span>
        </div>

        {/* Barra de Progresso */}
        <div className="h-3 w-full bg-black/40 rounded-full overflow-hidden p-0.5 mb-4 shadow-inner">
          <div 
            className={`h-full rounded-full bg-gradient-to-r ${progressGradient} shadow-[0_0_12px_rgba(255,255,255,0.3)] transition-all duration-1000 ease-out`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          ></div>
        </div>

        {/* Detalhes Financeiros */}
        <div className="bg-black/20 rounded-xl p-3 flex justify-between items-center border border-white/5">
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Guardado</p>
            <p className="text-sm font-semibold text-white">{formatCurrency(goal.current_amount)}</p>
          </div>
          <div className="h-6 w-px bg-white/10"></div>
          <div className="text-right">
             <p className="text-[10px] text-gray-400 uppercase tracking-wider">Falta</p>
             <p className="text-sm font-semibold text-blue-300">{formatCurrency(remainingAmount)}</p>
          </div>
        </div>

        {/* Aporte Mensal Sugerido */}
        {goal.monthly_contribution > 0 && remainingAmount > 0 && (
          <div className="mt-3 text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-300">
               <span>📅 Guarde <b>{formatCurrency(goal.monthly_contribution)}</b> / mês</span>
            </span>
          </div>
        )}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
    </AuthGuard>
  );
}