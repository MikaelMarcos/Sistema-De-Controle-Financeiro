'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

// --- Componente: Banner de Alerta (NOVO) ---
function AlertBanner({ overBudgetGroups }) {
  if (overBudgetGroups.length === 0) return null;

  return (
    <div className="bg-red-900/30 border-l-4 border-fin-red p-4 mb-8 rounded-r-xl backdrop-blur-md animate-pulse">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-fin-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-bold text-fin-red">Atenção ao Orçamento!</h3>
          <div className="mt-1 text-sm text-gray-300">
            <p>
              Você excedeu o limite planejado nos seguintes grupos:
            </p>
            <ul className="list-disc list-inside mt-2 text-white font-semibold">
              {overBudgetGroups.map(group => (
                <li key={group.group_id}>
                  {group.name} (Estourado em {(group.actual_spent - group.planned_amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

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
  const formattedDate = currentDate.toLocaleString('pt-BR', { month: 'long', year: 'numeric' }).replace(/^\w/, (c) => c.toUpperCase());

  return (
    <div className="flex justify-between items-center mb-8 bg-fin-card/30 p-4 rounded-2xl border border-white/5">
      <button onClick={handlePreviousMonth} className="p-2 text-fin-gold hover:bg-fin-card rounded-full transition-colors">
        &lt; Anterior
      </button>
      <h2 className="text-2xl font-light text-white tracking-wide">{formattedDate}</h2>
      <button onClick={handleNextMonth} className="p-2 text-fin-gold hover:bg-fin-card rounded-full transition-colors">
        Próximo &gt;
      </button>
    </div>
  );
}

export default function BudgetPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [analysisData, setAnalysisData] = useState(null);
  const [totalPercentage, setTotalPercentage] = useState(0);
  const [overBudgetGroups, setOverBudgetGroups] = useState([]); // 👈 NOVO ESTADO PARA ALERTAS

  // Função de busca definida antes do useEffect
  const fetchAnalysis = async () => {
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    try {
      const response = await axios.get(`${API_URL}/budget/analysis?month=${month}&year=${year}`);
      setAnalysisData(response.data);
      
      const totalPerc = response.data.analysis.reduce((acc, group) => acc + group.target_percentage, 0);
      setTotalPercentage(totalPerc);

      // Filtra os grupos que estouraram o orçamento
      const alerts = response.data.analysis.filter(group => group.is_over_budget);
      setOverBudgetGroups(alerts);

    } catch (error) {
      console.error("Erro ao buscar análise de orçamento:", error);
    }
  };

  useEffect(() => {
    fetchAnalysis();
  }, [currentDate]);

  const handlePercentageChange = (groupId, newValue) => {
    axios.put(`${API_URL}/budget/${groupId}?target_percentage=${newValue}`)
      .then(() => {
        fetchAnalysis();
      })
      .catch(error => console.error("Erro ao atualizar porcentagem:", error));
  };

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  if (!analysisData) return <div className="text-white flex justify-center items-center h-64">Carregando análise...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-white">Planejado vs. Realizado</h1>
      
      <MonthSelector currentDate={currentDate} onDateChange={setCurrentDate} />

      {/* 👇 INSERE O BANNER DE ALERTA AQUI 👇 */}
      <AlertBanner overBudgetGroups={overBudgetGroups} />

      {/* Resumo do Mês */}
      <div className="bg-fin-card/80 p-6 rounded-2xl shadow-lg mb-8 flex justify-between items-center border border-white/5 backdrop-blur-sm">
        <div>
          <h2 className="text-gray-300 text-sm font-medium mb-1">Renda em {currentDate.toLocaleString('pt-BR', { month: 'long' })}</h2>
          <p className="text-4xl font-bold text-fin-gold">{formatCurrency(analysisData.total_income)}</p>
        </div>
        <div className="text-right">
          <h2 className="text-gray-300 text-sm font-medium mb-1">Planejamento Total</h2>
          <p className={`text-3xl font-bold ${totalPercentage === 100 ? 'text-fin-highlight' : 'text-fin-terra'}`}>
            {totalPercentage}%
          </p>
          {totalPercentage !== 100 && <span className="text-xs text-fin-red block mt-1">Ajuste para 100%</span>}
        </div>
      </div>

      {/* Lista Comparativa */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {analysisData.analysis.map(group => {
          let spendPercentage = 0;
          if (group.planned_amount > 0) {
            spendPercentage = (group.actual_spent / group.planned_amount) * 100;
          } else if (group.actual_spent > 0) {
            spendPercentage = 100; 
          }
          const visualPercentage = Math.min(spendPercentage, 100);

          return (
            <div key={group.group_id} className={`p-6 rounded-2xl shadow-lg border transition-all duration-300 ${group.is_over_budget ? 'bg-fin-dark/90 border-fin-red/50 shadow-fin-red/20' : 'bg-fin-dark/60 border-white/5 hover:bg-fin-dark/80'}`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{group.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-400">Meta:</span>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={group.target_percentage}
                      onChange={(e) => handlePercentageChange(group.group_id, e.target.value)}
                      className="w-14 bg-fin-dark/50 text-center border border-fin-card rounded-md text-fin-highlight font-bold focus:outline-none focus:border-fin-gold"
                    />
                    <span className="text-fin-highlight">%</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-gray-400 text-xs block uppercase tracking-wider">Realizado</span>
                  <span className={`text-2xl font-bold ${group.is_over_budget ? 'text-fin-red' : 'text-white'}`}>
                    {formatCurrency(group.actual_spent)}
                  </span>
                </div>
              </div>

              <div className="mb-2">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">
                    Planejado: <strong className="text-fin-gold">{formatCurrency(group.planned_amount)}</strong>
                  </span>
                  <span className={`font-semibold ${group.is_over_budget ? 'text-fin-red' : 'text-green-400'}`}>
                    {spendPercentage.toFixed(0)}% gasto
                  </span>
                </div>
                <div className="w-full bg-black/30 rounded-full h-4 p-0.5 border border-white/5 overflow-hidden relative">
                  <div 
                    className={`h-full rounded-full shadow-lg transition-all duration-700 ease-out ${group.is_over_budget ? 'bg-gradient-to-r from-red-600 to-fin-red' : 'bg-gradient-to-r from-green-600 to-green-400'}`} 
                    style={{ width: `${visualPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}