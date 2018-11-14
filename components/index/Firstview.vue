<template>
  <div class="fv">
    <div
      ref="gradient"
      class="gradient"
    />
    <div class="fvContent">
      <div
        ref="title"
        class="title"
      >
        <span
          ref="titleText"
          class="titleText"
        >LEADING & COMPANY</span>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  mounted() {
    requestAnimationFrame(() => {
      TweenMax.to(this.$refs.gradient, 3, {
        y: 0,
        ease: Expo.easeOut
      })
      TweenMax.to(this.$refs.titleText, 1, {
        y: 0,
        ease: Expo.easeInOut
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.fv {
  position: relative;
  width: 100%;
  height: 65vh;
  overflow: hidden;
  .gradient {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(65, 65, 65, 0.8) 0%,
      rgba(65, 65, 65, 0) 100%
    );
    background: -webkit-linear-gradient(
      rgba(65, 65, 65, 0.8) 0%,
      rgba(65, 65, 65, 0) 100%
    );
    transform: translate(0, -100%);
  }
  .fvContent {
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
      letter-spacing: 2px;
      overflow: hidden;
      .titleText {
        display: inline-block;
        transform: translate(0, 100%);
      }
    }
  }
}
</style>
