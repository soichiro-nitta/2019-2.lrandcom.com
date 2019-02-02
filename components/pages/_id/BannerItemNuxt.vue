<template>
  <div class="BannerItemNuxt">
    <div class="head">
      {{ head }}
    </div>
    <div class="text">
      {{ body }}
    </div>
    <ButtonNuxt
      :to="to"
      :text="button"
    />
    <div
      class="close"
      @click="click"
    >
      <div class="line1" />
      <div class="line2" />
    </div>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'
import ButtonNuxt from '~/components/base/ButtonNuxt'

export default {
  components: {
    ButtonNuxt
  },
  props: {
    num: {
      type: Number,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    head: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    button: {
      type: String,
      required: true
    }
  },
  mounted() {
    requestAnimationFrame(() => {
      TweenMax.to(this.$el, 1, {
        opacity: 1,
        y: 0,
        ease: Expo.easeOut
      })
    })
  },
  methods: {
    click() {
      requestAnimationFrame(() => {
        TweenMax.to(this.$el, 0.7, {
          opacity: 0,
          y: '-10px',
          ease: Expo.easeOut
        })
      })
      this.$emit('increment')
    }
  }
}
</script>

<style lang="scss">
.BannerItemNuxt {
  position: fixed;
  left: 20px;
  bottom: 20px;
  padding: 30px;
  width: calc(100% - 40px);
  text-align: center;
  background: #171717;
  border-radius: 20px;
  opacity: 0;
  transform: translateY(10px);
  @include pc {
    width: 400px;
    left: auto;
    right: 30px;
  }
  .head {
    font-size: 14px;
    font-weight: bold;
  }
  .text {
    margin: 15px auto 0;
    font-size: 12px;
    color: #999;
    line-height: 2;
  }
  .ButtonNuxt {
    margin: 15px auto 0;
  }
  .close {
    position: absolute;
    top: -6px;
    right: -6px;
    width: 30px;
    height: 30px;
    background: #121212;
    border-radius: 15px;
    .line1 {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 10px;
      height: 2px;
      border-radius: 1px;
      background: white;
      transform: rotate(-45deg);
    }
    .line2 {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 10px;
      height: 2px;
      border-radius: 1px;
      background: white;
      transform: rotate(45deg);
    }
  }
}
</style>
