/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Sua Paleta Personalizada
        fin: {
          dark: '#024059',    // Azul Profundo (Fundo geral)
          card: '#025E73',    // Azul Petróleo (Cards e menus)
          gold: '#F2AB6D',    // Dourado/Laranja Claro (Destaques principais, Receitas)
          terra: '#D9896C',   // Terracota (Detalhes secundários)
          red: '#8C5346',     // Vermelho Queimado (Despesas, botões de perigo)
          highlight: '#FFD700' // Ouro Puro (Metas, ícones especiais)
        }
      },
      // Adicionando um degradê bonito
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'fin-gradient': 'linear-gradient(to bottom right, #024059, #012a3b)',
      }
    },
  },
  plugins: [],
};

export default function(config){}