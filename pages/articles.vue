<template>
  <Page
    v-if="opening"
    :articles="articles"
    :page="page"
    :total-pages="totalPages"
    @increment="increment"
    @decrement="decrement"
    @fetch="fetch"
  />
</template>

<script>
import URL from '~/assets/data/url.json'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Page from '~/components/pages/articles/Page'

export default {
  components: {
    Page
  },
  computed: {
    ...mapGetters({
      opening: 'opening',
      articles: 'articles/articles',
      page: 'articles/page',
      totalPages: 'articles/totalPages'
    })
  },
  mounted() {
    document.getElementById('scrollArea').scrollTop = 0
    if (this.articles.length !== 0) return
    this.fetch()
  },
  methods: {
    async fetch() {
      await this.fetchArticles({
        categories: '8,11'
      })
      document.getElementById('scrollArea').scrollTop = 0
    },
    ...mapMutations({
      increment: 'articles/increment',
      decrement: 'articles/decrement'
    }),
    ...mapActions({
      fetchArticles: 'articles/fetchArticles'
    })
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
          content: 'https://lrandcom.com/articles'
        },
        { property: 'og:image', content: `${URL.SITE}/ogp.ong` },
        {
          property: 'twitter:title',
          content: 'コンテンツを読む | リーディング＆カンパニー株式会社'
        },
        { property: 'twitter:image', content: `${URL.SITE}/ogp.ong` }
      ]
    }
  }
}
</script>
