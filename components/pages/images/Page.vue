<template>
  <a
    :href="file"
    download=""
    class="Page"
  >
    <img
      ref="file"
      :src="file"
    >
  </a>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  props: {
    file: {
      type: String,
      default: '',
      required: false
    }
  },
  mounted() {
    this.$imageOnLoad(this.file, () => {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.file, 3, {
          opacity: 1,
          ease: Expo.easeOut
        })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.Page {
  display: inline-block;
  width: 20%;
  height: 150px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    opacity: 0;
    object-fit: cover;
  }
}
</style>
