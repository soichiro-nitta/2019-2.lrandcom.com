<template>
  <nuxt-link
    to="/"
    class="Logo"
  >
    <img
      ref="logo"
      src="/svg/logo.svg"
    >
  </nuxt-link>
</template>

<script>
import { TweenMax, Expo, Back } from 'gsap'

export default {
  props: {
    opening: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    async opening() {
      await this.$delay(600)
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.logo, 0.7, {
          marginTop: 0,
          ease: Expo.easeOut
        })
        TweenMax.to(this.$refs.logo, 1.7, {
          rotationY: 360,
          ease: Back.easeOut.config(1.7)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Logo {
  position: fixed;
  top: 30px;
  left: 30px;
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 50%;
  // mix-blend-mode: difference;
  perspective: 5000px;
  img {
    margin-top: 100%;
    width: 100%;
    height: 100%;
  }
}
</style>
