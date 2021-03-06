const plugin = require('tailwindcss/plugin')

module.exports = {
// this appears to be being ignored
  //   plugins: [
  //   plugin(function({ addBase, theme }) {
  //     addBase({
  //       'h1': { fontSize: theme('fontSize.2xl') },
  //       'h2': { fontSize: theme('fontSize.xl') },
  //       'h3': { fontSize: theme('fontSize.lg') },
  //     })
  //   })
  // ],
  purge: {
    content: ['./src/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}