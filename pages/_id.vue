<template>
  <div class="page">
    _id.vue
  </div>
</template>

<script>
// import URL from '~/assets/data/url.json'

export default {
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
      image: `${URL.SITE}/ogp.png`
    })
  }
}
</script>

<style lang="scss" scoped>
.page {
  @include pageBottom;
}
</style>
