export const state = () => ({
  count: 0,
  perPage: 10,
  articles: [],
  end: false,
  total: 0
})

export const getters = {
  articles: state => state.articles,
  end: state => state.end,
  total: state => state.total
}

export const mutations = {
  setArticles(state, articles) {
    state.articles = state.articles.concat(articles)
  },
  increment(state) {
    state.count++
  },
  initArticles(state) {
    state.count = 0
    state.articles = []
    state.end = false
  },
  finish(state) {
    state.end = true
  },
  setTotal(state, total) {
    state.total = total
  }
}

export const actions = {
  increment({ commit, dispatch }) {
    commit('increment')
    dispatch('fetchArticles')
  },
  async fetchArticles({ state, commit }, payload) {
    try {
      const { headers, data } = await this.$axios.get(
        `/?_embed&categories=${payload.categoryId}&per_page=${
          state.perPage
        }&offset=${state.count * state.perPage}`
      )
      const total = headers['x-wp-total']
      let articles = []
      for (let i = 0; i < data.length; i++) {
        const date = new Date(data[i]['date'])
        console.log(data[i]['date'])
        articles[i] = {
          index: total - state.count * state.perPage - i,
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
      commit('setTotal', Number(total))
      if (data.length < state.perPage) commit('finish')
    } catch (err) {
      console.log(err)
    }
  }
}
