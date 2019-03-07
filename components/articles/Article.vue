<template>
  <nuxt-link
    :to="`/${article.slug}`"
    class="Article"
  >
    <lazy-component @show="show">
      <div class="thumb">
        <img
          ref="src"
          :src="article.src.full.source_url"
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
    </lazy-component>
  </nuxt-link>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    category() {
      return this.article.cat.indexOf(11) !== -1 ? 'ブログ' : '納品サンプル'
    }
  },
  mounted() {
    // console.log(this.article.src.full.source_url)
    // this.$loadImage(this.article.src.full.source_url, () => {
    //   requestAnimationFrame(() => {
    //     TweenMax.to(this.$refs.src, 3, {
    //       opacity: 0.9,
    //       ease: Expo.easeOut
    //     })
    //   })
    // })
  },
  methods: {
    show(component) {
      console.log(component)
      TweenMax.to(component.$el, 0.2, {
        opacity: 1,
        ease: Expo.easeInOut
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Article {
  display: block;
  margin: 30px auto 0;
  width: calc(100% - 60px);
  overflow: hidden;
  background: white;
  @include shadowBlue;
  border-radius: 15px;
  @include pc {
    margin: 0 0 10px;
    width: calc((100% - 20px) / 3);
  }
  & > div {
    opacity: 0;
  }
  .thumb {
    position: relative;
    width: 100%;
    height: 30vh;
    overflow: hidden;
    @include pc {
      height: 25vh;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      // opacity: 0;
    }
  }
  .text {
    padding: 20px;
    width: 100%;
    .title {
      position: relative;
      display: inline-block;
      line-height: 2;
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
      color: #999;
      .date {
        position: relative;
        display: inline-block;
        overflow: hidden;
      }
      .category {
        padding: 0 20px;
        line-height: 30px;
        background: #171717;
        border-radius: 15px;
      }
    }
  }
}
</style>
