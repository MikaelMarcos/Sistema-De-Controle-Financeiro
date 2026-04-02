'use client';

import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Send, Bot, User, Loader2, Sparkles, TrendingUp, Target, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export default function AdvisorPage() {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchHistory = async () => {
    try {
      const res = await axios.get(`${API_URL}/agent/history`);
      setMessages(res.data);
    } catch (error) {
      console.error("Erro ao carregar histórico:", error);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setLoading(true);

    const tempUserMsg = { role: 'user', content: userMsg, timestamp: new Date().toISOString() };
    setMessages(prev => [...prev, tempUserMsg]);

    try {
      const res = await axios.post(`${API_URL}/agent/chat`, {
        message: userMsg
      });
      
      const aiMsg = res.data;
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    } finally {
      setLoading(false);
    }
  };

  const suggestions = [
    { icon: <TrendingUp size={16} />, text: "Analise meus gastos do mês" },
    { icon: <Target size={16} />, text: "Como economizar para minha meta?" },
    { icon: <DollarSign size={16} />, text: "Qual meu saldo atual?" },
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] max-w-5xl mx-auto">
        {/* Header Simplificado */}
        <div className="flex-none p-4 md:mb-4 bg-fin-dark border-b border-white/5 md:border-none md:bg-transparent">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-fin-highlight rounded-lg">
                    <Bot className="w-6 h-6 text-fin-dark" />
                </div>
                <div>
                    <h1 className="text-lg md:text-2xl font-bold text-white flex items-center gap-2">
                        Gestor Financeiro
                    </h1>
                    <p className="text-gray-400 text-xs">Assistente Pessoal</p>
                </div>
            </div>
        </div>

      {/* Área de Chat Estável */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/20 md:rounded-2xl border-white/5 md:border relative scroll-smooth">
        
        {/* Empty State Simplificado */}
        {messages.length === 0 && !loading && (
            <div className="flex flex-col items-center justify-center h-full text-center p-4">
                <Bot className="w-16 h-16 text-gray-600 mb-4" />
                <h2 className="text-xl font-bold text-white mb-2">Como posso ajudar?</h2>
                <p className="text-gray-400 text-sm mb-6 max-w-xs mx-auto">
                    Analiso seus gastos e tiro dúvidas sobre suas finanças.
                </p>
                <div className="grid grid-cols-1 gap-2 w-full max-w-sm">
                    {suggestions.map((s, i) => (
                        <button 
                            key={i}
                            onClick={() => setInput(s.text)}
                            className="text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-gray-300 border border-white/5"
                        >
                            {s.text}
                        </button>
                    ))}
                </div>
            </div>
        )}

        {messages.map((msg, idx) => (
            <div
                key={idx}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
                {/* Avatar Simples */}
                <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center shrink-0
                    ${msg.role === 'user' ? 'bg-fin-highlight text-fin-dark' : 'bg-gray-700 text-gray-300'}
                `}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                </div>

                {/* Balão Sólido (Sem Blur) */}
                <div className={`
                    rounded-2xl p-3 md:p-4 max-w-[85%] text-sm md:text-base shadow-sm
                    ${msg.role === 'user' 
                        ? 'bg-fin-highlight text-fin-dark rounded-tr-none' 
                        : 'bg-gray-800 text-gray-100 border border-gray-700 rounded-tl-none'}
                `}>
                    <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        className={`prose prose-sm max-w-none break-words ${msg.role === 'user' ? 'text-fin-dark' : 'prose-invert'}`}
                        components={{
                            table: ({node, ...props}) => <div className="overflow-x-auto my-2 border border-white/10 rounded"><table className="w-full text-left" {...props} /></div>,
                            th: ({node, ...props}) => <th className="p-2 bg-black/20 font-semibold" {...props} />,
                            td: ({node, ...props}) => <td className="p-2 border-t border-white/10" {...props} />,
                        }}
                    >
                        {msg.content}
                    </ReactMarkdown>
                    <p className={`text-[10px] mt-1 text-right ${msg.role === 'user' ? 'text-fin-dark/60' : 'text-gray-500'}`}>
                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                </div>
            </div>
        ))}
        
        {loading && (
             <div className="flex gap-3 animate-pulse">
                 <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                    <Bot size={14} className="text-gray-400" />
                 </div>
                 <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none border border-gray-700">
                    <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                 </div>
             </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Fixo no Rodapé */}
      <div className="flex-none p-3 md:p-0 mt-2">
        <form onSubmit={sendMessage} className="relative flex items-center bg-fin-dark border border-white/20 rounded-xl shadow-lg">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 bg-transparent border-none text-white placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-0 text-base"
            />
            <button
                type="submit"
                disabled={!input.trim() || loading}
                className="p-3 text-fin-highlight hover:text-white disabled:opacity-50 transition-colors"
            >
                <Send size={20} />
            </button>
        </form>
      </div>
    </div>
  );
}
