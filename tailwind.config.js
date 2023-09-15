/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004e98',
        secondary: '#ff6b6b'
      },

      fontFamily: {
        primary: ['Quicksand'],
        work: ['Work Sans']
      }
    },
  },
  plugins: [],
}