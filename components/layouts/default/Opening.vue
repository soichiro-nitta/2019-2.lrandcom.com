<template>
  <div
    v-if="!opening"
    ref="theOpening"
    class="TheOpening"
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
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      opening: false
    }
  },
  mounted() {
    console.log('mounted at TheOpening.vue')
    const opening = lottie.loadAnimation({
      container: this.$refs.lottie,
      renderer: 'svg',
      loop: false,
      path: '/json/opening.json'
    })
    const onComplete = () => {
      opening.removeEventListener('complete', onComplete)
      opening.setDirection(-1)
      opening.setSpeed(3)
      opening.play()
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.theOpening, 2, {
          scale: 2,
          opacity: 0,
          ease: Expo.easeOut,
          onComplete: () => {
            this.opening = true
          }
        })
      })
      this.setOpening()
    }
    opening.addEventListener('complete', onComplete)

    window.onload = () => {
      opening.setSpeed(1.2)
      opening.play()
    }
  },
  methods: {
    ...mapMutations({
      setOpening: 'setOpening'
    })
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
  padding: 0 40%;
  width: 100%;
  height: 100%;
  background: black;
}
</style>
