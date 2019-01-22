<template>
  <div class="FirstviewVideo">
    <div
      ref="gradient"
      class="gradient"
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
      <div class="mask"/>
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
    async leave() {
      this.titleOut(this.anim)
      this.gradientOut(this.$refs.gradient)
      this.videoOut(this.$refs.video, this.$refs.thumb)
    }
  },
  async mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.title,
      renderer: 'svg',
      loop: false,
      path: '/json/text.json'
    })
    this.titleIn(this.anim)
    this.gradientIn(this.$refs.gradient)
    this.videoIn(this.$refs.video, this.$refs.thumb)
  },
  methods: {
    titleIn: anim => {
      anim.play()
    },
    titleOut: anim => {
      anim.setDirection(-1)
      anim.setSpeed(3)
      anim.play()
    },
    gradientIn: gradient => {
      requestAnimationFrame(() => {
        TweenMax.to(gradient, 3, {
          y: '0%',
          ease: Expo.easeOut
        })
      })
    },
    gradientOut: gradient => {
      requestAnimationFrame(() => {
        TweenMax.to(gradient, 0.5, {
          y: '-100%',
          ease: Expo.easeIn
        })
      })
    },
    videoIn: (video, thumb) => {
      video.load()
      const canplay = () => {
        video.removeEventListener('canplay', canplay)
        const duration = video.duration // 動画の尺
        const rand = Math.floor(Math.random() * (duration + 1 - 0)) // 0 ~ durationの乱数
        video.currentTime = rand // 再生開始時間を指定
        video.play()
        requestAnimationFrame(() => {
          TweenMax.to(thumb, 2, {
            opacity: 1,
            ease: Expo.easeInOut
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
  height: 65vh;
  overflow: hidden;
  @include pc {
    height: calc(100vh - 140px);
    border-radius: 20px;
  }
  .gradient {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(65, 65, 65, 0.8) 0%,
      rgba(65, 65, 65, 0) 100%
    );
    background: -webkit-linear-gradient(
      rgba(65, 65, 65, 0.8) 0%,
      rgba(65, 65, 65, 0) 100%
    );
    transform: translate(0, -100%);
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
      background: linear-gradient(
        rgba(75, 75, 75, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
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
