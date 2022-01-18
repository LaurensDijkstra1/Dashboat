// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class',

  // Tailwind Theme Configuration: https://tailwindcss.com/docs/theme
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.blue,

      // Custom Colors
      gray: {
        100: '#EEEEEE',
        200: '#CCCCCC',
        300: '#AAAAAA',
        400: '#999999',
        500: '#444444',
        600: '#333333',
        700: '#282828',
        800: '#1C1C1C',
        900: '#161616',
      }
    }
  },

  // Tailwind Variants Configuration: https://tailwindcss.com/docs/configuring-variants
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd'
    ],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active'],
  },

  plugins: [
    // Tailwind Forms: https://github.com/tailwindlabs/tailwindcss-forms
    require('@tailwindcss/forms'),
  ],
}
