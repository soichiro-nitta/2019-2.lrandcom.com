<template>
  <div class="Page">
    <Firstview
      :title="article.title"
      :src="article.src"
    />
    <Author/>
    <ButtonNuxt
      to="/writer"
      text="ライター募集中！!"
    />
    <Content
      :content="article.content"
    />
    <Services/>
    <Banner />
  </div>
</template>

<script>
import Firstview from './Firstview'
import Author from './Author'
import Content from './Content'
import Services from '~/components/base/Services'
import Banner from './Banner'
import ButtonNuxt from '~/components/base/ButtonNuxt'

export default {
  components: {
    Firstview,
    Author,
    Content,
    Services,
    Banner,
    ButtonNuxt
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
  .ButtonNuxt {
    margin: 50px auto 0;
    width: calc(100% - 60px);
  }
  @include pc {
    padding: 0;
  }
}
</style>
