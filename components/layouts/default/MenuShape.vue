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
        await this.$delay(500)
        this.in()
      } else {
        this.out()
      }
    }
  },
  methods: {
    in() {
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
          ease: Expo.easeInOut
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.MenuShape {
  position: absolute;
  top: 0;
  right: -300px;
  width: 100%;
  height: 100%;
  background: #171717;
}
</style>
