import Vue from 'vue'
import VueWindowSize from 'vue-window-size'

Vue.use(VueWindowSize)

Vue.mixin({
  methods: {
    $loadWindow() {
      return new Promise(resolve => (window.onload = resolve))
    },
    $loadImage(src, func) {
      const img = new Image()
      img.onload = () => {
        func()
      }
      img.src = src
    },
    $delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    $raf() {
      return new Promise(resolve => requestAnimationFrame(resolve))
    },
    $completeLottie(anim) {
      return new Promise(resolve => anim.addEventListener('complete', resolve))
    }
  }
})
