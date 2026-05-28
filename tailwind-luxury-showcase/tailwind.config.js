/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        gold: {
          50: '#FBF6E3',
          100: '#F5E7B2',
          300: '#E4C259',
          500: '#D4AF37',
          700: '#B8860B',
          900: '#7A4C00',
        },
        midnight: '#0A040F',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 4s infinite linear',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { textShadow: '0 0 8px rgba(212, 175, 55, 0.3)' },
          '50%': { textShadow: '0 0 20px rgba(212, 175, 55, 0.7)' },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
}