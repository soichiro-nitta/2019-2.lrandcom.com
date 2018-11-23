<template>
  <div
    class="Shade"
    @click="click"
  />
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  props: {
    menu: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    menu(menu) {
      menu ? this.in() : this.out()
    }
  },
  methods: {
    click() {
      this.$emit('closeMenu')
    },
    in() {
      this.$el.style.display = 'block'
      requestAnimationFrame(() => {
        TweenMax.to(this.$el, 1, {
          opacity: 0.5,
          ease: Expo.easeOut
        })
      })
    },
    out() {
      requestAnimationFrame(() => {
        TweenMax.to(this.$el, 1, {
          opacity: 0,
          ease: Expo.easeOut,
          onComplete: () => {
            this.$el.style.display = 'none'
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Shade {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
}
</style>
