<template>
  <div class="page">
    <no-ssr>
      <Article
        v-for="article in articles"
        :key="article.slug"
        :article="article"
      />
    </no-ssr>
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'
import Article from '~/components/articles/Article'

export default {
  async asyncData({ app }) {
    const url = process.env.NODE_ENV === 'development' ? '' : URL.SITE
    const { data } = await app.$axios.get(`${url}/_nuxt/articles/master.json`)
    return { articles: data }
  },
  components: {
    Article
  },
  head() {
    return this.$head({
      title: '記事を読む / リーディング＆カンパニー株式会社',
      image: `${URL.SITE}/ogp.ong`
    })
  }
}
</script>

<style lang="scss" scoped>
.page {
  margin-top: 30px;
  @include pageBottom;
}
</style>
