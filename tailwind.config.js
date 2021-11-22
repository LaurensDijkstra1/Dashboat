module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'

  // Tailwind Theme Configuration: https://tailwindcss.com/docs/theme
  theme: {
    extend: {},
  },

  // Tailwind Variants Configuration: https://tailwindcss.com/docs/configuring-variants
  variants: {
    extend: {},
  },

  plugins: [
    // Tailwind Forms: https://github.com/tailwindlabs/tailwindcss-forms
    require('@tailwindcss/forms'),
  ],
}
