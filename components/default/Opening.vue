<template>
  <div
    v-if="!hide"
    ref="opening"
    class="Opening"
  >
    <div class="shapes">
      <div class="shape shape1 whitegray" />
      <div class="shape shape1 gray" />
      <div class="shape shape1 black" />
      <div class="shape shape2 whitegray" />
      <div class="shape shape2 gray" />
      <div class="shape shape2 black" />
      <div class="shape shape3 whitegray" />
      <div class="shape shape3 gray" />
      <div class="shape shape3 black" />
      <div class="shape shape4 whitegray" />
      <div class="shape shape4 gray" />
      <div class="shape shape4 black" />
    </div>
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
      autoplay: false,
      loop: false,
      path: '/json/icon.json'
    })

    await this.$loadWindow()
    await this.$raf()
    this.shapeIn()

    await this.$delay(750)
    anim.setSpeed(1.1)
    anim.play() // 再生

    await this.$completeLottie(anim)
    TweenMax.to(this.$refs.lottie, 0.02, {
      opacity: 0,
      startAt: {
        opacity: 1
      },
      ease: Expo.easeOut,
      repeat: 7,
      yoyo: true,
      repeatDelay: 0.03
    })

    await this.$delay(500)
    anim.setDirection(-1)
    anim.setSpeed(1.5)

    await this.$raf()
    anim.play() // 逆再生

    await this.$delay(250)
    await this.$raf()
    TweenMax.to(this.$refs.lottie, 2.4, {
      scale: 3,
      ease: Expo.easeOut
    })

    await this.$delay(500)
    this.shapeOut()

    await this.$delay(250)
    this.$emit('open') // ストア変更

    await this.$delay(1650)
    this.hide = true
  },
  methods: {
    shapeIn() {
      TweenMax.to('.shapes', 1.9, {
        scale: 1,
        ease: Expo.easeOut
      })
      TweenMax.staggerTo(
        '.shape1',
        0.3,
        {
          y: '-100%',
          ease: Expo.easeInOut
        },
        0.2
      )
      TweenMax.staggerTo(
        '.shape2',
        0.3,
        {
          y: '100%',
          ease: Expo.easeInOut,
          delay: 0.2
        },
        0.2
      )
      TweenMax.staggerTo(
        '.shape3',
        0.3,
        {
          y: '-100%',
          ease: Expo.easeInOut,
          delay: 0.4
        },
        0.2
      )
      TweenMax.staggerTo(
        '.shape4',
        0.3,
        {
          y: '100%',
          ease: Expo.easeInOut,
          delay: 0.6
        },
        0.2
      )
    },
    shapeOut() {
      TweenMax.to('.shapes', 1.9, {
        scale: 2,
        ease: Expo.easeInOut
      })
      TweenMax.staggerTo(
        [].slice.call(document.getElementsByClassName('shape4')).reverse(),
        0.3,
        {
          y: '0%',
          ease: Expo.easeInOut
        },
        0.2
      )
      TweenMax.staggerTo(
        [].slice.call(document.getElementsByClassName('shape3')).reverse(),
        0.3,
        {
          y: '0%',
          ease: Expo.easeInOut,
          delay: 0.2
        },
        0.2
      )
      TweenMax.staggerTo(
        [].slice.call(document.getElementsByClassName('shape2')).reverse(),
        0.3,
        {
          y: '0%',
          ease: Expo.easeInOut,
          delay: 0.4
        },
        0.2
      )
      TweenMax.staggerTo(
        [].slice.call(document.getElementsByClassName('shape1')).reverse(),
        0.3,
        {
          y: '0%',
          ease: Expo.easeInOut,
          delay: 0.6
        },
        0.2
      )
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
  width: 100%;
  height: 100%;
  overflow: hidden;
  .lottie {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    padding: 0 40%;
  }
  .shapes {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    transform: scale(2);
    .shape {
      position: absolute;
      width: 25%;
      height: 100%;
      background: #000;
    }
    .shape1 {
      bottom: -100%;
      left: 0;
      margin: auto;
    }
    .shape2 {
      top: -100%;
      left: 25%;
      margin: auto;
    }
    .shape3 {
      bottom: -100%;
      left: 50%;
      margin: auto;
    }
    .shape4 {
      top: -100%;
      left: 75%;
      margin: auto;
    }
    .whitegray {
      opacity: 0.25;
    }
    .gray {
      opacity: 0.5;
    }
  }
}
</style>
