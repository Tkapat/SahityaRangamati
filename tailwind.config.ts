import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        bengali: ['var(--font-bengali)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        rangamati: {
          red: '#8B4513',
          orange: '#D2691E',
          brown: '#A0522D',
          cream: '#F5F5DC',
          gold: '#DAA520',
          dark: '#2F1B14',
          light: '#FDF5E6',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
