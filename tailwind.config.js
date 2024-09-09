/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: '"Montserrat", system-ui',
        bebasNeue: '"Bebas Neue", sans-serif'

      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/bg-cover.png')",
      }
    },
  },
  plugins: [],
}
