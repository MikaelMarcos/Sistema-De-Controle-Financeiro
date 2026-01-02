'use client';

import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import AuthGuard from '@/components/AuthGuard';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Registra os elementos do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const formatCurrency = (v) => (v ?? 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// --- Cores dos Grupos (CORRIGIDAS com os nomes exatos) ---
const groupColors = {
  'Custo Fixo': '#3B82F6',     // Azul
  'Metas': '#8B5CF6',          // Roxo
  'Investimentos': '#10B981',  // Verde
  'Conhecimento': '#EAB308',   // Amarelo
  'Prazer': '#F97316',         // Laranja
  'Conforto': '#EC4899',       // Rosa
  'default': '#6B7280'         // Cinza
};

// Mapeamento de nomes para garantir cores consistentes
const getGroupColor = (groupName) => {
  // Remove espaços extras e padroniza o nome
  const normalizedName = groupName?.trim();
  
  // Verifica cada possibilidade de nome
  if (normalizedName === 'Conhecimento' || normalizedName === 'conhecimento') {
    return groupColors['Conhecimento'];
  }
  if (normalizedName === 'Conforto' || normalizedName === 'conforto') {
    return groupColors['Conforto'];
  }
  if (normalizedName === 'Custo Fixo' || normalizedName === 'Custo fixo' || normalizedName === 'custo fixo') {
    return groupColors['Custo Fixo'];
  }
  if (normalizedName === 'Metas' || normalizedName === 'metas') {
    return groupColors['Metas'];
  }
  if (normalizedName === 'Investimentos' || normalizedName === 'investimentos') {
    return groupColors['Investimentos'];
  }
  if (normalizedName === 'Prazer' || normalizedName === 'prazer') {
    return groupColors['Prazer'];
  }
  
  return groupColors['default'];
};

// Ordem de exibição dos grupos
const groupOrder = ['Custo Fixo', 'Metas', 'Investimentos', 'Conhecimento', 'Prazer', 'Conforto'];

// --- Componente: Banner de Alerta ---
function AlertBanner({ overBudgetGroups }) {
  if (overBudgetGroups.length === 0) return null;
  return (
    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 mb-4">
      <div className="flex items-start gap-2">
        <div className="flex-shrink-0 mt-0.5">
          <svg className="h-4 w-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M4.93 19h14.14a2 2 0 001.73-3L13.73 4a2 2 0 00-3.46 0L3.2 16a2 2 0 001.73 3z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-xs font-semibold text-red-400 mb-1">Atenção ao Orçamento!</h3>
          <div className="flex flex-wrap gap-1.5">
            {overBudgetGroups.map(group => (
              <span 
                key={group.id} 
                className="px-2 py-0.5 bg-red-500/20 text-red-300 text-xs rounded-lg inline-flex items-center gap-1"
              >
                <div 
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: getGroupColor(group.name) }}
                ></div>
                {group.name} (+{formatCurrency(group.actual_spent - group.planned_amount)})
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Componente: Seletor de Mês ---
function MonthSelector({ currentDate, onDateChange }) {
  const handlePreviousMonth = () => { const newDate = new Date(currentDate); newDate.setMonth(newDate.getMonth() - 1); onDateChange(newDate); };
  const handleNextMonth = () => { const newDate = new Date(currentDate); newDate.setMonth(newDate.getMonth() + 1); onDateChange(newDate); };
  const formattedDate = currentDate.toLocaleString('pt-BR', { month: 'long', year: 'numeric' }).replace(/^\w/, (c) => c.toUpperCase());
  return (
    <div className="flex justify-between items-center mb-4 bg-gray-800/50 p-2 rounded-lg border border-gray-700">
      <button onClick={handlePreviousMonth} className="px-2.5 py-1 text-xs text-gray-300 border border-gray-600 rounded hover:bg-gray-700 transition">&lt;</button>
      <h2 className="text-sm font-medium text-white">{formattedDate}</h2>
      <button onClick={handleNextMonth} className="px-2.5 py-1 text-xs text-gray-300 border border-gray-600 rounded hover:bg-gray-700 transition">&gt;</button>
    </div>
  );
}

// --- Componente: Gráfico de Orçamento ---
function BudgetChart({ groups }) {
  // Ordena os grupos conforme a ordem definida
  const orderedGroups = [...groups].sort((a, b) => {
    const indexA = groupOrder.indexOf(a.name);
    const indexB = groupOrder.indexOf(b.name);
    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
  });

  const data = {
    labels: orderedGroups.map(g => g.name),
    datasets: [{
      data: orderedGroups.map(g => g.target_percentage),
      backgroundColor: orderedGroups.map(g => getGroupColor(g.name)),
      borderColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 1.5,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        display: false
      },
      tooltip: { 
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        callbacks: { 
          label: (ctx) => `${ctx.label}: ${ctx.parsed}% (${formatCurrency((ctx.parsed / 100) * (groups.reduce((acc, g) => acc + (g.planned_amount || 0), 0) || 1))})` 
        } 
      }
    },
    cutout: '70%',
  };

  const totalPercentage = groups.reduce((sum, g) => sum + (g.target_percentage || 0), 0);

  return (
    <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-white">Distribuição Planejada</h3>
        <span className={`text-xs px-2 py-1 rounded-full ${totalPercentage === 100 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
          {totalPercentage}%
        </span>
      </div>
      
      <div className="relative h-40 mb-3">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-base font-bold text-white">{totalPercentage}%</span>
          <span className="text-[10px] text-gray-400">alocado</span>
        </div>
      </div>
      
      {/* Legenda vertical compacta com cores */}
      <div className="grid grid-cols-2 gap-1.5">
        {orderedGroups.map((group, index) => (
          <div key={group.id} className="flex items-center gap-1.5">
            <div 
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: getGroupColor(group.name) }}
            ></div>
            <span className="text-[10px] text-gray-300 truncate">{group.name}</span>
            <span className="text-[10px] font-medium text-white ml-auto">{group.target_percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Componente: Slider ---
function RangeSlider({ label, value, onChange, actualSpent, plannedAmount }) {
  const sliderRef = useRef(null);
  const filledWidth = `${Math.min(Math.max(value, 0), 100)}%`;

  const handleMove = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const trackWidth = rect.width;
    const thumbWidth = 10;
    let relativeX = clientX - rect.left - (thumbWidth / 2);
    relativeX = Math.max(0, Math.min(relativeX, trackWidth - thumbWidth));
    const newValue = Math.round((relativeX / (trackWidth - thumbWidth)) * 100);
    onChange(newValue);
  };

  const handleStart = (e) => {
    handleMove(e);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', handleEnd);
  };

  const handleEnd = () => {
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('mouseup', handleEnd);
    document.removeEventListener('touchmove', handleMove);
    document.removeEventListener('touchend', handleEnd);
  };

  const isOver = actualSpent > plannedAmount && plannedAmount > 0;
  const groupColor = getGroupColor(label);

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1.5">
        <div className="flex items-center gap-1.5">
          <div 
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: groupColor }}
          ></div>
          <label className="text-xs text-white/90 truncate max-w-[100px]" style={{ color: groupColor }}>
            {label}
          </label>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-white">
            {value}%
          </div>
          <div className={`text-[10px] ${isOver ? 'text-red-400' : 'text-gray-400'}`}>
            {formatCurrency(plannedAmount)}
          </div>
        </div>
      </div>
      
      <div 
        ref={sliderRef}
        className="relative w-full h-1.5 bg-white/10 rounded-full cursor-pointer"
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        <div 
          className="absolute top-0 left-0 h-full rounded-full"
          style={{ width: filledWidth, backgroundColor: groupColor }}
        ></div>
        <div 
          className="absolute top-1/2 w-2.5 h-2.5 bg-white border border-gray-700 rounded-full -translate-y-1/2 shadow-sm"
          style={{ left: filledWidth }}
        ></div>
      </div>
      
      <div className="flex justify-between text-[10px] text-gray-500 mt-0.5">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  );
}

// --- Gerenciador de Grupos ---
function BudgetGroupManager({ groups, onGroupAdded }) {
  const [newGroupName, setNewGroupName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newGroupName.trim()) return;
    setIsSubmitting(true);
    try {
      await axios.post(`${API_URL}/budget/`, { name: newGroupName });
      setNewGroupName('');
      onGroupAdded();
    } catch (error) {
      console.error("Erro ao criar grupo:", error);
      alert(error.response?.data?.detail || "Erro ao criar grupo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 mb-4">
      <h3 className="text-xs font-semibold text-white mb-2">Adicionar Grupo</h3>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input 
          type="text" 
          value={newGroupName} 
          onChange={(e) => setNewGroupName(e.target.value)} 
          placeholder="Novo grupo..."
          className="flex-1 text-xs p-2 bg-gray-900/50 rounded border border-gray-600 text-white placeholder-gray-500"
        />
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="px-2.5 py-1.5 text-xs bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition disabled:opacity-50"
        >
          {isSubmitting ? "..." : "Add"}
        </button>
      </form>
    </div>
  );
}

// --- Card de Treinamento da IA ---
function AITrainingCard() {
  const [status, setStatus] = useState({ trained: false, message: 'Verificando...' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/ai/status`)
      .then(response => setStatus(response.data))
      .catch(() => setStatus({ trained: false, message: "Erro ao conectar." }));
  }, []);

  const handleTrain = () => {
    setIsLoading(true);
    setStatus({ trained: false, message: "Treinando..." });
    axios.post(`${API_URL}/ai/train`)
      .then(response => setStatus({ trained: true, message: response.data.message }))
      .catch(error => {
        const detail = error.response?.data?.detail || "Erro no treinamento.";
        setStatus({ trained: false, message: `Falha: ${detail}` });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 mt-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="p-1.5 bg-purple-500/20 rounded">
          <span className="text-sm">🤖</span>
        </div>
        <div className="flex-1">
          <h4 className="text-xs font-semibold text-white">Treinar IA</h4>
          <p className="text-[10px] text-gray-400">Categorização automática</p>
        </div>
        <button 
          onClick={handleTrain} 
          disabled={isLoading}
          className="text-xs px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded hover:opacity-90 transition disabled:opacity-50"
        >
          {isLoading ? "..." : "Treinar"}
        </button>
      </div>
      <div className="text-[10px] text-gray-400 flex items-center gap-1">
        <div className={`w-1.5 h-1.5 rounded-full ${status.trained ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
        Status: <span className={status.trained ? 'text-green-400' : 'text-yellow-400'}>{status.message}</span>
      </div>
    </div>
  );
}

// --- Componente Principal ---
function BudgetPage() {
  const [groups, setGroups] = useState([]); 
  const [currentDate, setCurrentDate] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);
  const [totalPercentage, setTotalPercentage] = useState(0);
  const [overBudgetGroups, setOverBudgetGroups] = useState([]);
  const debounceTimers = useRef({});
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => { setCurrentDate(new Date()); }, []);

  const fetchData = async () => {
    if (!currentDate) return;
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    
    try {
      const res = await axios.get(`${API_URL}/budget/analysis?month=${month}&year=${year}`);
      
      // Ordena os grupos conforme a ordem definida
      const sorted = res.data.analysis.sort((a, b) => {
        const idxA = groupOrder.indexOf(a.name);
        const idxB = groupOrder.indexOf(b.name);
        return (idxA === -1 ? 999 : idxA) - (idxB === -1 ? 999 : idxB);
      });
      
      const mappedGroups = sorted.map(g => ({
        id: g.group_id, 
        name: g.name,
        target_percentage: g.target_percentage,
        actual_spent: g.actual_spent,
        planned_amount: g.planned_amount,
        is_over_budget: g.is_over_budget
      }));

      setGroups(mappedGroups);
      const totalPerc = mappedGroups.reduce((acc, group) => acc + group.target_percentage, 0);
      setTotalPercentage(totalPerc);
      setAnalysisData(res.data);
      setOverBudgetGroups(mappedGroups.filter(g => g.is_over_budget));
    } catch (error) { console.error("Erro ao buscar dados:", error); }
  };

  useEffect(() => { fetchData(); }, [currentDate]);

  const handlePercentageChange = (id, newPercentage) => {
    const val = parseInt(newPercentage) || 0;
    
    const totalIncome = analysisData?.total_income || 0;
    const newPlannedAmount = (totalIncome * val) / 100;

    setGroups(prev => {
      const newGroups = prev.map(g => {
        if (g.id === id) {
            return { ...g, target_percentage: val, planned_amount: newPlannedAmount };
        }
        return g;
      });
      const newTotal = newGroups.reduce((acc, g) => acc + g.target_percentage, 0);
      setTotalPercentage(newTotal);
      return newGroups;
    });

    if (debounceTimers.current[id]) clearTimeout(debounceTimers.current[id]);
    debounceTimers.current[id] = setTimeout(() => {
        axios.put(`${API_URL}/budget/${id}?target_percentage=${val}`).catch(console.error);
    }, 800);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await Promise.all(
        groups.map(group => 
          axios.put(`${API_URL}/budget/${group.id}?target_percentage=${group.target_percentage}`)
        )
      );
      setNotification({ message: "✅ Orçamento salvo", type: "success" });
      setTimeout(() => setNotification(null), 2000);
    } catch (error) {
      setNotification({ message: "❌ Erro ao salvar", type: "error" });
      setTimeout(() => setNotification(null), 2000);
    } finally {
      setIsSaving(false);
    }
  };

  if (!analysisData || !currentDate) return <div className="text-white p-4 text-center">Carregando...</div>;

  const isTotalValid = totalPercentage === 100;

  return (
    <div className="text-white p-3 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-base font-semibold text-white">Meu Orçamento</h1>
        <div className="text-xs text-gray-400">
          {currentDate.toLocaleString('pt-BR', { month: 'short', year: 'numeric' })}
        </div>
      </div>
      
      <BudgetGroupManager groups={groups} onGroupAdded={() => fetchData()} />
      
      <AlertBanner overBudgetGroups={overBudgetGroups} />

      {notification && (
        <div className={`fixed top-3 right-3 px-3 py-1.5 rounded text-xs font-medium z-50 ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
          {notification.message}
        </div>
      )}

      {/* Cartão de Resumo Compacto */}
      <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 mb-4 flex justify-between items-center">
        <div>
          <div className="text-[10px] text-gray-400 mb-0.5">Renda mensal</div>
          <div className="text-sm font-bold text-white">{formatCurrency(analysisData.total_income)}</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-gray-400 mb-0.5">Planejamento</div>
          <div className={`text-sm font-bold ${totalPercentage === 100 ? 'text-green-400' : 'text-red-400'}`}>{totalPercentage}%</div>
          {totalPercentage !== 100 && (
            <div className="text-[10px] text-red-400 mt-0.5">Ajuste para 100%</div>
          )}
        </div>
      </div>

      {/* Conteúdo Principal - Grid ajustado */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Gráfico mais compacto (1/3 da largura) */}
        <div className="lg:col-span-1">
          <BudgetChart groups={groups} />
        </div>
        
        {/* Sliders maiores (2/3 da largura) */}
        <div className="lg:col-span-2 bg-gray-800/50 p-4 rounded-xl border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-white">Ajuste de Percentuais</h3>
            <div className={`text-xs px-2 py-1 rounded ${isTotalValid ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
              Total: {totalPercentage}%
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {groups.map(group => (
              <RangeSlider
                key={group.id}
                label={group.name}
                value={group.target_percentage}
                actualSpent={group.actual_spent}
                plannedAmount={group.planned_amount} 
                onChange={(newValue) => handlePercentageChange(group.id, newValue)}
              />
            ))}
          </div>
          
          <button 
            onClick={handleSave} 
            disabled={isSaving || !isTotalValid}
            className={`w-full mt-5 py-2.5 text-sm rounded-lg font-medium transition ${isTotalValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 cursor-not-allowed'}`}
          >
            {isSaving ? 'Salvando...' : isTotalValid ? 'Salvar Alterações' : 'Ajuste para 100%'}
          </button>
        </div>
      </div>

      {/* IA Card no final */}
      <AITrainingCard />
      
      <style jsx global>{`
        body {
          background: #111827;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number] {
          -moz-appearance: textfield;
        }
        .truncate {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}

export default function BudgetPageWrapper() {
  return <AuthGuard><BudgetPage /></AuthGuard>;
}