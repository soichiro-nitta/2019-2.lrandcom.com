<template>
  <div class="Head">
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
    <NLink to="/articles">
      <font-awesome-icon :icon="['fal', 'long-arrow-alt-left']" />
    </NLink>
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
    img {
      width: 100%;
      height: 65vh;
      object-fit: cover;
      opacity: 0.9;
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
      position: relative;
      display: inline-block;
      width: calc(100% - 120px);
      line-height: 2;
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
  a {
    position: absolute;
    top: 30px;
    left: 30px;
    svg {
      color: white;
      font-size: 25px;
    }
  }
}
</style>
