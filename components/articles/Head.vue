<template>
  <div class="Head">
    <NLink to="/">
      <font-awesome-icon :icon="['fal', 'long-arrow-alt-left']" />
    </NLink>
    <div class="sort">
      <div class="r">
        <div class="activeBar" />
        <ul>
          <li class="all" @click="clickAll">
            All
          </li>
          <li class="sample" @click="clickSample">
            納品サンプル
          </li>
          <li class="blog" @click="clickBlog">
            ブログ
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  props: {
    master: {
      type: Array,
      required: true
    }
  },
  methods: {
    colorReset() {
      TweenMax.set('.Head ul li', { willChange: 'color' })
      TweenMax.to('.Head ul li', 0.6, {
        color: '#7685bd',
        ease: Expo.easeOut
      })
      this.$delay(600)
      TweenMax.set('.Head ul li', { willChange: 'auto' })
    },
    async clickAll() {
      const articles = this.master
      this.$emit('setArticles', articles)
      this.$emit('setCategory', 'all')
      TweenMax.set('.all', { willChange: 'color' })
      TweenMax.set('.activeBar', { willChange: 'transform' })
      await this.$raf()
      this.colorReset()
      TweenMax.to('.all', 0.6, {
        color: 'white',
        ease: Expo.easeOut
      })
      TweenMax.to('.activeBar', 0.6, {
        x: '0%',
        ease: Expo.easeOut
      })
      this.$delay(600)
      TweenMax.set(['.all', '.activeBar'], { willChange: 'auto' })
    },
    async clickSample() {
      const articles = this.master.filter(val => {
        return val.cat[0] === 8
      })
      this.$emit('setArticles', articles)
      this.$emit('setCategory', 'sample')
      TweenMax.set('.sample', { willChange: 'color' })
      TweenMax.set('.activeBar', { willChange: 'transform' })
      await this.$raf()
      this.colorReset()
      TweenMax.to('.sample', 0.6, {
        color: 'white',
        ease: Expo.easeOut
      })
      TweenMax.to('.activeBar', 0.6, {
        x: '100%',
        ease: Expo.easeOut
      })
      this.$delay(600)
      TweenMax.set(['.sample', '.activeBar'], { willChange: 'auto' })
    },
    async clickBlog() {
      const articles = this.master.filter(val => {
        return val.cat[0] === 11
      })
      this.$emit('setArticles', articles)
      this.$emit('setCategory', 'blog')
      TweenMax.set('.blog', { willChange: 'color' })
      TweenMax.set('.activeBar', { willChange: 'transform' })
      await this.$raf()
      this.colorReset()
      TweenMax.to('.blog', 0.6, {
        color: 'white',
        ease: Expo.easeOut
      })
      TweenMax.to('.activeBar', 0.6, {
        x: '200%',
        ease: Expo.easeOut
      })
      this.$delay(600)
      TweenMax.set(['.blog', '.activeBar'], { willChange: 'auto' })
    }
  }
}
</script>


<style lang="scss" scoped>
$height: 210px;
$svgMarginTop: 30px;
$svgFontSize: 25px;
$sortHeight: 30px;

.Head {
  position: relative;
  width: 100%;
  height: $height;
  background: black;
  @include gradientBlack;
  a {
    svg {
      margin: $svgMarginTop 0 0 $svgMarginTop;
      color: white;
      font-size: $svgFontSize;
    }
  }
  .sort {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: calc(100% - 40px);
    height: 30px;
    background: white;
    border-radius: 15px;
    @include shadowBlue;
    .activeBar {
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% / 3);
      height: 100%;
      @include gradientBlue;
      border-radius: 15px;
    }
    ul {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      li.all {
        color: white;
      }
      li {
        width: calc(100% / 3);
        text-align: center;
        color: $blue4;
        font-size: 10px;
        font-weight: bold;
        line-height: $sortHeight;
      }
    }
  }
}
</style>
