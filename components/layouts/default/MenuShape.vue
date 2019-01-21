<template>
  <div class="MenuShape"/>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  props: {
    menu: {
      type: Boolean,
      required: true
    },
    opening: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isMobile: this.$device.isMobile
    }
  },
  watch: {
    async menu(menu) {
      if (menu) {
        await this.$delay(400)
        this.in()
      } else {
        this.out()
      }
    },
    async opening() {
      if (this.isMobile) return
      await this.$delay(900)
      this.in()
    }
  },
  methods: {
    in() {
      this.$el.style.display = 'block'
      requestAnimationFrame(() => {
        if (this.isMobile) {
          TweenMax.to(this.$el, 0.7, {
            right: 0,
            ease: Expo.easeOut
          })
        } else {
          TweenMax.to(this.$el, 0.7, {
            left: '10px',
            ease: Expo.easeOut
          })
        }
      })
    },
    out() {
      requestAnimationFrame(() => {
        TweenMax.to(this.$el, 0.7, {
          right: '-300px',
          ease: Expo.easeInOut,
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
.MenuShape {
  display: none;
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100%;
  background: #171717;
  @include pc {
    top: 10px;
    left: -300px;
    right: auto;
    height: calc(100% - 20px);
    border-radius: 20px;
  }
}
</style>
