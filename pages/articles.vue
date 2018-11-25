<template>
  <Page
    v-if="opening"
    :articles="articles"
  />
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Page from '~/components/pages/articles/Page'

export default {
  components: {
    Page
  },
  computed: {
    ...mapGetters({
      opening: 'opening',
      articles: 'articles/articles'
    })
  },
  async fetch({ store, params }) {
    store.commit('articles/initArticles')
    await store.dispatch('articles/fetchArticles', {
      categoryId: 8
    })
  },
  mounted() {
    document.getElementById('scrollArea').scrollTop = 0
    // this.initArticles()
    // this.fetchArticles({
    //   categoryId: 8
    // })
  },
  methods: {
    // ...mapMutations({
    //   initArticles: 'articles/initArticles'
    // }),
    // ...mapActions({
    //   fetchArticles: 'articles/fetchArticles'
    // })
  },
  head() {
    return {
      title: 'コンテンツを読む',
      meta: [
        {
          property: 'og:title',
          content: 'コンテンツを読む | リーディング＆カンパニー株式会社'
        },
        {
          property: 'og:url',
          content: 'https://lrandcom.netlify.com/articles'
        },
        {
          property: 'twitter:title',
          content: 'コンテンツを読む | リーディング＆カンパニー株式会社'
        }
      ]
    }
  }
}
</script>
