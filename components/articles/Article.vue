<template>
  <div class="Article">
    <nuxt-link
      v-if="loaded"
      :to="`/${article.slug}`"
    >
      <div class="thumb">
        <img
          ref="src"
          :src="article.src.thumbnail.source_url"
        >
      </div>
      <div class="text">
        <div class="title">
          {{ article.title }}
        </div>
        <div class="meta">
          <div class="date">
            {{ `${article.yy}.${article.mm}.${article.dd}` }}
          </div>
          <div class="category">
            {{ category }}
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import lozad from 'lozad'
import { TweenMax, Expo } from 'gsap'

export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      loaded: false
    }
  },
  computed: {
    category() {
      return this.article.cat.indexOf(11) !== -1 ? 'ブログ' : '納品サンプル'
    }
  },
  mounted() {
    const observer = lozad(this.$el, {
      rootMargin: '5%',
      load: () => {
        this.loaded = true
        this.show()
      }
    })
    observer.observe()
  },
  methods: {
    async show() {
      await this.$raf()
      TweenMax.to(this.$el, 0.6, {
        opacity: 1,
        y: '0px',
        ease: Expo.easeOut
      })
      await this.$loadImage(this.article.src.thumbnail.source_url)
      await this.$raf()
      TweenMax.to(this.$refs.src, 0.6, {
        opacity: 1,
        ease: Expo.easeOut
      })
      await this.$delay(600)
      this.$el.style.willChange = 'auto'
      this.$refs.src.style.willChange = 'auto'
    }
  }
}
</script>

<style lang="scss" scoped>
.Article {
  margin: 0 auto 30px;
  width: calc(100% - 40px);
  min-height: 30px;
  overflow: hidden;
  background: white;
  @include shadowBlue;
  border-radius: 15px;
  opacity: 0;
  transform: translateY(30px);
  will-change: opacity, transform;
  @include pc {
    max-width: 700px;
  }
  a {
    display: block;
    @include pc {
      display: flex;
    }
    .thumb {
      position: relative;
      width: 100%;
      height: 200px;
      overflow: hidden;
      @include gradientBlue;
      @include pc {
        width: 300px;
        height: 20vh;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        will-change: opacity;
      }
    }
    .text {
      padding: 20px;
      width: 100%;
      .title {
        position: relative;
        display: inline-block;
        line-height: 1.8;
        font-size: 14px;
        font-weight: bold;
        overflow: hidden;
      }
      .meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        font-size: 12px;
        line-height: 1;
        color: $blue4;
        .date {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }
        .category {
          padding: 0 10px;
          line-height: 25px;
          color: white;
          font-size: 10px;
          @include gradientPink;
          @include shadowPink;
          border-radius: 7.5px;
        }
      }
    }
  }
}
</style>
