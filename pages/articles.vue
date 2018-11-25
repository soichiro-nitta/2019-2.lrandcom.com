<template>
  <Page
    v-if="opening"
    :articles="articles"
  />
</template>

<script>
import { mapGetters } from 'vuex'
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
