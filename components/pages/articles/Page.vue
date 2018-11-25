<template>
  <div class="Page">
    <Article
      v-for="(article, index) in articles"
      :article="article"
      :key="article.index"
      :data-index="index"
    />
    <!-- <Sentence />
    <Services/> -->
  </div>
</template>

<script>
import Article from './Article'

export default {
  components: {
    Article
  },
  props: {
    articles: {
      type: Array,
      default: () => {
        return []
      },
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.Page {
  padding: 70px 0;
  width: 100%;
  .BaseServices {
    margin-top: 30px;
  }
}
</style>
