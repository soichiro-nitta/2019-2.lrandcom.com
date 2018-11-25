<template>
  <div class="Page">
    articles page
    <div
      v-for="(article, index) in articles"
      :data-index="index"
      :key="article.title"
    >
      {{ article.title }}
    </div>
    <!-- <Firstview />
    <Sentence />
    <Services/> -->
  </div>
</template>

<script>
import Firstview from './Firstview'
import Sentence from './Sentence'
import Services from '~/components/base/Services'

export default {
  components: {
    Firstview,
    Sentence,
    Services
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
  padding-bottom: 30px;
  width: 100%;
  .BaseServices {
    margin-top: 30px;
  }
}
</style>
