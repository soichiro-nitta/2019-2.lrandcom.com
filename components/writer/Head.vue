<template>
  <div class="Firstview">
    <div ref="border" class="border" />
    <div ref="bg" class="bg" />
    <div class="thumb">
      <img :src="src">
      <div class="mask" />
    </div>
    <div class="content">
      <div
        ref="title"
        class="title"
      >
        <span>{{ title }}</span>
      </div>
    </div>
    <ArrowBack to="/" />
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'
import ArrowBack from '~/components/base/ArrowBack'

export default {
  components: {
    ArrowBack
  },
  props: {
    title: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    }
  },
  async mounted() {
    this.$el.style.height = `${this.windowHeight / 1.5}px`

    await this.$raf()
    this.borderIn()

    await this.$delay(200)
    await this.$raf()
    this.bgIn()

    await this.$loadImage(this.src)
    await this.$raf()
    this.imgIn()

    await this.$delay(750)
    this.titleIn()
  },
  methods: {
    borderIn: () => {
      TweenMax.to('.Firstview .border', 0.2, {
        scaleX: 1,
        ease: Expo.easeInOut
      })
    },
    bgIn: () => {
      TweenMax.to('.Firstview .bg', 2, {
        scaleY: 1,
        ease: Expo.easeInOut
      })
    },
    imgIn: () => {
      TweenMax.to('.Firstview .thumb', 1, {
        opacity: 1,
        ease: Expo.easeIn
      })
    },
    titleIn: () => {
      TweenMax.to('.Firstview .title span', 0.8, {
        y: '0%',
        ease: Expo.easeOut
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Firstview {
  position: relative;
  width: 100%;
  overflow: hidden;
  @include pc {
    height: calc(100vh - 140px);
    border-radius: 20px;
  }
  .border {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 3px;
    background: black;
    transform: scaleX(0);
    transform-origin: left center;
  }
  .bg {
    width: 100%;
    height: 100%;
    @include gradientBlack;
    transform: scaleY(0);
  }
  .thumb {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      @include gradientBlack;
      opacity: 0.4;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .title {
      display: inline-block;
      position: relative;
      color: white;
      line-height: 1;
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 4px;
      overflow: hidden;
      @include pc {
        font-size: 1.8vw;
        letter-spacing: 0.5vw;
      }
      span {
        display: inline-block;
        transform: translate(0, 100%);
      }
    }
  }
}
</style>
