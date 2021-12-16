export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dashboat',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // VueTailwind: https://www.vue-tailwind.com
    '~/plugins/vue-tailwind',
    '~/plugins/fontawesome.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org
    '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/firebase',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // TailwindCSS Configuration: https://tailwindcss.com/docs/configuration
  tailwindcss: {
    jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true,
  },

  // Nuxt Color Mode Configurations: https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: '',
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyArjNqBqteKf1_SKZjGITuKwGWoooFDIGo',
      authDomain: 'dashboat-794b9.firebaseapp.com',
      projectId: 'dashboat-794b9',
      storageBucket: 'dashboat-794b9.appspot.com',
      messagingSenderId: '733127597435',
      appId: '1:733127597435:web:103c4fa53d67d2bb3171de',
      measurementId: 'G-6HZTZYMP01'
    },
    services: {
      auth: true // Just as example. Can be any other service.
    }
  }
}
