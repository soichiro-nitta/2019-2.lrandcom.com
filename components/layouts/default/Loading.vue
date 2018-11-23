<template>
  <div class="Loading">
    <div
      ref="border"
      class="border"
    />
  </div>
</template>

<script>
import { TweenMax, TimelineMax, Expo } from 'gsap'

export default {
  async mounted() {
    this.createTimeline()
    // this.start()
    // await this.$delay(6000)
    // this.stop()
  },
  methods: {
    createTimeline() {
      this.tl = new TimelineMax()
    },
    stop() {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.border, 0.5, {
          scaleX: 0,
          transformOrigin: 'right center',
          ease: Expo.easeOut,
          onComplete: () => {
            this.tl.stop()
          }
        })
      })
    },
    start() {
      this.tl.repeat(-1)
      requestAnimationFrame(() => {
        this.tl
          .to(this.$refs.border, 0.5, {
            scaleX: 1,
            transformOrigin: 'left center',
            ease: Expo.easeIn
          })
          .to(this.$refs.border, 0.5, {
            scaleX: 0,
            transformOrigin: 'right center',
            ease: Expo.easeOut
          })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // position: fixed;
  // top: 30px;
  // left: 0;
  // right: 0;
  // margin: auto;
  // width: calc(45% - 80px);
  // height: 40px;
  // .border {
  //   width: 100%;
  //   height: 2px;
  //   border-radius: 1px;
  //   background: #999;
  //   transform: scaleX(0);
  // }
}
</style>
