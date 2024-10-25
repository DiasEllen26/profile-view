module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Certifique-se de que o Tailwind está observando os arquivos
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
