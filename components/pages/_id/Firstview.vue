<template>
  <div class="Firstview">
    <div
      ref="thumb"
      class="thumb"
    >
      <img :src="src">
      <div class="mask"/>
    </div>
    <div class="content">
      <div
        ref="title"
        class="title"
      >
        <span
          ref="titleText"
          class="titleText"
        >{{ title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.$imageOnLoad(this.src, () => {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.thumb, 1, {
          height: '100%',
          ease: Expo.easeOut
        })
        TweenMax.to(this.$refs.titleText, 1.5, {
          y: 0,
          ease: Expo.easeOut
        })
      })
    })
    requestAnimationFrame(() => {
      TweenMax.to(this.$refs.gradient, 3, {
        y: 0,
        ease: Expo.easeOut
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.Firstview {
  position: relative;
  width: 100%;
  height: 65vh;
  overflow: hidden;
  .thumb {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    overflow: hidden;
    img {
      width: 100%;
      height: 65vh;
      object-fit: cover;
      opacity: 0.9;
    }
    .mask {
      position: absolute;
      top: -2%;
      left: -2%;
      width: 104%;
      height: calc(65vh + 4%);
      background: linear-gradient(
        rgba(75, 75, 75, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
    }
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    padding: 50px;
    width: 100%;
    height: 100%;
    .title {
      position: relative;
      display: inline;
      line-height: 2;
      font-size: 16px;
      font-weight: bold;
      overflow: hidden;
      @include pc {
        width: 70%;
        font-size: 20px;
      }
      .titleText {
        display: inline-block;
        transform: translate(0, 100%);
      }
    }
  }
}
</style>
