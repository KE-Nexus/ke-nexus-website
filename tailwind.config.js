/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f4f6fb',
          100: '#e6eaf3',
          200: '#c7d0e3',
          300: '#9dabc8',
          400: '#6c7ea6',
          500: '#4c5d85',
          600: '#38466a',
          700: '#283253',
          800: '#141c34',
          900: '#0b1122',
          950: '#060a16',
        },
        gold: {
          50: '#fdf8ec',
          100: '#f9ecc9',
          200: '#f2d68d',
          300: '#eabd57',
          400: '#e2a730',
          500: '#cd8c1f',
          600: '#a86c18',
          700: '#824f17',
          800: '#6a4019',
          900: '#59371a',
        },
        signal: {
          50: '#eafbf8',
          100: '#cdf3ec',
          200: '#9de6da',
          300: '#66d2c1',
          400: '#3bb6a6',
          500: '#279a8c',
          600: '#1d7b71',
          700: '#1c635c',
          800: '#1a4f4b',
          900: '#18413e',
        },
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(11,17,34,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,17,34,0.05) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(230,234,243,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(230,234,243,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,17,34,0.06), 0 8px 24px -8px rgba(11,17,34,0.12)',
        'card-dark': '0 1px 2px rgba(0,0,0,0.3), 0 12px 32px -8px rgba(0,0,0,0.5)',
        glow: '0 0 0 1px rgba(226,167,48,0.15), 0 0 40px -8px rgba(226,167,48,0.35)',
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-slower': 'spin 90s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 1.5s infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        marquee: 'marquee 32s linear infinite',
        gradient: 'gradient-pan 6s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
}
