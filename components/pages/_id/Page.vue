<template>
  <div class="Page">
    <Firstview
      :title="article.title"
      :src="article.src"
    />
    <!-- <Author/> -->
    <Content
      :content="article.content"
    />
  </div>
</template>

<script>
import Firstview from './Firstview'
import Author from './Author'
import Content from './Content'

export default {
  components: {
    Firstview,
    Author,
    Content
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>
