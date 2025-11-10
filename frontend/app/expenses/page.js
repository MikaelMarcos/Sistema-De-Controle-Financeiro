'use client'; 

import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

function ExpenseForm({ onExpenseAdded }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  
  // 👇 NOVOS ESTADOS: Grupo (Obrigatório) e Subcategoria (Opcional)
  const [groupId, setGroupId] = useState('');
  const [subcategoryId, setSubcategoryId] = useState('');
  const [newSubcategoryName, setNewSubcategoryName] = useState(''); // Para criar na hora

  const [budgetGroups, setBudgetGroups] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [goals, setGoals] = useState([]);
  
  const [selectedGoalId, setSelectedGoalId] = useState('');
  const [metaGroupId, setMetaGroupId] = useState(null);

  // Busca dados iniciais
  useEffect(() => {
    Promise.all([
      axios.get(`${API_URL}/budget/`),
      axios.get(`${API_URL}/categories/`),
      axios.get(`${API_URL}/goals/`)
    ]).then(([groupsRes, catsRes, goalsRes]) => {
      setBudgetGroups(groupsRes.data);
      setSubcategories(catsRes.data);
      setGoals(goalsRes.data);

      // Encontra o ID do grupo "Metas" para a lógica de vinculação
      const metaGroup = groupsRes.data.find(g => g.name.toLowerCase().includes("metas"));
      if (metaGroup) setMetaGroupId(metaGroup.id);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description || !amount || !groupId) {
      alert("Preencha Descrição, Valor e GRUPO (Obrigatório).");
      return;
    }

    let finalSubcategoryId = subcategoryId;

    // 👇 LÓGICA PARA CRIAR NOVA SUBCATEGORIA NA HORA
    if (newSubcategoryName) {
      try {
        const catRes = await axios.post(`${API_URL}/categories/`, { name: newSubcategoryName });
        finalSubcategoryId = catRes.data.id;
        // Atualiza a lista local de subcategorias
        setSubcategories(prev => [...prev, catRes.data]);
      } catch (error) {
        console.error("Erro ao criar subcategoria:", error);
        alert("Erro ao criar nova subcategoria.");
        return;
      }
    }

    const newExpense = {
      description,
      amount: parseFloat(amount),
      budget_group_id: parseInt(groupId),         // Obrigatório
      category_id: finalSubcategoryId ? parseInt(finalSubcategoryId) : null, // Opcional
      goal_id: null,
      date: date ? new Date(date).toISOString() : new Date().toISOString()
    };

    if (parseInt(groupId) === metaGroupId && selectedGoalId) {
      newExpense.goal_id = parseInt(selectedGoalId);
    }

    axios.post(`${API_URL}/expenses/`, newExpense)
      .then(response => {
        // Limpa o formulário
        setDescription(''); setAmount(''); setDate('');
        setGroupId(''); setSubcategoryId(''); setNewSubcategoryName('');
        setSelectedGoalId('');
        onExpenseAdded(); 
      })
      .catch(error => console.error("Erro ao adicionar despesa:", error));
  };
  
  const isMetaGroupSelected = parseInt(groupId) === metaGroupId;

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-4 text-red-400">Nova Despesa</h2>
      
      {/* Linha 1: Descrição e Valor */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"> 
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição (ex: Almoço)" className="p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-red-500"/>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Valor (ex: 50.00)" className="p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-red-500"/>
      </div>

      {/* Linha 2: Data e GRUPO OBRIGATÓRIO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-red-500"/>
        
        {/* 👇 GRUPO (OBRIGATÓRIO) 👇 */}
        <select value={groupId} onChange={(e) => setGroupId(e.target.value)} className="p-3 bg-gray-700 rounded border-2 border-red-500 focus:outline-none font-bold text-white">
          <option value="">SELECIONE O GRUPO (Obrigatório)</option>
          {budgetGroups.map(group => (
            <option key={group.id} value={group.id}>{group.name}</option>
          ))}
        </select>
      </div>

      {/* Linha 3: Subcategoria (Opcional) e Metas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Subcategoria Existente */}
        <select value={subcategoryId} onChange={(e) => setSubcategoryId(e.target.value)} disabled={!!newSubcategoryName} className={`p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none ${newSubcategoryName ? 'opacity-50' : ''}`}>
          <option value="">Subcategoria (Opcional)</option>
          {subcategories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>

        {/* OU Criar Nova Subcategoria */}
        <input type="text" value={newSubcategoryName} onChange={(e) => setNewSubcategoryName(e.target.value)} disabled={!!subcategoryId} placeholder="Ou digite uma nova Subcategoria..." className={`p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none ${subcategoryId ? 'opacity-50' : ''}`}/>
      </div>

      {/* Dropdown Condicional de Metas */}
      {isMetaGroupSelected && (
        <div className="mt-4">
          <select value={selectedGoalId} onChange={(e) => setSelectedGoalId(e.target.value)} className="w-full p-3 bg-gray-700 rounded border border-yellow-500 focus:outline-none">
            <option value="">Vincular a qual meta?</option>
            {goals.map(goal => (<option key={goal.id} value={goal.id}>{goal.name}</option>))}
          </select>
        </div>
      )}

      <button type="submit" className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded transition duration-300">Adicionar Despesa</button>
    </form>
  );
}

function ExpenseList({ expenses, setExpenses }) {
  const handleDelete = (id) => {
    if (confirm("Deletar despesa?")) {
      axios.delete(`${API_URL}/expenses/${id}`)
        .then(() => setExpenses(expenses.filter(exp => exp.id !== id)))
        .catch(error => console.error("Erro:", error));
    }
  };
  const formatDate = (d) => new Date(d).toLocaleDateString('pt-BR', { timeZone: 'UTC' });

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-red-400">Últimas Despesas</h2>
      <ul className="space-y-4">
        {expenses.map(expense => (
          <li key={expense.id} className="flex justify-between items-center bg-gray-700 p-4 rounded">
            <div>
              <span className="text-xs text-gray-400 block mb-1">{formatDate(expense.date)}</span>
              <span className="font-semibold text-lg">{expense.description}</span>
              
              {/* Mostra GRUPO (Principal) */}
              <span className="text-sm ml-2 px-2 py-0.5 rounded bg-blue-900 text-blue-200 font-bold">
                {expense.budget_group?.name}
              </span>
              
              {/* Mostra SUBCATEGORIA (Opcional) */}
              {expense.category && (
                <span className="text-sm ml-2 px-2 py-0.5 rounded bg-gray-600">
                  {expense.category.name}
                </span>
              )}
               {/* Mostra META */}
               {expense.goal && (
                   <span className="text-sm ml-2 px-2 py-0.5 rounded bg-yellow-600">
                    &rarr; {expense.goal.name}
                  </span>
                )}
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-bold text-red-400 text-lg">R$ {expense.amount.toFixed(2)}</span>
              <button onClick={() => handleDelete(expense.id)} className="text-gray-400 hover:text-red-500">&times;</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState([]);
  const fetchExpenses = () => {
    axios.get(`${API_URL}/expenses/`).then(res => setExpenses(res.data));
  };
  useEffect(() => { fetchExpenses(); }, []);
  return (
    <div>
      <ExpenseForm onExpenseAdded={fetchExpenses} />
      <ExpenseList expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
}