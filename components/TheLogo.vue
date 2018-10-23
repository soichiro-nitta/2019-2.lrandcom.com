<template>
  <nuxt-link
    to="/"
    class="TheLogo"
  >
    <img
      ref="logo"
      src="/svg/logo.svg"
    >
  </nuxt-link>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  mounted() {
    requestAnimationFrame(() => {
      TweenMax.to(this.$refs.logo, 1, {
        marginTop: 0,
        ease: Expo.easeOut
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.TheLogo {
  display: inline-block;
  position: fixed;
  top: 30px;
  left: 30px;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  img {
    margin-top: 100%;
    padding: 5px;
    width: 100%;
    height: 100%;
  }
}
</style>
