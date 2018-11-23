<template>
  <div class="MenuClose">
    <div
      ref="close"
      class="close"
      @click="closeMenu"
    />
    <div
      ref="closeLine1"
      class="closeLine1"
    >
      <div
        ref="closeLine1Inner"
        class="closeLine1Inner"
      />
    </div>
    <div
      ref="closeLine2"
      class="closeLine2"
    >
      <div
        ref="closeLine2Inner"
        class="closeLine2Inner"
      />
    </div>
  </div>
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
        await this.$delay(700)
        this.in()
      } else {
        this.out()
      }
    }
  },
  methods: {
    closeMenu() {
      this.$emit('closeMenu')
    },
    in() {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.close, 1, {
          left: '-20px',
          ease: Expo.easeOut
        })
        TweenMax.to(this.$refs.closeLine1Inner, 0.5, {
          scaleX: 1,
          ease: Expo.easeOut,
          delay: 0.3
        })
        TweenMax.to(this.$refs.closeLine2Inner, 0.5, {
          scaleX: 1,
          ease: Expo.easeOut,
          delay: 0.4
        })
      })
    },
    out() {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.close, 1, {
          left: 0,
          ease: Expo.easeInOut
        })
        TweenMax.to(this.$refs.closeLine1Inner, 0.5, {
          scaleX: 0,
          ease: Expo.easeOut
        })
        TweenMax.to(this.$refs.closeLine2Inner, 0.5, {
          scaleX: 0,
          ease: Expo.easeOut
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.MenuClose {
  .close {
    position: absolute;
    top: calc(50% - 50px);
    left: 0;
    width: 100px;
    height: 100px;
    background: #171717;
    border-radius: 50%;
  }
  .closeLine1,
  .closeLine2 {
    position: absolute;
    top: calc(50% - 1px);
    left: -3px;
    width: 12px;
    height: 2px;
  }
  .closeLine1 {
    transform: rotate(45deg);
  }
  .closeLine2 {
    transform: rotate(-45deg);
  }
  .closeLine1Inner,
  .closeLine2Inner {
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 1px;
    transform: scaleX(0);
    transform-origin: right center;
  }
}
</style>
