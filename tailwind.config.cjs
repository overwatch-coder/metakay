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
        slideY: {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(100%)' }
        }
      },
      animation: {
        slideX: 'slideX 5s ease-in-out infinite',
        slideY: 'slideY 1s ease-in-out infinite'
      },
      colors: {
        gray: '#3A3B3C'
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