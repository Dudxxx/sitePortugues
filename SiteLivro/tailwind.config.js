/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        branco: '#ffffff',
        preto: '#000000',
        azul1: '#6BAB90',
        azul2: '#61A49B',
        azul3: '#51AE94',
      }
    },
  },
  plugins: [],
};
