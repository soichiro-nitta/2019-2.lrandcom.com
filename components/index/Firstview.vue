<template>
  <div class="FirstviewVideo">
    <div
      ref="bg"
      class="bg"
    />
    <div
      ref="thumb"
      class="thumb"
    >
      <video
        ref="video"
        :src="src"
        preload="none"
        muted
        playsinline
        loop
      />
      <div class="mask" />
    </div>
    <div class="content">
      <div
        ref="title"
        class="title"
      />
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
  mounted() {
    this.$el.style.height = `${this.windowHeight / 1.5}px`
    this.anim = lottie.loadAnimation({
      container: this.$refs.title,
      renderer: 'svg',
      loop: false,
      path: '/json/text.json'
    })
    this.bgIn(this.$refs.bg)
    this.titleIn(this.anim)
    this.videoIn(this.$refs.video, this.$refs.thumb)
  },
  methods: {
    titleIn: anim => {
      anim.setSpeed(0.8)
      anim.play()
    },
    titleOut: anim => {
      anim.setDirection(-1)
      anim.setSpeed(3)
      anim.play()
    },
    bgIn: bg => {
      requestAnimationFrame(() => {
        TweenMax.to(bg, 2, {
          scaleY: 1,
          ease: Expo.easeInOut
        })
      })
    },
    videoIn: (video, thumb) => {
      video.load()
      const canplay = () => {
        video.removeEventListener('canplaythrough', canplay)
        // const duration = video.duration // 動画の尺
        // const rand = Math.floor(Math.random() * (duration + 1 - 0)) // 0 ~ durationの乱数
        // video.currentTime = rand // 再生開始時間を指定
        video.play()
        requestAnimationFrame(() => {
          TweenMax.to(thumb, 1, {
            opacity: 1,
            ease: Expo.easeIn
          })
        })
      }
      video.addEventListener('canplay', canplay)
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
  height: 400px;
  overflow: hidden;
  @include pc {
    height: calc(100vh - 140px);
    border-radius: 20px;
  }
  .bg {
    width: 100%;
    height: 100%;
    background: black;
    transform: scaleY(0);
  }
  .thumb {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    video {
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
      padding: 0 45px;
    }
  }
}
</style>
