<template>
  <div class="FirstviewVideo">
    <div ref="border" class="border" />
    <div ref="bg" class="bg" />
    <video
      ref="video"
      :src="src"
      preload="none"
      muted
      playsinline
      loop
    />
    <div class="content">
      <div
        ref="title"
        class="title"
      >
        <span
          ref="titleText"
          class="titleText"
        >
          {{ title }}
        </span>
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
    },
    leave: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    leave() {
      this.titleOut(this.$refs.titleText)
      this.videoOut(this.$refs.video, this.$refs.thumb)
    }
  },
  async mounted() {
    const video = this.$refs.video
    this.$el.style.height = `${this.windowHeight / 1.5}px`

    await this.$raf()
    this.borderIn(this.$refs.border)

    await this.$delay(200)
    await this.$raf()
    this.bgIn(this.$refs.bg)

    await this.$playVideo(video, false)
    await this.$raf()
    this.videoIn(video)

    await this.$delay(750)
    this.titleIn(this.$refs.titleText)
  },
  methods: {
    titleIn: title => {
      TweenMax.to(title, 0.8, {
        y: '0%',
        ease: Expo.easeOut
      })
    },
    titleOut: title => {
      TweenMax.to(title, 0.5, {
        y: '-100%',
        ease: Expo.easeIn
      })
    },
    borderIn: border => {
      TweenMax.to(border, 0.2, {
        scaleX: 1,
        ease: Expo.easeInOut
      })
    },
    bgIn: bg => {
      TweenMax.to(bg, 2, {
        scaleY: 1,
        ease: Expo.easeInOut
      })
    },
    videoIn: video => {
      TweenMax.to(video, 1, {
        opacity: 1,
        ease: Expo.easeIn
      })
    },
    videoOut: (video, mask) => {
      requestAnimationFrame(() => {
        video.pause()
        TweenMax.to(video, 0.5, {
          opacity: 0,
          ease: Expo.easeIn
        })
        TweenMax.to(mask, 0.5, {
          opacity: 0,
          ease: Expo.easeIn
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.FirstviewVideo {
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
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    object-fit: cover;
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
      .titleText {
        display: inline-block;
        transform: translate(0, 100%);
      }
    }
  }
}
</style>
