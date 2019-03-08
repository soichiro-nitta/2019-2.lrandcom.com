<template>
  <div class="page">
    <Head
      :master="master"
      @setArticles="setArticles"
      @setCategory="setCategory"
    />
    <div class="container">
      <no-ssr>
        <Article
          v-for="article in articles"
          :key="`${article.slug}-${category}`"
          :article="article"
        />
      </no-ssr>
    </div>
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'
import Head from '~/components/articles/Head'
import Article from '~/components/articles/Article'

export default {
  async asyncData({ app }) {
    const url = process.env.NODE_ENV === 'development' ? '' : URL.SITE
    const { data } = await app.$axios.get(`${url}/_nuxt/articles/master.json`)
    return {
      articles: data,
      master: data
    }
  },
  components: {
    Head,
    Article
  },
  data() {
    return {
      category: 'all'
    }
  },
  methods: {
    setArticles(articles) {
      this.articles = articles
    },
    setCategory(category) {
      this.category = category
    }
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
  @include pageBottom;
  .container {
    margin-top: -45px;
  }
}
</style>
