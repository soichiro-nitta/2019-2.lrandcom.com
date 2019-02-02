<template>
  <div class="Page">
    <!-- <transition-group
      :css="false"
      tag="div"
      @appear="appear"
      @enter="enter"
    > -->
    <Article
      v-for="article in articles"
      :key="article.index"
      :article="article"
    />
    <!-- </transition-group> -->
    <Navigation
      :page="page"
      :total-pages="totalPages"
      @increment="increment"
      @decrement="decrement"
      @fetch="fetch"
    />
  </div>
</template>

<script>
import Article from './Article'
import Navigation from './Navigation'

export default {
  components: {
    Article,
    Navigation
  },
  props: {
    articles: {
      type: Array,
      default: () => {
        return []
      },
      required: false
    },
    page: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    increment() {
      this.$emit('increment')
    },
    decrement() {
      this.$emit('decrement')
    },
    fetch() {
      this.$emit('fetch')
    }
    //   appear(el, done) {
    //     requestAnimationFrame(() => {
    //       TweenMax.to(el, 1, {
    //         y: 0,
    //         opacity: 1,
    //         ease: Expo.easeOut,
    //         delay: el.dataset.index * 0.05,
    //         onComplete: () => {
    //           done()
    //         }
    //       })
    //     })
    //   },
    //   enter(el, done) {
    //     requestAnimationFrame(() => {
    //       TweenMax.to(el, 1, {
    //         y: 0,
    //         opacity: 1,
    //         ease: Expo.easeOut,
    //         delay: el.dataset.index * 0.05,
    //         onComplete: () => {
    //           done()
    //         }
    //       })
    //     })
    //   }
  }
}
</script>

<style lang="scss" scoped>
.Page {
  padding: 60px 0 130px;
  width: 100%;
  @include pc {
    padding: 0 0 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
