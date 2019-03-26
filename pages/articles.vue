<template>
  <div class="page">
    <Head
      :master="master"
      @setArticles="setArticles"
      @setCategory="setCategory"
    />
    <div class="container">
      <Article
        v-for="article in articles"
        :key="`${article.slug}-${category}`"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'
import Head from '~/components/articles/Head'
import Article from '~/components/articles/Article'

export default {
  components: {
    Head,
    Article
  },
  data() {
    return {
      master: [],
      articles: [],
      category: 'all'
    }
  },
  async mounted() {
    const url = process.env.NODE_ENV === 'development' ? '' : URL.SITE
    const { data } = await this.$axios.get(`${url}/_nuxt/articles/master.json`)
    this.master = data
    this.articles = data
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
      image: `${URL.SITE}/ogp.png`
    })
  }
}
</script>

<style lang="scss" scoped>
.page {
  @include pageBottom;
  .container {
    margin-top: -45px;
    @include pc {
      display: flex;
      flex-wrap: wrap;
      margin: -45px auto 0;
      max-width: 1000px;
      width: 95%;
    }
  }
}
</style>
