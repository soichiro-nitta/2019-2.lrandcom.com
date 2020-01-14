<template>
  <div class="Head">
    <div class="wrapper">
      <div class="sort">
        <div class="r">
          <div class="activeBar" />
          <ul>
            <li class="all" @click="clickAll">All</li>
            <li class="sample" @click="clickSample">納品サンプル</li>
            <li class="blog" @click="clickBlog">コンテンツ</li>
          </ul>
        </div>
      </div>
      <ArrowBack to="/" />
    </div>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'
import ArrowBack from '~/components/base/ArrowBack'

export default {
  components: {
    ArrowBack
  },
  props: {
    master: {
      type: Array,
      required: true
    }
  },
  methods: {
    colorReset() {
      TweenMax.to('.Head ul li', 0.6, {
        color: '#7685bd',
        ease: Expo.easeOut
      })
    },
    async clickAll() {
      const articles = this.master
      this.$emit('setArticles', articles)
      this.$emit('setCategory', 'all')
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
    },
    async clickSample() {
      const articles = this.master.filter(val => {
        return val.cat[0] === 8
      })
      this.$emit('setArticles', articles)
      this.$emit('setCategory', 'sample')
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
    },
    async clickBlog() {
      const articles = this.master.filter(val => {
        return val.cat[0] === 11
      })
      this.$emit('setArticles', articles)
      this.$emit('setCategory', 'blog')
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
    }
  }
}
</script>


<style lang="scss" scoped>
$height: 210px;
$sortHeight: 30px;

.Head {
  position: relative;
  width: 100%;
  height: $height;
  background: black;
  overflow: hidden;
  @include gradientBlack;
  .wrapper {
    padding-top: 90px;
    @include pc {
      position: relative;
      margin: 0 auto;
      max-width: 700px;
      width: calc(100% - 40px);
      height: 100%;
    }
    .sort {
      margin: 0 auto;
      width: calc(100% - 40px);
      height: 30px;
      background: white;
      border-radius: 15px;
      @include shadowBlue;
      @include pc {
        width: 100%;
      }
      .activeBar {
        width: calc(100% / 3);
        height: 100%;
        @include gradientBlue;
        border-radius: 15px;
        will-change: transform;
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
          will-change: color;
        }
      }
    }
    .ArrowBack {
      @include pc {
        left: 0;
      }
    }
  }
}
</style>
