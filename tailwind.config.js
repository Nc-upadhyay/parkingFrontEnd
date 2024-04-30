/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  purge:[
    './src/**/*.{html,css,ts}'
  ],
  content: [
    "./src/**/*.{html,css}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

