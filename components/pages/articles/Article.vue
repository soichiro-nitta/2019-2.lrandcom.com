<template>
  <nuxt-link
    :to="`/${article.slug}`"
    class="Article"
  >
    <div class="thumb">
      <img
        ref="src"
        :src="article.src"
      >
      <div
        ref="mask"
        class="mask"
      />
    </div>
    <div class="bottom">
      <div class="title">
        {{ article.title }}
      </div>
      <div class="date">
        {{ `${article.yy}.${article.mm}.${article.dd}` }}
      </div>
    </div>
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
  mounted() {
    this.$imageOnLoad(this.article.src, () => {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.src, 3, {
          opacity: 0.9,
          ease: Expo.easeOut
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.Article {
  display: block;
  margin: 30px auto 0;
  width: calc(100% - 60px);
  overflow: hidden;
  background: #171717;
  border-radius: 15px;
  @include pc {
    margin: 0 0 10px;
    width: calc((100% - 20px) / 3);
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
      opacity: 0;
    }
    .mask {
      position: absolute;
      top: -1%;
      left: -1%;
      width: 102%;
      height: 102%;
      background: linear-gradient(
        rgba(23, 23, 23, 0) 0%,
        rgba(23, 23, 23, 1) 100%
      );
    }
  }
  .bottom {
    padding: 30px 20px 20px;
    width: 100%;
    .title {
      position: relative;
      display: inline-block;
      line-height: 2;
      font-size: 14px;
      font-weight: bold;
      overflow: hidden;
    }
    .date {
      margin-top: 15px;
      position: relative;
      display: inline-block;
      color: #999;
      line-height: 1;
      font-size: 12px;
      overflow: hidden;
    }
  }
}
</style>
