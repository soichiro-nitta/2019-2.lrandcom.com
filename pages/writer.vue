<template>
  <div class="page">
    <Head
      :title="title"
      :src="src"
    />
    <Body />
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'
import Head from '~/components/writer/Head'
import Body from '~/components/writer/Body'

export default {
  components: {
    Head,
    Body
  },
  data() {
    return {
      title: 'ライター募集',
      src: `${URL.WP}/static/recruit/fv.gif`
    }
  },
  head() {
    return this.$head({
      title: 'ライター募集 / リーディング＆カンパニー株式会社',
      image: `${URL.SITE}/ogp.png`
    })
  }
}
</script>

<style lang="scss" scoped>
.page {
  @include pageBottom;
  .ButtonNuxt {
    margin: 0 auto;
  }
}
</style>
