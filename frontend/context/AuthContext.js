'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const API_URL = 'http://localhost:8000'; // Sua URL do backend

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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
          // Token inválido
          localStorage.removeItem('token');
          router.push('/login');
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
      router.push('/login');
    }
  }, []);

  const login = async (email, password) => {
    // O backend de token espera 'username' e 'password'
    const formData = new URLSearchParams();
    formData.append('username', email);
    formData.append('password', password);

    const response = await axios.post(`${API_URL}/auth/token`, formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    
    const { access_token } = response.data;
    localStorage.setItem('token', access_token);
    
    // Define o header padrão para futuras requisições
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    
    // Busca os dados do usuário
    const userResponse = await axios.get(`${API_URL}/auth/me`);
    setUser(userResponse.data);
    
    router.push('/'); // Redireciona para o Dashboard
  };

  const register = async (email, password) => {
    await axios.post(`${API_URL}/auth/register`, { email, password });
    // Após registrar, força o login
    await login(email, password);
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

// Hook customizado para usar o contexto
export const useAuth = () => useContext(AuthContext);