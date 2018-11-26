<template>
  <Page
    v-if="opening"
    :article="article"
  />
</template>

<script>
import URL from '~/assets/data/url.json'
import { mapGetters } from 'vuex'
import Page from '~/components/pages/_id/Page'

export default {
  components: {
    Page
  },
  async fetch({ store, params }) {
    await store.dispatch('_id/fetchArticle', {
      slug: params.id
    })
    // await store.dispatch('_id/fetchRanking')
  },
  computed: {
    ...mapGetters({
      opening: 'opening',
      article: '_id/article'
      // ranking: '_id/ranking',
    }),
    facebook() {
      const currentUrl = `${URL.SITE}/${this.article.slug}`
      return `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`
    },
    twitter() {
      const currentUrl = `${URL.SITE}/${this.article.slug}`
      const text = encodeURIComponent(
        `${this.article.title} | Living Entertainment`
      )
      return `https://twitter.com/share?url=${currentUrl}&text=${text}`
    }
  },
  mounted() {
    document.getElementById('scrollArea').scrollTop = 0
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          property: 'og:title',
          content: `${this.article.title} | リーディング＆カンパニー株式会社`
        },
        {
          property: 'og:url',
          content: `${URL.SITE}/${this.article.slug}`
        },
        { property: 'og:image', content: this.article.src },
        {
          property: 'twitter:title',
          content: `${this.article.title} | リーディング＆カンパニー株式会社`
        },
        { property: 'twitter:image', content: this.article.src }
      ]
    }
  }
}
</script>
