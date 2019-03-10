<template>
  <div class="Firstview">
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
    <div ref="icon" class="icon" />
    <div class="outer">
      <div ref="title" class="title" />
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web'
import URL from '~/assets/data/url.json'
import { TweenMax, Expo } from 'gsap'

export default {
  props: {
    leave: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: 'LEADING & COMPANY',
      src: `${URL.WP}/static/index/${
        this.$device.isMobile ? 'mobile' : 'pc'
      }.mp4`
    }
  },
  watch: {
    leave() {
      this.titleOut(this.anim)
      this.videoOut(this.$refs.video, this.$refs.thumb)
    }
  },
  async mounted() {
    const animIcon = lottie.loadAnimation({
      container: this.$refs.icon,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      path: '/json/icon.json'
    })
    const animTitle = lottie.loadAnimation({
      container: this.$refs.title,
      renderer: 'svg',
      autoplay: false,
      loop: false,
      path: '/json/text.json'
    })
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

    await this.$delay(500)
    await this.$raf()
    animTitle.play()
    animIcon.play()
  },
  methods: {
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
    titleOut: anim => {
      // anim.setDirection(-1)
      // anim.setSpeed(3)
      // anim.play()
    },
    videoOut: video => {
      requestAnimationFrame(() => {
        video.pause()
        TweenMax.to(video, 0.5, {
          opacity: 0,
          ease: Expo.easeIn
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Firstview {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  z-index: -1;
  @include pc {
    height: calc(100vh - 140px);
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
  .icon {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 35px;
    height: auto;
  }
  .outer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .title {
      padding: 0 40px;
      @include pc {
        width: 45vw;
      }
    }
  }
}
</style>
