module.exports = {
  content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
  theme: {
    fontFamily: {
      serif: ['Roboto Slab'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
