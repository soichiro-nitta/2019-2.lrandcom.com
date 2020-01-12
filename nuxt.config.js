module.exports = {
  mode: 'universal',
  dev: process.env.NODE_ENV !== 'production',

  /*
  ** Headers of the page
  */
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c:500,700'
      }
    ],
    script: [
      {
        src:
          'https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver'
      },
      { src: 'https://apis.google.com/js/platform.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#777DF5' },

  /*
  ** Global CSS
  */
  css: ['~/assets/scss/default.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/mixin.client',
    '~/plugins/mixin',
    '~/plugins/fontawesome'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-device-detect',
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '~/modules/generator',
    '@nuxtjs/google-analytics'
  ],

  'google-analytics': {
    id: 'UA-47027645-1'
  },

  /*
  ** style-resources
  */
  styleResources: {
    // your settings here
    sass: ['~/assets/scss/variable.scss', '~/assets/scss/mixins.scss']
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Router
  */
  router: {
    linkPrefetchedClass: 'nuxt-link-prefetched'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
