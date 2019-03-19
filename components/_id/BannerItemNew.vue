<template>
  <div class="BannerItemNew">
    <div class="head">
      {{ head }}
    </div>
    <div class="text">
      {{ body }}
    </div>
    <ButtonNew
      :to="to"
      :text="button"
      @click="clickButton"
    />
    <div
      class="close"
      @click="clickClose"
    >
      <div class="line1" />
      <div class="line2" />
    </div>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'
import ButtonNew from '~/components/base/ButtonNew'

export default {
  components: {
    ButtonNew
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
  async mounted() {
    if (localStorage['banner-' + this.to]) return
    await this.$raf()
    TweenMax.to(this.$el, 0.6, {
      opacity: 1,
      y: 0,
      startAt: {
        y: '30px'
      },
      ease: Expo.easeOut
    })
  },
  methods: {
    clickButton() {
      localStorage['banner-' + this.to] = 'true'
    },
    async clickClose() {
      await this.$raf()
      TweenMax.to(this.$el, 0.6, {
        opacity: 0,
        y: '30px',
        ease: Expo.easeOut
      })
      this.$emit('increment')
    }
  }
}
</script>

<style lang="scss">
.BannerItemNew {
  position: fixed;
  left: 20px;
  bottom: 130px;
  padding: 30px;
  width: calc(100% - 40px);
  text-align: center;
  background: white;
  border-radius: 20px;
  @include shadowBlue;
  opacity: 0;
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
    color: $blue4;
    line-height: 2;
  }
  .ButtonNew {
    margin: 15px auto 0;
  }
  .close {
    position: absolute;
    top: -6px;
    right: -6px;
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 15px;
    @include shadowBlue;
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
      background: $blue3;
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
      background: $blue3;
      border-radius: 1px;
      transform: rotate(45deg);
    }
  }
}
</style>
