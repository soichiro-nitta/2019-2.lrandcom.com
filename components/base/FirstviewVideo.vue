<template>
  <div class="FirstviewVideo">
    <div
      ref="gradient"
      class="gradient"
    />
    <video
      ref="video"
      :src="src"
      preload="none"
      muted
      playsinline
      loop
    />
    <div
      ref="mask"
      class="mask"
    />
    <div class="content">
      <div
        ref="title"
        class="title"
      >
        <span
          ref="titleText"
          class="titleText"
        >{{ title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
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
  mounted() {
    this.$refs.video.load()
    const canplay = () => {
      this.$refs.video.removeEventListener('canplay', canplay)
      const duration = this.$refs.video.duration // 動画の尺
      const rand = Math.floor(Math.random() * (duration + 1 - 0)) // 0 ~ durationの乱数
      this.$refs.video.currentTime = rand // 再生開始時間を指定
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.video, 2, {
          opacity: 1,
          ease: Expo.easeInOut
        })
        TweenMax.to(this.$refs.mask, 1, {
          opacity: 1,
          ease: Expo.easeOut
        })
      })
      this.$refs.video.play()
    }
    this.$refs.video.addEventListener('canplay', canplay)
    requestAnimationFrame(async () => {
      TweenMax.to(this.$refs.gradient, 3, {
        y: 0,
        ease: Expo.easeOut
      })
      TweenMax.to(this.$refs.titleText, 1, {
        y: 0,
        ease: Expo.easeInOut
      })
    })
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
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 102%;
    background: linear-gradient(rgba(75, 75, 75, 0) 0%, rgba(0, 0, 0, 1) 100%);
    opacity: 0;
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
