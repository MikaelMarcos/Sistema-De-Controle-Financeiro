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
      const res = await axios.post(`${API_URL}/agent/chat`, null, {
        params: { message: userMsg }
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
    <div className="h-[calc(100vh-120px)] flex flex-col max-w-5xl mx-auto px-2 md:px-0">
        {/* Header Elegante */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md"
        >
            <div className="flex items-center gap-4">
                <div className="relative">
                    <div className="absolute inset-0 bg-fin-highlight blur-lg opacity-20 rounded-full"></div>
                    <div className="relative p-3 bg-gradient-to-br from-fin-highlight to-indigo-600 rounded-xl shadow-lg border border-white/10">
                        <Bot className="w-8 h-8 text-white" />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                        Gestor Financeiro <Sparkles className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    </h1>
                    <p className="text-gray-400 text-sm">IA conectada aos seus dados em tempo real.</p>
                </div>
            </div>
        </motion.div>

      {/* Área de Chat Modernizada */}
      <div className="flex-1 overflow-y-auto mb-6 p-4 space-y-6 pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent rounded-3xl bg-black/20 border border-white/5 relative">
        
        {/* Empty State */}
        {messages.length === 0 && !loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-32 h-32 bg-fin-highlight/5 rounded-full flex items-center justify-center mb-6 animate-pulse-slow">
                    <Bot className="w-16 h-16 text-fin-highlight/50" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Olá, {user?.email?.split('@')[0]}! 👋</h2>
                <p className="text-gray-400 max-w-md mb-8">
                    Sou seu gestor financeiro pessoal. Posso analisar seus gastos, sugerir cortes e ajudar a alcançar seus sonhos.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-2xl">
                    {suggestions.map((s, i) => (
                        <button 
                            key={i}
                            onClick={() => setInput(s.text)}
                            className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all text-sm text-gray-300 hover:text-white hover:scale-105"
                        >
                            <span className="text-fin-highlight">{s.icon}</span>
                            {s.text}
                        </button>
                    ))}
                </div>
            </div>
        )}

        <AnimatePresence initial={false}>
            {messages.map((msg, idx) => (
            <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
                {/*Avatar*/}
                <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-lg
                    ${msg.role === 'user' 
                        ? 'bg-gradient-to-br from-fin-highlight to-indigo-500 text-white' 
                        : 'bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 text-fin-highlight'}
                `}>
                {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
                </div>

                {/* Balão de Mensagem */}
                <div className={`
                    rounded-2xl p-5 max-w-[85%] md:max-w-[75%] shadow-md text-sm leading-relaxed
                    ${msg.role === 'user' 
                        ? 'bg-fin-highlight/10 text-white border border-fin-highlight/20 rounded-tr-sm' 
                        : 'bg-white/5 text-gray-200 border border-white/5 rounded-tl-sm backdrop-blur-md'}
                `}>
                <div className={`prose prose-invert prose-sm max-w-none break-words ${msg.role === 'user' ? 'text-white' : 'text-gray-200'}`}>
                    <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                            // Customização Premium para Markdown
                            p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                            strong: ({node, ...props}) => <span className="font-bold text-fin-highlight" {...props} />,
                            table: ({node, ...props}) => (
                                <div className="overflow-hidden my-4 rounded-xl border border-white/10 shadow-sm bg-black/20">
                                    <table className="w-full text-left border-collapse" {...props} />
                                </div>
                            ),
                            thead: ({node, ...props}) => <thead className="bg-white/5 text-xs uppercase tracking-wider text-gray-400" {...props} />,
                            th: ({node, ...props}) => <th className="p-3 font-semibold text-fin-highlight border-b border-white/10" {...props} />,
                            td: ({node, ...props}) => <td className="p-3 border-b border-white/5 text-gray-300" {...props} />,
                            ul: ({node, ...props}) => <ul className="list-disc list-inside my-2 space-y-1 text-gray-300" {...props} />,
                            li: ({node, ...props}) => <li className="pl-1" {...props} />,
                            a: ({node, ...props}) => <a className="text-fin-highlight hover:underline decoration-fin-highlight/50" {...props} />
                        }}
                    >
                        {msg.content}
                    </ReactMarkdown>
                </div>
                <p className="text-[10px] opacity-40 mt-2 text-right font-mono">
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
                </div>
            </motion.div>
            ))}
        </AnimatePresence>
        
        {loading && (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 border border-white/10 animate-pulse">
                    <Bot size={18} className="text-fin-highlight" />
                 </div>
                 <div className="bg-white/5 p-4 rounded-2xl rounded-tl-sm border border-white/5 flex items-center gap-3">
                    <Loader2 className="w-4 h-4 animate-spin text-fin-highlight" />
                    <span className="text-sm text-gray-400 typing-effect">Analisando seus dados...</span>
                 </div>
             </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Flutuante */}
      <form onSubmit={sendMessage} className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-fin-highlight to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
        <div className="relative flex items-center bg-fin-dark border border-white/10 rounded-2xl p-1 shadow-2xl">
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem para o Gestor..."
            className="flex-1 bg-transparent border-none text-white placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-0 text-base"
            />
            <button
            type="submit"
            disabled={!input.trim() || loading}
            className="p-3 bg-fin-highlight hover:bg-fin-highlight/90 text-fin-dark rounded-xl disabled:opacity-50 disabled:grayscale transition-all transform active:scale-95"
            >
            <Send size={20} className="ml-0.5" />
            </button>
        </div>
      </form>
    </div>
  );
}
