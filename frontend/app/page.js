'use client'; 

import { useState, useEffect } from 'react';
import axios from 'axios';
// 👇 1. IMPORTAR AS BIBLIOTECAS DE GRÁFICO
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// 👇 2. REGISTRAR OS COMPONENTES DO GRÁFICO
ChartJS.register(ArcElement, Tooltip, Legend);

const API_URL = 'http://localhost:8000';

// --- Componente: Seletor de Mês (O mesmo de antes) ---
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
  const formattedDate = currentDate.toLocaleString('pt-BR', {
    month: 'long',
    year: 'numeric',
  }).replace(/^\w/, (c) => c.toUpperCase());

  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-lg mb-8">
      <button onClick={handlePreviousMonth} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
        &lt; Anterior
      </button>
      <h2 className="text-xl font-bold text-white">{formattedDate}</h2>
      <button onClick={handleNextMonth} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
        Próximo &gt;
      </button>
    </div>
  );
}

// --- Componente: Card de Resumo (O mesmo de antes, mas com % de poupança) ---
function SummaryCard({ title, amount, colorClass, isCurrency = true }) {
  const formattedAmount = isCurrency
    ? amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    : `${amount.toFixed(1)}%`; // Formata para porcentagem

  return (
    <div className={`bg-gray-800 p-6 rounded-lg shadow-lg`}>
      <h2 className="text-sm font-medium text-gray-400 mb-1">{title}</h2>
      <p className={`text-3xl font-bold ${colorClass}`}>{formattedAmount}</p>
    </div>
  );
}

// --- NOVO Componente: Gráfico de Despesas ---
function ExpenseChart({ chartData }) {
  
  // Transforma os dados da API no formato do Chart.js
  const data = {
    labels: chartData.map(item => item.category_name),
    datasets: [
      {
        label: 'Gastos por Categoria',
        data: chartData.map(item => item.total),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
          '#9966FF', '#FF9F40', '#E7E9ED', '#8B0000',
          '#008B8B', '#BDB76B', '#556B2F', '#FF8C00',
        ],
        borderColor: '#4B5563', // bg-gray-600
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#E5E7EB', // text-gray-200
          boxWidth: 20,
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(context.parsed);
            }
            return label;
          }
        }
      }
    },
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-[400px]">
      <h2 className="text-2xl font-bold mb-4 text-green-400">Gastos por Categoria</h2>
      {chartData.length > 0 ? (
        <div className="relative h-full w-full max-h-[320px]">
          <Doughnut data={data} options={options} />
        </div>
      ) : (
        <p className="text-gray-400 h-full flex items-center justify-center">
          Nenhuma despesa registrada para este mês.
        </p>
      )}
    </div>
  );
}

// --- Card de Metas (ATUALIZADO com personalização) ---
function GoalsCard({ goals }) {
  
  // 👇 PERSONALIZAÇÃO: Procura a meta "Casamento"
  let featuredGoal = goals.find(g => 
    g.name.toLowerCase().includes('casamento')
  );
  // Se não achar, pega a primeira meta da lista
  if (!featuredGoal && goals.length > 0) {
    featuredGoal = goals[0];
  }

  if (!featuredGoal) {
    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-full">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">Suas Metas</h2>
        <p className="text-gray-400">Nenhuma meta criada. Vá para a página de <a href="/metas" className="text-yellow-500 hover:underline">Metas</a> para criar uma.</p>
      </div>
    );
  }

  // Cálculos
  const { name, current_amount, target_amount } = featuredGoal;
  const progressPercentage = target_amount > 0 
    ? (current_amount / target_amount) * 100 
    : 100;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-full">
      <h2 className="text-2xl font-bold mb-4 text-yellow-400">Meta em Destaque</h2>
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="font-semibold text-lg">{name}</span>
          <span className="text-sm font-medium text-yellow-400">{progressPercentage.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
          <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: `${progressPercentage.toFixed(1)}%` }}/>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-300">
          <span>R$ {current_amount.toLocaleString('pt-BR')}</span>
          <span>R$ {target_amount.toLocaleString('pt-BR')}</span>
        </div>
        <a href="/metas" className="text-yellow-500 hover:underline text-sm mt-4 inline-block">
          Ver todas as metas &rarr;
        </a>
      </div>
    </div>
  );
}


// --- Componente Principal da Página (Dashboard) ---
export default function Home() {
  const [goals, setGoals] = useState([]);
  
  // Estado unificado para o resumo do dashboard
  const [summary, setSummary] = useState({
    total_income: 0,
    total_expenses: 0,
    balance: 0,
    savings_rate: 0,
    category_summary: []
  });

  const [currentDate, setCurrentDate] = useState(new Date());
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Busca os dados quando a página é carregada ou a data/update muda
  useEffect(() => {
    const fetchData = async () => {
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      try {
        // 👇 REQUISIÇÃO ÚNICA PARA O RESUMO
        const summaryRes = await axios.get(
          `${API_URL}/dashboard/summary?year=${year}&month=${month}`
        );
        setSummary(summaryRes.data);

        // Requisição separada para as metas (que não são filtradas por mês)
        const goalsRes = await axios.get(`${API_URL}/goals/`);
        setGoals(goalsRes.data);

      } catch (error) {
        console.error("Erro ao buscar dados do dashboard:", error);
      }
    };

    fetchData();
  }, [currentDate, lastUpdate]); // Recarrega se a data mudar


  return (
    <div>
      <MonthSelector 
        currentDate={currentDate}
        onDateChange={setCurrentDate}
      />

      {/* 👇 Grid de Resumo com 4 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <SummaryCard 
          title="Total Entradas" 
          amount={summary.total_income} 
          colorClass="text-green-400"
        />
        <SummaryCard 
          title="Total Despesas" 
          amount={summary.total_expenses} 
          colorClass="text-red-400"
        />
        <SummaryCard 
          title="Balanço Atual" 
          amount={summary.balance} 
          colorClass={summary.balance >= 0 ? "text-blue-400" : "text-red-500"}
        />
        {/*  Taxa de Poupança */}
        <SummaryCard 
          title="Taxa de Poupança" 
          amount={summary.savings_rate} 
          colorClass={summary.savings_rate >= 0 ? "text-green-400" : "text-red-500"}
          isCurrency={false}
        />
      </div>

      {/* Layout em duas colunas: Gráfico e Metas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 👇 GRÁFICO (substitui a lista de despesas) */}
        <div className="lg:col-span-2">
          <ExpenseChart chartData={summary.category_summary} />
        </div>
        
        <div className="lg:col-span-1">
          <GoalsCard goals={goals} />
        </div>
      </div>
    </div>
  );
}