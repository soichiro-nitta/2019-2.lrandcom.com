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
    }
  },
  methods: {
    in() {
      this.$el.style.display = 'block'
      requestAnimationFrame(() => {
        TweenMax.to(this.$el, 0.7, {
          right: 0,
          ease: Expo.easeOut
        })
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
    left: -300px;
    right: auto;
  }
}
</style>
