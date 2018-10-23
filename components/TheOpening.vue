<template>
  <div
    ref="theOpening"
    class="TheOpening"
  >
    <img
      ref="logo"
      src="/svg/logo.svg"
    >
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  mounted() {
    console.log('mounted at TheOpening.vue')
    window.onload = () => {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.theOpening, 2, {
          scale: 2,
          opacity: 0,
          ease: Expo.easeInOut
        })
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.TheOpening {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  background: black;
  img {
    width: 100px;
    height: 100px;
  }
}
</style>
