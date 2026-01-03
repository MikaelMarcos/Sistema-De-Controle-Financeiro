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
          dark: "#0F172A",    // Slate 900 (Fundo mais profundo)
          card: "#1E293B",    // Slate 800 (Cards)
          gold: "#F59E0B",    // Amber 500 (Ouro vibrante)
          highlight: "#38BDF8", // Sky 400 (Destaques cian)
          terra: "#F43F5E",   // Rose 500 (Secundário)
          red: "#EF4444",     // Red 500
          green: "#10B981"    // Emerald 500
        },
      },
      backgroundImage: {
        "fin-gradient": "linear-gradient(to bottom right, #0F172A, #1E293B)",
        "glass-gradient": "linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      boxShadow: {
        gold: "0 0 20px rgba(245, 158, 11, 0.2)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
};

export default config;
