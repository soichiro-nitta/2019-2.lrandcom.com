<template>
  <div class="Page">
    <Firstview
      :title="article.title"
      :src="article.src"
    />
    <Author/>
    <Banner />
    <Content
      :content="article.content"
    />
    <Services/>
  </div>
</template>

<script>
import Firstview from './Firstview'
import Author from './Author'
import Content from './Content'
import Services from '~/components/base/Services'
import Banner from './Banner'

export default {
  components: {
    Firstview,
    Author,
    Content,
    Services,
    Banner
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.Page {
  padding-bottom: 30px;
  @include pc {
    padding: 0;
  }
}
</style>
