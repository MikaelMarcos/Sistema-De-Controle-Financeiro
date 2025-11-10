'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

export default function BudgetPage() {
  const [groups, setGroups] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalPercentage, setTotalPercentage] = useState(0);

  // Função para calcular a porcentagem total
  // Definida antes para ser usada no fetchData e no handlePercentageChange
  const calculateTotalPercentage = (currentGroups) => {
    const total = currentGroups.reduce((acc, group) => acc + (group.target_percentage || 0), 0);
    setTotalPercentage(total);
  };

  // Função para buscar os dados
  // Definida antes do useEffect para evitar o erro de "accessed before declaration"
  const fetchData = async () => {
    try {
      // Busca os grupos de orçamento E todas as entradas (receitas)
      const [groupsRes, incomeRes] = await Promise.all([
        axios.get(`${API_URL}/budget/`),
        axios.get(`${API_URL}/income/`)
      ]);
      
      setGroups(groupsRes.data);
      calculateTotalPercentage(groupsRes.data);

      // Calcula a renda total somando todas as entradas
      const incomeTotal = incomeRes.data.reduce((acc, inc) => acc + inc.amount, 0);
      setTotalIncome(incomeTotal);

    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  // useEffect chama fetchData após ela ter sido definida
  useEffect(() => {
    fetchData();
  }, []);

  const handlePercentageChange = (groupId, newValue) => {
    const newPercentage = parseInt(newValue);
    const updatedGroups = groups.map(g => 
      g.id === groupId ? { ...g, target_percentage: newPercentage } : g
    );
    setGroups(updatedGroups);
    calculateTotalPercentage(updatedGroups);

    // Salva no backend sem esperar a resposta (otimista)
    axios.put(`${API_URL}/budget/${groupId}?target_percentage=${newPercentage}`)
      .catch(error => console.error("Erro ao salvar porcentagem:", error));
  };

  // Função auxiliar para formatar moeda (R$)
  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Planejamento de Orçamento</h1>

      {/* Card de Resumo da Renda */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-gray-400 text-sm font-medium mb-1">Sua Renda Total Estimada</h2>
          <p className="text-4xl font-bold text-green-400">{formatCurrency(totalIncome)}</p>
        </div>
        <div className="text-right">
          <h2 className="text-gray-400 text-sm font-medium mb-1">Total Alocado</h2>
          <p className={`text-3xl font-bold ${totalPercentage === 100 ? 'text-blue-400' : 'text-yellow-500'}`}>
            {totalPercentage}%
          </p>
          {totalPercentage !== 100 && (
            <span className="text-xs text-red-400 block mt-1">
              Tente fechar em 100%
            </span>
          )}
        </div>
      </div>

      {/* Lista de Grupos com Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groups.map(group => {
          // Calcula o valor em R$ para este grupo com base na % e na renda total
          const recommendedValue = (totalIncome * (group.target_percentage / 100)) || 0;

          return (
            <div key={group.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{group.name}</h3>
                  <span className="text-blue-400 font-medium text-lg">
                    {group.target_percentage}%
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-gray-400 text-sm block">Valor Recomendado</span>
                  <span className="text-2xl font-bold text-green-400">
                    {formatCurrency(recommendedValue)}
                  </span>
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={group.target_percentage}
                onChange={(e) => handlePercentageChange(group.id, e.target.value)}
                className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}