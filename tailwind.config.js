/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'expand-circle': 'expandCircle 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'rotate-sun-moon': 'rotateSunMoon 0.5s ease-in-out forwards',
      },
      keyframes: {
        expandCircle: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0.7',
          },
          '100%': {
            transform: 'scale(10)', // O círculo cobre a tela
            opacity: '0.3',
          },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        rotateSunMoon: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};