/** @type {import('tailwindcss').Config} */
import fondo from ''
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo': 'linear-gradient(0deg, rgba(0,0,0,1), rgba(0,8,0,0.5)) ,url(./src/imgs/fondo-gaming.jpg)'
      }
    },
    fontFamily: {
      'anton': 'Anton, sans-serif'
    },
  },
  plugins: [],
}