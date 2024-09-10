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
        'bg-blog': "url('./src/assets/bg-blog.jpg')",
        'bg-sajek': "url('./src/assets/sajekvallyfog.jpg')",
        'bg-news-river': "url('./src/assets/bg-news-river.jpg')",
        'bg-destination': "url('./src/assets/bg-destination.jpg')",
        'bg-old-city': "url('./src/assets/bg-old-city.jpg')",
      }
    },
  },
  plugins: [],
}
