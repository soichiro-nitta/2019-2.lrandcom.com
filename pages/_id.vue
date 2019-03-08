<template>
  <div class="page">
    <Head
      :title="article.title"
      :src="article.src.thumbnail.source_url"
    />
    <Author />
    <ButtonNuxt
      to="/writer"
      text="ライター募集中！!"
    />
    <Content
      :content="article.content"
    />
    <Services />
    <Banner />
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'
import Head from '~/components/_id/Head'
import Author from '~/components/_id/Author'
import Content from '~/components/_id/Content'
import Services from '~/components/base/Services'
import Banner from '~/components/_id/Banner'
import ButtonNuxt from '~/components/base/ButtonNuxt'

export default {
  components: {
    Head,
    Author,
    Content,
    Services,
    Banner,
    ButtonNuxt
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
}
</style>
