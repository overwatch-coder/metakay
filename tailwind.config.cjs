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
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' }
        },
        slideY: {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(100%)' }
        }
      },
      animation: {
        slideX: 'slideX 1s ease-in-out',
        slideY: 'slideY 1s ease-in-out'
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