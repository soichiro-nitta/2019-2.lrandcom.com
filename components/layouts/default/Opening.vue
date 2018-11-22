<template>
  <div
    v-if="!opening"
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
import { TweenMax, Expo, Back } from 'gsap'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      opening: false
    }
  },
  async mounted() {
    console.log('mounted at TheOpening.vue')
    window.onload = async () => {
      requestAnimationFrame(async () => {
        TweenMax.to(this.$refs.logo, 0.3, {
          scale: 1,
          opacity: 1,
          ease: Back.easeOut.config(5)
        })
        TweenMax.to(this.$refs.theOpening, 1, {
          scale: 5,
          opacity: 0,
          ease: Expo.easeInOut,
          delay: 0.15,
          onComplete: () => {
            this.opening = true
          }
        })
        await this.$delay(700)
        this.setOpening()
      })
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
  width: 100%;
  height: 100%;
  background: black;
  img {
    width: 55px;
    height: 55px;
    transform: scale(0);
    opacity: 0;
  }
}
</style>
