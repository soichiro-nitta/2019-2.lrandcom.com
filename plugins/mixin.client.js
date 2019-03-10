import Vue from 'vue'
import VueWindowSize from 'vue-window-size'

Vue.use(VueWindowSize)

Vue.mixin({
  methods: {
    $loadWindow() {
      return new Promise(resolve => (window.onload = resolve))
    },
    $loadImage(src) {
      return new Promise(resolve => {
        const img = new Image()
        img.onload = resolve
        img.src = src
      })
    },
    $delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    $raf() {
      return new Promise(resolve => requestAnimationFrame(resolve))
    },
    $completeLottie(anim) {
      return new Promise(resolve => anim.addEventListener('complete', resolve))
    },
    $canplayVideo(video) {
      return new Promise(resolve => video.addEventListener('canplay', resolve))
    },
    async $playVideo(video, rand) {
      video.load()
      await this.$canplayVideo(video)
      if (rand) {
        const duration = video.duration // 動画の尺
        const rand = Math.floor(Math.random() * (duration + 1 - 0)) // 0 ~ durationの乱数
        video.currentTime = rand // 再生開始時間を指定
      }
      video.play()
    }
  }
})
