/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideX: {
          "0%": { transform: 'translateX(-80%)' },
          "50%": { transform: 'translateX(80%)' },
          "100%": { transform: 'translateX(-80%)' }
        },
        fadeX: {
          from: { width: 0 },
          to: { width: '100%' }
        },
        slideY: {
          from: { transform: 'translateY(-100%)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 },
        }
      },
      animation: {
        slideX: 'slideX 5s ease-in-out infinite',
        slideY: 'slideY 1s ease-in-out',
        fadeX: 'fadeX 1s ease-in-out'
      },
      colors: {
        gray: '#3A3B3C',
        brown: '#964B00',
        white: '#ffffff',
        yellow: '#FFFF00',
        blue: '#0000FF',
        green: '#00FF00',
        orange: '#FFA500',
        black: '#000000',
        pink: '#FFC0CB',
        amber: '#FFBF00',
        grey: '#808080',
        gold: '#FFD700',
        silver: '#C0C0C0'
      },
      fontFamily: {
        georgia: ['georgia', 'sans-serif'],
        poppins: ['poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}