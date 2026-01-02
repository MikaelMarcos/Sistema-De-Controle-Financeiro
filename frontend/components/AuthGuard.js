'use client';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// Este componente protege as páginas
export default function AuthGuard({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Se estiver carregando ou se o usuário não estiver logado,
  // mostra uma tela de loading para evitar "piscar" a tela de login
  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-fin-dark">
        <div className="w-16 h-16 border-4 border-fin-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Se o usuário estiver logado, mostra a página
  return children;
}