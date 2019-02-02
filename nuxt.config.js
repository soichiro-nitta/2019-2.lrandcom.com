import axios from 'axios'
import URL from './assets/data/url.json'

module.exports = {
  mode: 'universal',
  // mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
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
    color: '#008DDE',
    height: '2px'
  },

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
    '~/plugins/fontawesome.client',
    '~/plugins/axios'
    // '~/plugins/persistedstate.client'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-device-detect',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],

  /*
  ** style-resources
  */
  styleResources: {
    // your settings here
    sass: ['~/assets/scss/variable.scss', '~/assets/scss/mixins.scss']
  },

  /*
  ** Axios
  */
  axios: {
    credentials: true,
    baseURL: URL.WP_API
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
  },

  /*
  ** Generate configuration
  */
  generate: {
    routes: async () => {
      const instance = axios.create({
        baseURL: URL.WP_API,
        withCredentials: true,
        responseType: 'json',
        responseEncoding: 'utf8'
      })

      let articles = []
      const { headers } = await instance.get(`/?_embed&categories=8,11`)
      const total = headers['x-wp-total']
      let remainder = total

      if (total <= 100) {
        const { data } = await instance.get(
          `/?_embed&per_page=100&categories=8,11`
        )
        articles = data
      } else {
        for (; remainder >= 100; remainder -= 100) {
          const { data } = await instance.get(
            `/?_embed&per_page=100&offset=${total - remainder}&categories=8,11`
          )
          articles = articles.concat(data)
        }
        const { data } = await instance.get(
          `/?_embed&per_page=${remainder}&offset=${total -
            remainder}&categories=8,11`
        )
        articles = articles.concat(data)
      }

      return articles.map(article => {
        return `/${article.slug}`
      })
    }
  }
}
