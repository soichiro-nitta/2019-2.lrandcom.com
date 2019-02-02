<template>
  <div class="Firstview">
    <div
      ref="thumb"
      class="thumb"
    >
      <img :src="src">
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
  }
}
</script>

<style lang="scss" scoped>
.Firstview {
  position: relative;
  width: 100%;
  height: 65vh;
  overflow: hidden;
  @include pc {
    height: calc(100vh - 140px);
    border-radius: 20px;
  }
  .thumb {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    overflow: hidden;
    @include pc {
      border-radius: 20px;
    }
    img {
      width: 100%;
      height: 65vh;
      object-fit: cover;
      opacity: 0.9;
      @include pc {
        height: calc(100vh - 140px);
        border-radius: 20px;
      }
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
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
    width: 100%;
    height: 100%;
    .title {
      display: inline-block;
      position: relative;
      line-height: 1;
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 4px;
      overflow: hidden;
      @include pc {
        font-size: 1.7vw;
        letter-spacing: 0.5vw;
      }
      .titleText {
        display: inline-block;
        transform: translate(0, 100%);
      }
    }
  }
}
</style>
