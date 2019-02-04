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
  async mounted() {
    const anim = lottie.loadAnimation({
      container: this.$refs.lottie,
      renderer: 'svg',
      loop: false,
      path: '/json/icon.json'
    })

    await this.$loadWindow()
    await this.$raf()
    TweenMax.to(document.body, 1.7, {
      backgroundColor: 'white',
      ease: Expo.easeInOut
    })
    anim.setSpeed(1.15)
    anim.play() // 再生

    await this.$completeLottie(anim)
    anim.setDirection(-1)
    anim.setSpeed(1.5)

    await this.$raf()
    anim.play() // 逆再生

    await this.$delay(250)
    await this.$raf()
    this.$emit('open')
    TweenMax.to(this.$refs.opening, 3, {
      scale: 4,
      opacity: 0,
      ease: Expo.easeOut
    })

    await this.$delay(3000)
    this.hide = true
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
