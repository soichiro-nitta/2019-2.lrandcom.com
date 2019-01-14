export const state = () => ({
  articles: [],
  page: 1,
  totalPages: 0
})

export const getters = {
  articles: state => state.articles,
  page: state => state.page,
  totalPages: state => state.totalPages
}

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  },
  setTotalPages(state, totalPages) {
    state.totalPages = totalPages
  },
  increment(state) {
    if (state.page >= state.totalPages) return
    state.page++
  },
  decrement(state) {
    if (state.page <= 1) return
    state.page--
  }
}

export const actions = {
  async fetchArticles({ state, commit }, payload) {
    try {
      const perPage = 9
      const offset = (state.page - 1) * perPage
      const categories = payload.categories

      const { headers, data } = await this.$axios.get(
        `/?_embed&per_page=${perPage}&offset=${offset}&categories=${categories}`
      )
      const total = Number(headers['x-wp-total'])
      const totalPages = Number(headers['x-wp-totalpages'])

      let articles = []
      for (let i = 0; i < data.length; i++) {
        const date = new Date(data[i]['date'])
        articles[i] = {
          index: total - (state.page - 1) * perPage - i,
          title: data[i]['title']['rendered'],
          src:
            'large' in
            data[i]['_embedded']['wp:featuredmedia'][0]['media_details'][
              'sizes'
            ]
              ? data[i]['_embedded']['wp:featuredmedia'][0]['media_details'][
                  'sizes'
                ]['large']['source_url']
              : data[i]['_embedded']['wp:featuredmedia'][0]['media_details'][
                  'sizes'
                ]['full']['source_url'],
          slug: data[i]['slug'],
          categories: data[i]['categories'],
          yy: date.getFullYear(date),
          mm: date.getMonth(date) + 1,
          dd: date.getDate()
        }
      }
      commit('setArticles', articles)
      commit('setTotalPages', totalPages)
    } catch (err) {
      console.log(err)
    }
  }
}
