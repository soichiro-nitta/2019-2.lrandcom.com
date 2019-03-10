<template>
  <div class="page">
    <Head
      :title="article.title"
      :yy="article.yy"
      :mm="article.mm"
      :dd="article.dd"
      :src="article.src.thumbnail.source_url"
    />
    <Author />
    <Body :content="article.content" />
    <Services />
    <!-- <Banner /> -->
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'
import Head from '~/components/_id/Head'
import Author from '~/components/_id/Author'
import Body from '~/components/_id/Body'
import Services from '~/components/base/Services'
// import Banner from '~/components/_id/Banner'

export default {
  components: {
    Head,
    Author,
    Body,
    Services
    // Banner
  },
  async asyncData({ app, params }) {
    const url = process.env.NODE_ENV === 'development' ? '' : URL.SITE
    const { data } = await app.$axios.get(
      `${url}/_nuxt/articles/${params.id}.json`
    )
    return { article: data }
  },
  head() {
    return this.$head({
      title: this.article.title,
      image: this.article.src.full.source_url
    })
  }
}
</script>

<style lang="scss" scoped>
.page {
  @include pageBottom;
  .Services {
    margin-top: -35px;
    margin-bottom: 45px;
    @include pc {
      margin-top: -25px;
    }
  }
}
</style>
