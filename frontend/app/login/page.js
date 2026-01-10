'use client';
import { useState } from 'react';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { User, Users, ArrowLeft } from 'lucide-react';

function LoginForm() {
  const [selectedProfile, setSelectedProfile] = useState(null); // 'mika' or 'guest'
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
    setError('');
    setPassword('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    let email = '';
    if (selectedProfile === 'mika') email = 'mika@rafa.com';
    if (selectedProfile === 'guest') email = 'convidado@sistema.com';

    try {
      await login(email, password, rememberMe);
    } catch (err) {
      console.error("Erro no login:", err);
      if (err.response) {
        setError(err.response.data.detail || 'Senha incorreta');
      } else {
        setError('Erro de conexão. Tente novamente.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-fin-dark p-4">
      <div className="w-full max-w-4xl text-center">
        
        {/* VIEW 1: SELEÇÃO DE PERFIL */}
        {!selectedProfile && (
          <div className="animate-fade-in-down">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">
              Quem está acessando?
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              
              {/* PERFIL MIKA E RAFA */}
              <div 
                onClick={() => handleProfileSelect('mika')}
                className="group cursor-pointer flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-md bg-gradient-to-br from-fin-highlight to-fin-gold flex items-center justify-center shadow-lg group-hover:shadow-fin-gold/40 group-hover:ring-4 ring-white transition-all overflow-hidden relative">
                   {/* Avatar Placeholder */}
                   <Users size={64} className="text-fin-dark" />
                </div>
                <span className="text-xl text-gray-400 group-hover:text-white transition-colors">
                  Mika e Rafa
                </span>
              </div>

              {/* PERFIL CONVIDADO */}
              <div 
                onClick={() => handleProfileSelect('guest')}
                className="group cursor-pointer flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-md bg-gray-700 flex items-center justify-center shadow-lg group-hover:shadow-white/20 group-hover:ring-4 ring-white transition-all">
                  <User size={64} className="text-gray-400" />
                </div>
                <span className="text-xl text-gray-400 group-hover:text-white transition-colors">
                  Convidado
                </span>
              </div>

            </div>
          </div>
        )}

        {/* VIEW 2: INPUT DE SENHA */}
        {selectedProfile && (
          <div className="animate-fade-in-up max-w-md mx-auto bg-fin-dark/50 p-8 rounded-2xl backdrop-blur-sm border border-white/5">
            <div className="flex flex-col items-center mb-8">
              <div className={`w-20 h-20 rounded-md flex items-center justify-center mb-4 shadow-lg ${selectedProfile === 'mika' ? 'bg-gradient-to-br from-fin-highlight to-fin-gold' : 'bg-gray-700'}`}>
                {selectedProfile === 'mika' ? <Users size={32} className="text-fin-dark"/> : <User size={32} className="text-gray-400"/>}
              </div>
              <h2 className="text-xl text-gray-300">
                Olá, <span className="font-bold text-white">{selectedProfile === 'mika' ? 'Mika e Rafa' : 'Convidado'}</span>
              </h2>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="relative">
                <input 
                  type="password" 
                  autoFocus
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 bg-[#0a192f] rounded-lg border border-white/10 focus:border-white/40 focus:ring-0 transition-all text-white placeholder-gray-600 outline-none text-center tracking-widest text-lg"
                  placeholder="Senha"
                />
              </div>

              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-600 outline-none focus:ring-0 accent-fin-gold cursor-pointer"
                />
                <label htmlFor="rememberMe" className="text-gray-400 text-sm cursor-pointer select-none hover:text-white transition-colors">
                  Manter conectado
                </label>
              </div>

              {error && (
                <div className="text-red-400 text-sm animate-pulse">
                  {error}
                </div>
              )}

              <div className="flex gap-4">
                <button 
                  type="button"
                  onClick={() => setSelectedProfile(null)}
                  className="flex-1 py-3 border border-gray-600 text-gray-400 hover:border-white hover:text-white rounded-lg transition-colors font-semibold uppercase tracking-wide text-sm"
                >
                  Voltar
                </button>
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="flex-1 py-3 bg-white text-black hover:bg-red-600 hover:text-white rounded-lg transition-all font-bold uppercase tracking-wide text-sm disabled:opacity-50"
                >
                  {isLoading ? 'Entrando...' : 'Acessar Sistema'}
                </button>
              </div>
            </form>
          </div>
        )}

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
