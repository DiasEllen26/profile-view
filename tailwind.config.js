module.exports = {
  content: [
    "./src/**/*.{html,ts,js}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark"],
    
  },
}
