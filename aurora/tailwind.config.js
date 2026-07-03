/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        neon: {
          blue: '#00d4ff',
          pink: '#ff2d95',
          purple: '#b026ff',
          cyan: '#00ffd4',
        },
        dark: {
          bg: '#0b0b1a',
          card: '#111128',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(0, 212, 255, 0.5)' },
          '100%': { textShadow: '0 0 30px rgba(0, 212, 255, 0.9), 0 0 60px rgba(255, 45, 149, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}