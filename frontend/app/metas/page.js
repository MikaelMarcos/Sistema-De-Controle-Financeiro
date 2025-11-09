'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

// --- Componente: Formulário de Criação de Meta (O mesmo da última vez) ---
function GoalCreateForm({ onGoalAdded }) {
  const [name, setName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [currentAmount, setCurrentAmount] = useState('');
  const [deadline, setDeadline] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !targetAmount) {
      alert("Preencha pelo menos o Nome e o Valor Estimado.");
      return;
    }
    const newGoal = {
      name: name,
      target_amount: parseFloat(targetAmount),
      current_amount: parseFloat(currentAmount) || 0.0,
      deadline: deadline ? new Date(deadline).toISOString() : null,
      notes: notes
    };
    axios.post(`${API_URL}/goals/`, newGoal)
      .then(response => {
        onGoalAdded(response.data);
        setName('');
        setTargetAmount('');
        setCurrentAmount('');
        setDeadline('');
        setNotes('');
      })
      .catch(error => console.error("Erro ao criar meta:", error));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-4 text-yellow-400">Criar Nova Meta</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome da Meta (ex: Casamento)" className="p-3 bg-gray-700 rounded border border-gray-600 md:col-span-3"/>
        <input type="number" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} placeholder="Valor Estimado (ex: 20000)" className="p-3 bg-gray-700 rounded border border-gray-600"/>
        <input type="number" value={currentAmount} onChange={(e) => setCurrentAmount(e.target.value)} placeholder="Valor Inicial (opcional)" className="p-3 bg-gray-700 rounded border border-gray-600"/>
        <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="p-3 bg-gray-700 rounded border border-gray-600" title="Período para cumprir"/>
        <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Observações (opcional)" className="p-3 bg-gray-700 rounded border border-gray-600 md:col-span-3"/>
      </div>
      <button type="submit" className="mt-4 w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-4 rounded transition duration-300">
        Salvar Meta
      </button>
    </form>
  );
}

// --- NOVO Componente: Modal de Edição ---
function EditGoalModal({ goal, onClose, onGoalUpdated }) {
  // Estado para os campos de edição
  const [name, setName] = useState(goal.name);
  const [targetAmount, setTargetAmount] = useState(goal.target_amount);
  const [deadline, setDeadline] = useState(
    goal.deadline ? goal.deadline.split('T')[0] : ''
  );
  const [notes, setNotes] = useState(goal.notes || '');

  // Estado para os campos de ajuste
  const [adjustmentAmount, setAdjustmentAmount] = useState('');

  // 1. Função para EDITAR os detalhes da meta
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedGoalData = {
      name,
      target_amount: parseFloat(targetAmount),
      deadline: deadline ? new Date(deadline).toISOString() : null,
      notes,
      // Importante: Não enviamos o current_amount, pois ele é gerenciado
      // por depósitos/retiradas, não por edição manual.
    };

    axios.put(`${API_URL}/goals/${goal.id}`, updatedGoalData)
      .then(response => {
        onGoalUpdated(response.data); // Atualiza a lista no componente pai
        onClose(); // Fecha o modal
      })
      .catch(error => console.error("Erro ao atualizar meta:", error));
  };

  // 2. Função para AJUSTAR o valor (Depositar ou Retirar)
  const handleAdjustmentSubmit = (e, type) => {
    e.preventDefault();
    const amount = parseFloat(adjustmentAmount);
    if (!amount || amount <= 0) {
      alert("Por favor, insira um valor positivo.");
      return;
    }

    const adjustmentData = { amount };
    const url = `${API_URL}/goals/${goal.id}/${type}`; // type é 'deposit' ou 'withdraw'

    axios.post(url, adjustmentData)
      .then(response => {
        onGoalUpdated(response.data); // Atualiza a lista no componente pai
        setAdjustmentAmount(''); // Limpa o campo
      })
      .catch(error => {
        console.error(`Erro ao fazer ${type}:`, error);
        alert(`Erro: ${error.response?.data?.detail || 'Operação falhou'}`);
      });
  };

  return (
    // Overlay (fundo escuro)
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose} // Fecha ao clicar fora
    >
      {/* Conteúdo do Modal */}
      <div 
        className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-lg"
        onClick={e => e.stopPropagation()} // Impede de fechar ao clicar dentro
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-yellow-400">Gerenciar Meta</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>

        {/* --- Formulário 1: Editar Detalhes --- */}
        <form onSubmit={handleEditSubmit} className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-200 border-b border-gray-700 pb-2">Editar Detalhes</h3>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome da Meta" className="w-full p-3 bg-gray-700 rounded border border-gray-600"/>
          <input type="number" value={targetAmount} onChange={e => setTargetAmount(e.target.value)} placeholder="Valor Estimado" className="w-full p-3 bg-gray-700 rounded border border-gray-600"/>
          <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} className="w-full p-3 bg-gray-700 rounded border border-gray-600"/>
          <input type="text" value={notes} onChange={e => setNotes(e.target.value)} placeholder="Observações" className="w-full p-3 bg-gray-700 rounded border border-gray-600"/>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Salvar Alterações</button>
        </form>

        <hr className="my-6 border-gray-700" />

        {/* --- Formulário 2: Fazer Ajuste Manual --- */}
        <form className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-200 border-b border-gray-700 pb-2">Ajuste Manual</h3>
          <input type="number" value={adjustmentAmount} onChange={e => setAdjustmentAmount(e.target.value)} placeholder="Valor do Ajuste" className="w-full p-3 bg-gray-700 rounded border border-gray-600"/>
          <div className="flex space-x-4">
            <button 
              type="submit" 
              onClick={(e) => handleAdjustmentSubmit(e, 'deposit')} 
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Depositar
            </button>
            <button 
              type="submit" 
              onClick={(e) => handleAdjustmentSubmit(e, 'withdraw')} 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Retirar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


