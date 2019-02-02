// import { url } from '~/assets/data/config.json'

export const state = () => ({
  article: [],
  ranking: []
})

export const getters = {
  article: state => state.article,
  ranking: state => state.ranking
}

export const mutations = {
  setArticle(state, article) {
    state.article = article
  },
  setRanking(state, ranking) {
    state.ranking = ranking
  }
}

export const actions = {
  async fetchArticle({ commit }, payload) {
    try {
      let { data } = await this.$axios.get(`/?_embed&slug=${payload.slug}`)
      data = data[0]
      const date = new Date(data.date)
      const article = {
        title: data.title.rendered,
        src:
          'large' in data._embedded['wp:featuredmedia'][0].media_details.sizes
            ? data._embedded['wp:featuredmedia'][0].media_details.sizes.large
                .source_url
            : data._embedded['wp:featuredmedia'][0].media_details.sizes.full
                .source_url,
        slug: data.slug,
        content: data.content.rendered,
        categories: data.categories,
        // author: data['post_meta']['author'],
        // interviewer: data['post_meta']['interviewer'],
        // editor: data['post_meta']['editor'],
        // intro: data['post_meta']['lead'],
        // bg: data['post_meta']['bg'],
        // video: data['post_meta']['video'],
        yy: date.getFullYear(date),
        mm: date.getMonth(date) + 1,
        dd: date.getDate()
      }
      commit('setArticle', article)
    } catch (err) {
      console.log(err)
    }
  }
  // async fetchRanking({ commit }) {
  //   try {
  //     let { data } = await this.$axios.get(`${url.wp}/ranking/`)
  //     let ranking = []
  //     for (let i = 0; i < data.length; i++) {
  //       // Safari用、ハイフンをスラッシュに
  //       const date = new Date(data[i]['date'].replace(/-/g, '/'))
  //       ranking[i] = {
  //         index: i + 1,
  //         title: data[i]['title'],
  //         src: data[i]['src'],
  //         slug: data[i]['slug'],
  //         author: data[i]['author'],
  //         categories: data[i]['categories'],
  //         yy: date.getFullYear(date),
  //         mm: date.getMonth(date) + 1,
  //         dd: date.getDate()
  //       }
  //     }
  //     commit('setRanking', ranking)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
}
