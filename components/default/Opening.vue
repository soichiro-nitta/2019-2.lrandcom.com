<template>
  <div
    v-if="!hide"
    ref="opening"
    class="Opening"
  >
    <div
      ref="lottie"
      class="lottie"
    />
  </div>
</template>

<script>
import lottie from 'lottie-web'
import { TweenMax, Expo } from 'gsap'

export default {
  data() {
    return {
      hide: false
    }
  },
  mounted() {
    const anim = lottie.loadAnimation({
      container: this.$refs.lottie,
      renderer: 'svg',
      loop: false,
      path: '/json/icon.json'
    })
    const onComplete = () => {
      anim.removeEventListener('complete', onComplete)
      anim.setDirection(-1)
      anim.setSpeed(3)
      anim.play()
      document.body.style.background = 'white'
      requestAnimationFrame(async () => {
        TweenMax.to(this.$refs.opening, 2, {
          scale: 2,
          opacity: 0,
          ease: Expo.easeOut,
          onComplete: () => {
            this.hide = true
          }
        })
        await this.$delay(750)
        document.body.style.overflow = 'auto'
      })
      this.$emit('open')
    }
    anim.addEventListener('complete', onComplete)

    window.onload = () => {
      anim.play()
    }
  }
}
</script>

<style lang='scss' scoped>
.Opening {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding: 0 40%;
  width: 100%;
  height: 100%;
  background: black;
  @include pc {
    padding: 0 45%;
  }
}
</style>
