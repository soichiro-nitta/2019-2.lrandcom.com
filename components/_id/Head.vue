<template>
  <div class="Head">
    <div
      ref="thumb"
      class="thumb"
    >
      <img ref="src" :src="src">
      <div class="mask" />
    </div>
    <div class="content">
      <div
        ref="title"
        class="title"
      >
        <span
          ref="titleText"
          class="titleText"
        >
          {{ title }}
        </span>
      </div>
    </div>
    <ArrowBack to="/articles" />
    <div class="date">
      {{ `${yy}.${mm}.${dd}` }}
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
    title: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    yy: {
      type: Number,
      required: true
    },
    mm: {
      type: Number,
      required: true
    },
    dd: {
      type: Number,
      required: true
    }
  },
  mounted() {
    this.$el.style.height = `${this.windowHeight / 1.8}px`
    this.$refs.src.style.height = `${this.windowHeight / 1.8}px`
    TweenMax.to(this.$refs.thumb, 1, {
      height: '100%',
      ease: Expo.easeOut
    })
    TweenMax.to(this.$refs.titleText, 1.5, {
      y: 0,
      ease: Expo.easeOut
    })
  }
}
</script>

<style lang="scss" scoped>
.Head {
  position: relative;
  width: 100%;
  overflow: hidden;
  @include gradientBlack;
  @include pc {
    height: calc(100vh - 140px);
    border-radius: 20px;
  }
  .thumb {
    width: 100%;
    height: 0;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
      @include pc {
        height: calc(100vh - 140px);
      }
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      @include gradientBlack;
      opacity: 0.4;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .title {
      position: relative;
      display: inline-block;
      width: calc(100% - 120px);
      line-height: 2;
      color: white;
      font-size: 14px;
      font-weight: bold;
      overflow: hidden;
      @include pc {
        width: 540px;
        font-size: 20px;
        letter-spacing: 4px;
      }
      .titleText {
        display: inline-block;
        transform: translate(0, 100%);
      }
    }
  }
  .date {
    position: absolute;
    top: 37px;
    right: 30px;
    color: white;
    font-size: 12px;
  }
}
</style>
