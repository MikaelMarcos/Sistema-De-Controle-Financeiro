/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fin: {
          dark: "#024059",    // Azul Profundo (Fundo geral)
          card: "#025E73",    // Azul Petróleo (Cards e menus)
          gold: "#F2AB6D",    // Dourado/Laranja Claro (Destaques principais)
          terra: "#D9896C",   // Terracota (Secundário)
          red: "#8C5346",     // Vermelho queimado (Despesas, perigo)
          highlight: "#FFD700" // Ouro Puro (Metas, ícones)
        },
      },
      backgroundImage: {
        "fin-gradient": "linear-gradient(to bottom right, #024059, #012a3b)",
      },
      boxShadow: {
        gold: "0 0 10px rgba(242, 171, 109, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
