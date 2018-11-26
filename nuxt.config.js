import URL from './assets/data/url.json'

module.exports = {
  mode: 'universal',
  // mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | リーディング＆カンパニー株式会社',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,shrink-to-fit=no'
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'keywords', content: 'リーディング＆カンパニー株式会社,夏目力' },
      { property: 'fb:app_id', content: '1475229082562793' },
      { property: 'og:description', content: '' },
      { property: 'og:image', content: '/ogp.png' },
      { property: 'og:site_name', content: 'リーディング＆カンパニー株式会社' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@4chikara' },
      { property: 'twitter:creator', content: '@soichiro_nitta' },
      { property: 'twitter:description', content: '' },
      { property: 'twitter:image', content: '/ogp.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#333',
    height: '5px'
  },

  /*
  ** Global CSS
  */
  css: ['~/assets/scss/default.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/mixin', '~/plugins/fontawesome', '~/plugins/axios'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-device-detect',
    '@nuxtjs/axios',
    [
      'nuxt-sass-resources-loader',
      ['~/assets/scss/variable.scss', '~/assets/scss/mixins.scss']
    ]
  ],

  /*
  ** Axios
  */
  axios: {
    credentials: true,
    baseURL: URL.WP_API
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
  },

  /*
  ** Generate configuration
  */
  generate: {
    minify: {
      collapseWhitespace: false
    }
  }
}
