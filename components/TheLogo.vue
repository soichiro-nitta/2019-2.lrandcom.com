<template>
  <nuxt-link
    to="/"
    class="TheLogo"
  >
    <img src="/svg/logo.svg">
  </nuxt-link>
</template>

<script>
// import { TweenMax, Expo } from 'gsap'

export default {
  mounted() {}
}
</script>

<style lang="scss" scoped>
.TheLogo {
  display: inline-block;
  position: fixed;
  top: 30px;
  left: 30px;
  img {
    width: 40px;
    height: 40px;
  }
}
</style>
