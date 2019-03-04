import axios from 'axios'
import URL from '../assets/data/url.json'

module.exports = function apiModule(moduleOptions) {
  this.nuxt.hook('build:before', async ({ app }) => {
    const ax = axios.create({
      baseURL: URL.WP_API,
      withCredentials: true,
      responseType: 'json',
      responseEncoding: 'utf8'
    })
    const { headers } = await ax.get(`/?_embed&categories=8,11`)
    const total = headers['x-wp-total']
    let remainder = total
    let raw = []
    if (total <= 100) {
      const { data } = await ax.get(`/?_embed&per_page=100&categories=8,11`)
      raw = data
    } else {
      for (; remainder >= 100; remainder -= 100) {
        const { data } = await ax.get(
          `/?_embed&per_page=100&offset=${total - remainder}&categories=8,11`
        )
        raw = raw.concat(data)
      }
      const { data } = await ax.get(
        `/?_embed&per_page=${remainder}&offset=${total -
          remainder}&categories=8,11`
      )
      raw = raw.concat(data)
    }
    const records = []
    for (let i = 0; i < raw.length; i++) {
      const date = new Date(raw[i].date)
      records[i] = {
        index: i + 1,
        title: raw[i].title.rendered,
        src: raw[i]._embedded['wp:featuredmedia'][0].media_details.sizes,
        slug: raw[i].slug,
        cat: raw[i].categories,
        yy: date.getFullYear(date),
        mm: date.getMonth(date) + 1,
        dd: date.getDate()
      }
    }

    // JSON
    this.options.build.plugins.push({
      apply(compiler) {
        compiler.plugin('emit', (compilation, cb) => {
          const articles = []

          records.forEach(record => {
            compilation.assets[`articles/${record.slug}.json`] = {
              source: () => JSON.stringify(record),
              size: () => {}
            }
            articles.push(record)
          })

          compilation.assets[`articles/master.json`] = {
            source: () => JSON.stringify(articles),
            size: () => {}
          }
          cb()
        })
      }
    })

    // prefetch
    const url = this.options.dev ? '' : URL.SITE
    this.options.head.link = [
      ...this.options.head.link,
      ...records.map(record => ({
        rel: 'prefetch',
        href: `${url}/_nuxt/articles/${record.slug}.json`
      })),
      {
        rel: 'prefetch',
        href: `${url}/_nuxt/articles/master.json`
      }
    ]

    if (this.options.dev) return

    // routes
    this.options.generate.routes = records.map(record => `/${record.slug}`)
  })
}
