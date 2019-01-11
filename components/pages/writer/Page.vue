<template>
  <div class="Page">
    <Firstview
      :title="title"
      :src="src"
    />
    <Content/>
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'
import Firstview from './Firstview'
import Content from './Content'

export default {
  components: {
    Firstview,
    Content
  },
  data() {
    return {
      title: 'ライター募集',
      src: `${URL.WP}/static/recruit/fv.gif`
    }
  }
}
</script>

<style lang="scss" scoped>
.Page {
  .ButtonNuxt {
    margin: 0 auto;
  }
}
</style>
