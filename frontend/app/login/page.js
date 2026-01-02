'use client';
import { useState } from 'react';
import { AuthProvider, useAuth } from '@/context/AuthContext';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Estado local de loading para animação
  const { login, register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true); // Ativa animação

    try {
      if (isRegistering) {
        await register(email, password);
        setSuccess("Conta criada com sucesso! Por favor, faça o login.");
        setIsRegistering(false);
      } else {
        await login(email, password);
      }
    } catch (err) {
      console.error("Erro no login/registro:", err);
      if (err.response) {
        // O servidor respondeu com um erro (4xx, 5xx)
        if (err.response.data && err.response.data.detail) {
          setError(err.response.data.detail);
        } else {
          setError(`Erro do servidor: ${err.response.status}`);
        }
      } else if (err.request) {
        // A requisição foi feita mas não houve resposta (Erro de rede)
        setError('Erro de conexão: Não foi possível contatar o servidor. Verifique sua internet ou a URL da API.');
      } else {
        // Outro erro
        setError(`Erro: ${err.message}`);
      }
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-fin-dark via-[#051e2b] to-fin-dark p-4">
      {/* Card com animação de entrada suave (fade-in e slide-up) */}
      <div className="w-full max-w-md bg-fin-dark/60 p-8 rounded-3xl shadow-2xl border border-white/5 backdrop-blur-xl transition-all duration-500 transform hover:shadow-fin-gold/10">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
            Fin<span className="text-fin-gold">anceiro</span>
          </h1>
          <p className="text-gray-400 text-sm">
            {isRegistering ? "Crie sua conta para começar" : "Bem-vindo de volta!"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-medium text-fin-gold uppercase tracking-wider ml-1">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 bg-[#0a192f]/80 rounded-xl border border-white/10 focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/20 transition-all text-white placeholder-gray-600 outline-none"
              placeholder="seu@email.com"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-fin-gold uppercase tracking-wider ml-1">Senha</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-4 bg-[#0a192f]/80 rounded-xl border border-white/10 focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/20 transition-all text-white placeholder-gray-600 outline-none"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center animate-pulse">
              {error}
            </div>
          )}

          {success && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm text-center">
              {success}
            </div>
          )}

          {/* 👇 BOTÃO COM EFEITOS DE CLIQUE 👇 */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-fin-highlight to-fin-gold hover:from-yellow-400 hover:to-orange-400 text-fin-dark font-bold py-4 px-4 rounded-xl shadow-lg shadow-fin-gold/10 
            transform transition-all duration-200 
            hover:scale-[1.02] hover:shadow-fin-gold/30 
            active:scale-95 active:shadow-none 
            disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-fin-dark border-t-transparent rounded-full animate-spin"></div>
                <span>Processando...</span>
              </div>
            ) : (
              isRegistering ? 'Criar Conta' : 'Entrar no Sistema'
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            {isRegistering ? "Já tem acesso?" : "Ainda não tem conta?"}
            <button 
              onClick={() => {
                setIsRegistering(!isRegistering);
                setError('');
                setSuccess('');
              }}
              className="font-bold text-fin-gold hover:text-white hover:underline ml-2 transition-colors"
            >
              {isRegistering ? 'Fazer Login' : 'Criar agora'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  );
}