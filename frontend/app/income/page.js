'use client'; 

import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

// --- Componente do Formulário de Entradas ---
function IncomeForm({ onIncomeAdded }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(''); // Estado para data

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const newIncome = {
      description: description,
      amount: parseFloat(amount),
    };

    // Adiciona a data ao objeto APENAS se ela foi preenchida
    if (date) {
      newIncome.date = new Date(date).toISOString();
    }

    axios.post(`${API_URL}/income/`, newIncome)
      .then(response => {
        setDescription('');
        setAmount('');
        setDate(''); // Limpa o campo de data
        onIncomeAdded(response.data);
      })
      .catch(error => console.error("Erro ao adicionar entrada:", error));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-4 text-green-400">Nova Entrada (Receita)</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição (ex: Salário - LAIS)"
          className="p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-green-500"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Valor (ex: 3000.00)"
          className="p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-green-500"
        />
        {/* Campo de Data */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-green-500"
        />
      </div>
      <button type="submit" className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded transition duration-300">
        Adicionar Entrada
      </button>
    </form>
  );
}

// --- Componente da Lista de Entradas ---
function IncomeList({ incomes, setIncomes }) {
  
  const handleDelete = (id) => {
    if (confirm("Tem certeza que deseja deletar esta entrada?")) {
      axios.delete(`${API_URL}/income/${id}`)
        .then(() => {
          setIncomes(incomes.filter(inc => inc.id !== id));
        })
        .catch(error => console.error("Erro ao deletar entrada:", error));
    }
  };

  // Função para formatar a data
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-green-400">Últimas Entradas</h2>
      {incomes.length === 0 ? (
        <p className="text-gray-400">Nenhuma entrada registrada ainda.</p>
      ) : (
        <ul className="space-y-4">
          {incomes.map(income => (
            <li key={income.id} className="flex justify-between items-center bg-gray-700 p-4 rounded">
              <div>
                {/* Span de Data */}
                <span className="text-xs text-gray-400 block mb-1">
                  {formatDate(income.date)}
                </span>
                <span className="font-semibold text-lg">{income.description}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-bold text-green-400 text-lg">
                  + R$ {income.amount.toFixed(2)}
                </span>
                <button
                  onClick={() => handleDelete(income.id)}
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


// --- Componente Principal da Página ---
export default function IncomePage() {
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/income/`)
      .then(response => {
        setIncomes(response.data);
      })
      .catch(error => console.error("Erro ao buscar entradas:", error));
  }, []);

  const handleNewIncome = (newIncome) => {
    // Adiciona a nova entrada no topo da lista
    setIncomes(prevIncomes => [newIncome, ...prevIncomes]);
  };

  return (
    <div>
      <IncomeForm onIncomeAdded={handleNewIncome} />
      <IncomeList incomes={incomes} setIncomes={setIncomes} />
    </div>
  );
}