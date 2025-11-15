'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter, usePathname } from 'next/navigation';

const API_URL = 'http://localhost:8000';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Interceptor do Axios: injeta o token em CADA requisição
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Verifica o token no carregamento da página
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get(`${API_URL}/auth/me`)
        .then(response => {
          setUser(response.data);
        })
        .catch(() => {
          // Token inválido ou expirado
          localStorage.removeItem('token');
          setUser(null);
          if (pathname !== '/login') {
            router.push('/login');
          }
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
      if (pathname !== '/login') {
        router.push('/login');
      }
    }
  }, [pathname, router]);

  const login = async (email, password) => {
    const formData = new URLSearchParams();
    formData.append('username', email);
    formData.append('password', password);

    const response = await axios.post(`${API_URL}/auth/token`, formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    
    const { access_token } = response.data;
    localStorage.setItem('token', access_token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    
    const userResponse = await axios.get(`${API_URL}/auth/me`);
    setUser(userResponse.data);
    
    router.push('/'); // Redireciona para o Dashboard
  };

  // 👇 CORREÇÃO AQUI: 'register' agora só registra e não faz login
  const register = async (email, password) => {
    await axios.post(`${API_URL}/auth/register`, { email, password });
    // Não faz login, apenas retorna sucesso. O usuário fará o login em seguida.
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);