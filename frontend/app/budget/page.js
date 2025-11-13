'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

// --- Componente: Banner de Alerta (O mesmo de antes) ---
function AlertBanner({ overBudgetGroups }) {
  if (overBudgetGroups.length === 0) return null;
  return (
    <div className="bg-gradient-to-r from-red-900/40 to-red-700/30 border-l-4 border-fin-red p-5 mb-8 rounded-xl shadow-lg backdrop-blur-md">
      {/* ... (código do banner idêntico) ... */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <svg className="h-7 w-7 text-fin-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M4.93 19h14.14a2 2 0 001.73-3L13.73 4a2 2 0 00-3.46 0L3.2 16a2 2 0 001.73 3z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold text-fin-red mb-1">⚠️ Atenção ao Orçamento!</h3>
          <p className="text-sm text-gray-300">Você excedeu o limite planejado:</p>
          <ul className="list-disc list-inside mt-2 text-white font-semibold space-y-1">
            {overBudgetGroups.map(group => (
              <li key={group.group_id}>
                {group.name} (Estourado em {formatCurrency(group.actual_spent - group.planned_amount)})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// --- Seletor de Mês (O mesmo de antes) ---
function MonthSelector({ currentDate, onDateChange }) {
  const handlePreviousMonth = () => {
    const newDate = new Date(currentDate); newDate.setMonth(newDate.getMonth() - 1); onDateChange(newDate);
  };
  const handleNextMonth = () => {
    const newDate = new Date(currentDate); newDate.setMonth(newDate.getMonth() + 1); onDateChange(newDate);
  };
  const formattedDate = currentDate.toLocaleString('pt-BR', { month: 'long', year: 'numeric' }).replace(/^\w/, (c) => c.toUpperCase());
  return (
    <div className="flex justify-between items-center mb-8 bg-fin-card/30 p-4 rounded-2xl border border-white/5 backdrop-blur-sm shadow-inner">
      <button onClick={handlePreviousMonth} className="px-3 py-2 text-fin-gold border border-fin-gold/40 rounded-lg hover:bg-fin-gold hover:text-black transition-all">&lt; Anterior</button>
      <h2 className="text-2xl font-light text-white tracking-wide">{formattedDate}</h2>
      <button onClick={handleNextMonth} className="px-3 py-2 text-fin-gold border border-fin-gold/40 rounded-lg hover:bg-fin-gold hover:text-black transition-all">Próximo &gt;</button>
    </div>
  );
}

// --- 👇 NOVO COMPONENTE: Card de Treinamento da IA 👇 ---
function AITrainingCard() {
  const [status, setStatus] = useState({ trained: false, message: 'Verificando status...' });
  const [isLoading, setIsLoading] = useState(false);

  // 1. Verifica o status da IA ao carregar
  useEffect(() => {
    axios.get(`${API_URL}/ai/status`)
      .then(response => setStatus(response.data))
      .catch(error => setStatus({ trained: false, message: "Erro ao conectar com a IA." }));
  }, []);

  // 2. Função para treinar
  const handleTrain = () => {
    setIsLoading(true);
    setStatus({ trained: false, message: "Treinando... Isso pode levar um momento." });
    
    axios.post(`${API_URL}/ai/train`)
      .then(response => {
        setStatus({ trained: true, message: response.data.message });
      })
      .catch(error => {
        // Exibe a mensagem de erro do backend (ex: "Dados insuficientes")
        const detail = error.response?.data?.detail || "Erro desconhecido durante o treinamento.";
        setStatus({ trained: false, message: `Falha no Treinamento: ${detail}` });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const statusColor = status.trained ? "text-green-400" : "text-yellow-400";

  return (
    <div className="bg-gradient-to-br from-fin-dark/90 to-fin-card/50 p-6 rounded-2xl border border-fin-highlight/30 shadow-xl backdrop-blur-sm mt-10">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-fin-highlight/20 rounded-2xl">
          <span className="text-3xl">🤖</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-fin-highlight mb-2">Categorização Inteligente</h2>
          <p className="text-white/80 mb-4 text-sm">
            Treine a IA para aprender com seu histórico. Quanto mais despesas você categorizar, 
            mais inteligente ela ficará para preencher automaticamente no futuro.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={handleTrain}
              disabled={isLoading}
              className="px-6 py-3 bg-gradient-to-r from-fin-highlight to-fin-gold text-fin-dark font-bold rounded-xl shadow-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:animate-pulse"
            >
              {isLoading ? "Treinando IA..." : "Treinar / Retreinar IA"}
            </button>
            <div className="text-left">
              <span className="text-xs text-gray-400">Status:</span>
              <p className={`font-semibold ${statusColor}`}>{status.message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// --- Componente Principal da Página ---
export default function BudgetPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [analysisData, setAnalysisData] = useState(null);
  const [totalPercentage, setTotalPercentage] = useState(0);
  const [overBudgetGroups, setOverBudgetGroups] = useState([]);

  const fetchAnalysis = async () => {
    // ... (código idêntico ao anterior)
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    try {
      const response = await axios.get(`${API_URL}/budget/analysis?month=${month}&year=${year}`);
      setAnalysisData(response.data);
      const totalPerc = response.data.analysis.reduce((acc, group) => acc + group.target_percentage, 0);
      setTotalPercentage(totalPerc);
      const alerts = response.data.analysis.filter((group) => group.is_over_budget);
      setOverBudgetGroups(alerts);
    } catch (error) {
      console.error('Erro ao buscar análise:', error);
    }
  };

  useEffect(() => {
    fetchAnalysis();
  }, [currentDate]);

  const handlePercentageChange = (groupId, newValue) => {
    // ... (código idêntico ao anterior)
    axios.put(`${API_URL}/budget/${groupId}?target_percentage=${newValue}`)
      .then(() => fetchAnalysis())
      .catch((error) => console.error('Erro ao atualizar:', error));
  };

  if (!analysisData)
    return (
      <div className="text-white flex justify-center items-center h-64 animate-pulse">
        Carregando análise...
      </div>
    );

  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-fin-gold tracking-wide drop-shadow-md">
        📊 Meu Orçamento Mensal
      </h1>

      <MonthSelector currentDate={currentDate} onDateChange={setCurrentDate} />

      <AlertBanner overBudgetGroups={overBudgetGroups} />

      {/* Resumo do Mês */}
      <div className="bg-fin-card/80 p-6 rounded-2xl shadow-xl mb-10 flex justify-between items-center border border-white/10 backdrop-blur-md">
        {/* ... (código idêntico ao anterior) ... */}
        <div>
          <h2 className="text-gray-300 text-sm mb-1 font-medium">
            Renda em {currentDate.toLocaleString('pt-BR', { month: 'long' })}
          </h2>
          <p className="text-4xl font-extrabold text-fin-gold">{formatCurrency(analysisData.total_income)}</p>
        </div>
        <div className="text-right">
          <h2 className="text-gray-300 text-sm mb-1 font-medium">Planejamento Total</h2>
          <p className={`text-3xl font-bold ${totalPercentage === 100 ? 'text-green-400' : 'text-fin-red'}`}>
            {totalPercentage}%
          </p>
          {totalPercentage !== 100 && (<span className="text-xs text-fin-red block mt-1">Ajuste para 100%</span>)}
        </div>
      </div>

      {/* Lista Comparativa */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {analysisData.analysis.map((group) => {
          // ... (código idêntico ao anterior) ...
          let spendPercentage = 0;
          if (group.planned_amount > 0) {
            spendPercentage = (group.actual_spent / group.planned_amount) * 100;
          } else if (group.actual_spent > 0) {
            spendPercentage = 100;
          }
          const visualPercentage = Math.min(spendPercentage, 100);

          return (
            <div key={group.group_id} className={`p-6 rounded-2xl border transition-all duration-500 hover:scale-[1.02] shadow-lg ${ group.is_over_budget ? 'bg-gradient-to-br from-red-900/70 to-red-800/50 border-fin-red/40 shadow-red-900/30' : 'bg-gradient-to-br from-fin-dark/70 to-fin-card/40 border-white/10 hover:border-fin-gold/40'}`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{group.name}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm text-gray-400">Meta:</span>
                    <input type="number" min="0" max="100" value={group.target_percentage} onChange={(e) => handlePercentageChange(group.group_id, e.target.value)} className="w-16 bg-fin-dark/50 text-center border border-fin-gold/40 rounded-md text-fin-highlight font-bold focus:outline-none focus:border-fin-gold shadow-inner"/>
                    <span className="text-fin-highlight">%</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-gray-400 text-xs block uppercase tracking-wider">Realizado</span>
                  <span className={`text-2xl font-bold ${ group.is_over_budget ? 'text-fin-red' : 'text-green-300'}`}>
                    {formatCurrency(group.actual_spent)}
                  </span>
                </div>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">
                    Planejado: <strong className="text-fin-gold">{formatCurrency(group.planned_amount)}</strong>
                  </span>
                  <span className={`font-semibold ${ group.is_over_budget ? 'text-fin-red' : 'text-green-400'}`}>
                    {spendPercentage.toFixed(0)}% gasto
                  </span>
                </div>
                <div className="w-full bg-black/30 rounded-full h-4 overflow-hidden border border-white/10 shadow-inner">
                  <div className={`h-full rounded-full shadow-lg transition-all duration-700 ease-out ${ group.is_over_budget ? 'bg-gradient-to-r from-red-500 via-red-600 to-fin-red' : 'bg-gradient-to-r from-green-500 via-green-400 to-green-300'}`} style={{ width: `${visualPercentage}%` }}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 👇 O NOVO CARD DE TREINAMENTO É INSERIDO AQUI 👇 */}
      <AITrainingCard />
    </div>
  );
}

// Função auxiliar (precisa estar no escopo)
const formatCurrency = (value) => {
  if (value === null || value === undefined) value = 0;
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};