// --- Componente: Card de Meta (Exibe uma meta) ---
function GoalCard({ goal, onEditClick, onDeleteClick }) {
  // Cálculos
  const remainingAmount = goal.target_amount - goal.current_amount;
  const progressPercentage = goal.target_amount > 0 
    ? (goal.current_amount / goal.target_amount) * 100 
    : 100;

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
  };
  
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg relative">
      {/* Botões de Ação */}
      <div className="absolute top-3 right-3 flex space-x-2">
        <button 
          onClick={onEditClick}
          className="text-gray-400 hover:text-blue-500 transition-colors"
          title="Editar/Gerenciar Meta"
        >
          {/* Ícone simples de "lápis" (pode ser substituído por um SVG) */}
          &#9998; 
        </button>
        <button 
          onClick={onDeleteClick}
          className="text-gray-400 hover:text-red-500 transition-colors text-xl"
          title="Deletar meta"
        >
          &times;
        </button>
      </div>

      {/* Nome e Progresso % */}
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-semibold text-xl text-yellow-400">{goal.name}</h3>
        <span className="text-sm font-medium text-yellow-400">{progressPercentage.toFixed(1)}%</span>
      </div>
      
      {/* Barra de Progresso */}
      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: `${progressPercentage.toFixed(1)}%` }}/>
      </div>

      {/* Valores */}
      <div className="flex justify-between items-center text-sm text-gray-300 mb-4">
        <span>R$ {goal.current_amount.toLocaleString('pt-BR')}</span>
        <span>R$ {goal.target_amount.toLocaleString('pt-BR')}</span>
      </div>

      {/* Detalhes Adicionais */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">Quanto falta:</span>
          <span className="font-medium text-red-400">R$ {remainingAmount.toLocaleString('pt-BR')}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Prazo:</span>
          <span className="font-medium">{formatDate(goal.deadline)}</span>
        </div>
        {goal.notes && (
          <div>
            <span className="text-gray-400 block">Observações:</span>
            <p className="font-medium text-gray-200">{goal.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}


// --- Componente Principal da Página ---
export default function MetasPage() {
  const [goals, setGoals] = useState([]);
  const [editingGoal, setEditingGoal] = useState(null); // Estado para controlar o modal

  // Busca as metas ao carregar
  useEffect(() => {
    axios.get(`${API_URL}/goals/`)
      .then(response => {
        setGoals(response.data);
      })
      .catch(error => console.error("Erro ao buscar metas:", error));
  }, []);

  // Adiciona a nova meta à lista
  const handleGoalAdded = (newGoal) => {
    setGoals(prevGoals => [newGoal, ...prevGoals]);
  };

  // Remove a meta deletada da lista
  const handleGoalDeleted = (deletedGoalId) => {
    if (confirm(`Tem certeza que deseja deletar esta meta?`)) {
      axios.delete(`${API_URL}/goals/${deletedGoalId}`)
        .then(() => {
          setGoals(prevGoals => prevGoals.filter(goal => goal.id !== deletedGoalId));
        })
        .catch(error => console.error("Erro ao deletar meta:", error));
    }
  };

  // Atualiza a meta na lista após edição ou ajuste
  const handleGoalUpdated = (updatedGoal) => {
    setGoals(prevGoals => 
      prevGoals.map(goal => 
        goal.id === updatedGoal.id ? updatedGoal : goal
      )
    );
  };

  return (
    <div>
      {/* O modal de edição só é renderizado se 'editingGoal' não for nulo */}
      {editingGoal && (
        <EditGoalModal
          goal={editingGoal}
          onClose={() => setEditingGoal(null)}
          onGoalUpdated={handleGoalUpdated}
        />
      )}

      <GoalCreateForm onGoalAdded={handleGoalAdded} />
      
      <h2 className="text-3xl font-bold mb-6">Suas Metas Atuais</h2>
      {goals.length === 0 ? (
        <p className="text-gray-400">Você ainda não criou nenhuma meta.</p>
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
  );
}