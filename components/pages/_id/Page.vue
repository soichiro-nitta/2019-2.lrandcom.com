<template>
  <div class="Page">
    <Firstview
      :title="article.title"
      :src="article.src"
    />
    <Content
      :content="article.content"
    />
  </div>
</template>

<script>
import Firstview from './Firstview'
import Content from './Content'

export default {
  components: {
    Firstview,
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
