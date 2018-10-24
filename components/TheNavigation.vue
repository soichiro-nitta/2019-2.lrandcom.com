<template>
  <div class="TheNavigation">
    <div
      ref="menu"
      class="menu"
    />
    <div
      ref="switch"
      class="switch"
      @click="toggle"
    >
      <div
        ref="border1"
        class="border1"
      />
      <div
        ref="border2"
        class="border2"
      />
      <div
        ref="border3"
        class="border3"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { TweenMax, Expo } from 'gsap'

export default {
  computed: {
    ...mapGetters({
      opening: 'opening'
    })
  },
  watch: {
    async opening() {
      await this.$delay(400)
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.border1, 0.5, {
          scaleX: 1,
          ease: Expo.easeOut,
          delay: 0.4
        })
        TweenMax.to(this.$refs.border2, 0.5, {
          scaleX: 1,
          ease: Expo.easeOut,
          delay: 0.5
        })
        TweenMax.to(this.$refs.border3, 0.5, {
          scaleX: 1,
          ease: Expo.easeOut,
          delay: 0.6
        })
      })
    }
  },
  methods: {
    toggle() {
      !this.opened ? this.open() : this.close()
    },
    open() {
      console.log('open')
    }
  }
}
</script>

<style lang="scss" scoped>
.TheNavigation {
  .switch {
    position: fixed;
    top: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    .border1,
    .border2,
    .border3 {
      position: absolute;
      right: 0;
      left: 0;
      margin: auto;
      height: 2px;
      background: #fff;
      border-radius: 1px;
    }
    .border1 {
      top: 16.5px;
      width: 10px;
      transform: scaleX(0);
      transform-origin: center right;
    }
    .border2 {
      top: 23.5px;
      width: 15px;
      transform: scaleX(0);
      transform-origin: center left;
    }
    .border3 {
      top: 30.5px;
      width: 10px;
      transform: scaleX(0);
      transform-origin: center right;
    }
  }
  img {
    width: 40px;
    height: 40px;
  }
}
</style>
