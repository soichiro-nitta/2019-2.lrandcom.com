<template>
  <div class="Loading">
    /contents
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  color: #999;
  font-size: 12px;
  background: black;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
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
