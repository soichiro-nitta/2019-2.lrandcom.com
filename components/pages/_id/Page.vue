<template>
  <div class="Page">
    <Firstview
      :title="article.title"
      :src="article.src"
    />
    <Author/>
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

export default {
  components: {
    Firstview,
    Author,
    Content,
    Services
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
    padding-bottom: 60px;
  }
  .Services {
    @include pc {
      margin-top: 30px;
    }
  }
}
</style>
