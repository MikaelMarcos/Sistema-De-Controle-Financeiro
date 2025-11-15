'use client';
import { useState } from 'react';
import { AuthProvider, useAuth } from '@/context/AuthContext';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // Para mensagem de sucesso
  const { login, register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (isRegistering) {
        // --- ETAPA DE REGISTRO ---
        await register(email, password);
        setSuccess("Conta criada com sucesso! Por favor, faça o login.");
        setIsRegistering(false); // Volta para a tela de login
      } else {
        // --- ETAPA DE LOGIN ---
        await login(email, password);
        // O login já redireciona se for bem-sucedido
      }
    } catch (err) {
      // Pega a mensagem de erro específica do backend
      if (err.response && err.response.data && err.response.data.detail) {
        setError(err.response.data.detail);
      } else {
        setError('Ocorreu um erro. Tente novamente.');
      }
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

          {/* Mensagem de Erro (Ex: "Usuário já existe") */}
          {error && (
            <p className="text-sm text-fin-red bg-fin-red/10 p-3 rounded-lg">{error}</p>
          )}

          {/* Mensagem de Sucesso (Ex: "Conta criada!") */}
          {success && (
            <p className="text-sm text-green-400 bg-green-500/10 p-3 rounded-lg">{success}</p>
          )}

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-fin-highlight to-fin-gold hover:opacity-90 text-fin-dark font-bold py-3 px-4 rounded-xl transition-all shadow-lg"
          >
            {isRegistering ? 'Registrar' : 'Entrar'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          {isRegistering ? "Já tem uma conta?" : "Não tem uma conta?"}
          <button 
            onClick={() => {
              setIsRegistering(!isRegistering);
              setError('');
              setSuccess('');
            }}
            className="font-medium text-fin-gold hover:underline ml-1"
          >
            {isRegistering ? 'Faça o login' : 'Registre-se'}
          </button>
        </p>
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