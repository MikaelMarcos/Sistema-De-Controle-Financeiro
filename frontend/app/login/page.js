'use client';
import { useState } from 'react';
import { AuthProvider, useAuth } from '@/context/AuthContext';

// O formulário de login real
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');
  const { login, register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isRegistering) {
        await register(email, password);
      } else {
        await login(email, password);
      }
    } catch (err) {
      setError(err.response?.data?.detail || 'Email ou senha inválidos.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-fin-dark via-fin-card to-fin-dark p-4">
      <div className="w-full max-w-md bg-fin-dark/80 p-8 rounded-2xl shadow-2xl border border-fin-gold/20 backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Fin<span className="text-fin-gold">anceiro</span>
        </h1>
        <p className="text-center text-gray-400 mb-8">
          {isRegistering ? "Crie sua conta para começar" : "Bem-vindo de volta!"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Senha</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"
            />
          </div>

          {error && (
            <p className="text-sm text-fin-red bg-fin-red/10 p-3 rounded-lg">{error}</p>
          )}

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-fin-highlight to-fin-gold hover:opacity-90 text-fin-dark font-bold py-3 px-4 rounded-xl transition-all shadow-lg"
          >
            {isRegistering ? 'Registrar e Entrar' : 'Entrar'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          {isRegistering ? "Já tem uma conta?" : "Não tem uma conta?"}
          <button 
            onClick={() => setIsRegistering(!isRegistering)}
            className="font-medium text-fin-gold hover:underline ml-1"
          >
            {isRegistering ? 'Faça o login' : 'Registre-se'}
          </button>
        </p>
      </div>
    </div>
  );
}

// O wrapper da página de login
export default function LoginPage() {
  return (
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  );
}