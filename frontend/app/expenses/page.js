'use client'; 

import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

// --- Componente do Formulário de Despesas (ATUALIZADO) ---
function ExpenseForm({ onExpenseAdded }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  
  // 👇 NOVOS ESTADOS PARA VINCULAR METAS
  const [goals, setGoals] = useState([]);
  const [selectedGoalId, setSelectedGoalId] = useState('');
  const [metaCategoryId, setMetaCategoryId] = useState(null);

  // Busca categorias e metas
  useEffect(() => {
    Promise.all([
      axios.get(`${API_URL}/categories/`),
      axios.get(`${API_URL}/goals/`)
    ])
    .then(([categoriesRes, goalsRes]) => {
      const allCategories = categoriesRes.data;
      setCategories(allCategories);
      setGoals(goalsRes.data);

      // Seta a primeira categoria como padrão
      if (allCategories.length > 0) {
        setCategoryId(allCategories[0].id);
      }
      
      // Encontra e armazena o ID da categoria "Sonhos/metas"
      const metaCat = allCategories.find(
        cat => cat.name.toLowerCase().includes("sonhos")
      );
      if (metaCat) {
        setMetaCategoryId(metaCat.id);
      }
    })
    .catch(error => console.error("Erro ao buscar dados:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !categoryId) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const newExpense = {
      description: description,
      amount: parseFloat(amount),
      category_id: parseInt(categoryId),
      goal_id: null
    };

    // Adiciona a data
    if (date) {
      newExpense.date = new Date(date).toISOString(); 
    }
    
    // 👇 ADICIONA O ID DA META SE ESTIVER SELECIONADO
    if (parseInt(categoryId) === metaCategoryId && selectedGoalId) {
      newExpense.goal_id = parseInt(selectedGoalId);
    }

    axios.post(`${API_URL}/expenses/`, newExpense)
      .then(response => {
        setDescription('');
        setAmount('');
        setDate('');
        setSelectedGoalId(''); // Limpa o seletor de meta
        onExpenseAdded(response.data); 
      })
      .catch(error => console.error("Erro ao adicionar despesa:", error));
  };
  
  // Verifica se a categoria de "sonhos" está selecionada
  const isMetaCategorySelected = parseInt(categoryId) === metaCategoryId;

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-4 text-red-400">Nova Despesa</h2>
      
      {/* Linha 1: Descrição e Valor */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"> 
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição (ex: Poupança Casamento)"
          className="p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-red-500"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Valor (ex: 500.00)"
          className="p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-red-500"
        />
      </div>

      {/* Linha 2: Data, Categoria e Meta (condicional) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-red-500"
        />
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-red-500"
        >
          <option value="" disabled>Selecione a Categoria</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        
        {/* 👇 O DROPDOWN CONDICIONAL 👇 */}
        {isMetaCategorySelected && (
          <select
            value={selectedGoalId}
            onChange={(e) => setSelectedGoalId(e.target.value)}
            className="p-3 bg-gray-700 rounded border border-yellow-500 focus:outline-none"
          >
            <option value="">Vincular a qual meta?</option>
            {goals.map(goal => (
              <option key={goal.id} value={goal.id}>{goal.name}</option>
            ))}
          </select>
        )}
      </div>

      <button type="submit" className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded transition duration-300">
        Adicionar Despesa
      </button>
    </form>
  );
}

// ... O resto da página (ExpenseList, ExpensesPage) permanece o mesmo ...
// --- Componente da Lista de Despesas ---
function ExpenseList({ expenses, setExpenses }) {
  
  const handleDelete = (id) => {
    if (confirm("Tem certeza que deseja deletar esta despesa?")) {
      axios.delete(`${API_URL}/expenses/${id}`)
        .then(() => {
          setExpenses(expenses.filter(exp => exp.id !== id));
        })
        .catch(error => console.error("Erro ao deletar despesa:", error));
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-red-400">Todas as Despesas</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-400">Nenhuma despesa registrada ainda.</p>
      ) : (
        <ul className="space-y-4">
          {expenses.map(expense => (
            <li key={expense.id} className="flex justify-between items-center bg-gray-700 p-4 rounded">
              <div>
                <span className="text-xs text-gray-400 block mb-1">
                  {formatDate(expense.date)}
                </span>
                <span className="font-semibold text-lg">{expense.description}</span>
                <span className={`text-sm ml-2 px-2 py-0.5 rounded ${expense.category ? 'bg-blue-600' : 'bg-gray-600'}`}>
                  {expense.category ? expense.category.name : 'Sem Categoria'}
                </span>
                {/* Mostra a meta se estiver vinculada */}
                {expense.goal && (
                   <span className="text-sm ml-2 px-2 py-0.5 rounded bg-yellow-600">
                    &rarr; {expense.goal.name}
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-bold text-red-400 text-lg">
                  R$ {expense.amount.toFixed(2)}
                </span>
                <button
                  onClick={() => handleDelete(expense.id)}
                  className="text-gray-400 hover:text-red-500 transition duration-300"
                >
                  &times;
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// --- Componente Principal da Página de Despesas ---
export default function ExpensesPage() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = () => {
    // Agora usamos a rota /expenses/ com filtro de data (opcional)
    // Para a página de "todas as despesas", vamos buscar sem filtro
    axios.get(`${API_URL}/expenses/`) 
      .then(response => {
        setExpenses(response.data);
      })
      .catch(error => console.error("Erro ao buscar despesas:", error));
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleNewExpense = (newExpense) => {
     // Recarrega a lista inteira para obter dados da categoria/meta
     fetchExpenses();
  };

  return (
    <div>
      <ExpenseForm onExpenseAdded={handleNewExpense} />
      <ExpenseList expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
}