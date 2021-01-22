export default {
  target: 'server',
  head: {
    titleTemplate: '%s - Cryptograms',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Solve the encrypted movie quotes!',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: true,
  css: ['~assets/variables.scss'],
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/stylelint-module', '@nuxtjs/vuetify'],
  modules: ['@nuxtjs/pwa', '@nuxt/content', '@nuxtjs/style-resources'],
  styleResources: {
    scss: [`./assets/*.scss`],
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#1976D2',
          accent: '#424242',
          secondary: '#FF8F00',
          info: '#26A69A',
          warning: '#FFC107',
          error: '#DD2C00',
          success: '#00E676',
        },
      },
    },
  },
};
