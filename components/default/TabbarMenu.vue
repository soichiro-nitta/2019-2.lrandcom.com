<template>
  <div class="TabbarMenu">
    <NLink to="/contents">
      <font-awesome-icon :icon="['far', 'pen-nib']" />
      <span>記事制作</span>
    </NLink>
    <NLink to="/film">
      <font-awesome-icon :icon="['far', 'video']" />
      <span>映像制作</span>
    </NLink>
    <NLink to="/website">
      <font-awesome-icon :icon="['far', 'desktop']" />
      <span>サイト制作</span>
    </NLink>
    <NLink to="/contact">
      <font-awesome-icon :icon="['far', 'smile-wink']" />
      <span>お問い合わせ</span>
    </NLink>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  props: {
    burgerOpened: {
      type: Boolean,
      required: true
    },
    closeBurger: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      menuProcess: false
    }
  },
  watch: {
    async $route() {
      await this.$delay(500)
      this.closeBurger()
    },
    async burgerOpened() {
      if (this.burgerOpened) {
        await this.$raf()
        TweenMax.to('.TabbarMenu', 0.6, {
          y: '0px',
          opacity: 1,
          ease: Expo.easeOut,
          startAt: {
            y: '30px'
          }
        })
      } else {
        await this.$raf()
        TweenMax.to('.TabbarMenu', 0.6, {
          y: '30px',
          opacity: 0,
          ease: Expo.easeOut
        })
      }
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
$burgerHeight: 55px;
$burgerOut: 10px;
$space: 17px;
$aMarginBottom: 35px;
$aAfterWidth: 3px;
$maxIconWidth: 18px;
$maxTextWidth: 64.2px;

.TabbarMenu {
  position: absolute;
  bottom: $burgerHeight + $burgerOut;
  right: 0;
  padding: $aMarginBottom * 0.7 0;
  width: $aAfterWidth * 2 + $space * 3 + $maxIconWidth + $maxTextWidth;
  background: white;
  border-radius: 15px;
  @include shadowBlue;
  opacity: 0;
  a {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: $aMarginBottom;
    padding-left: $aAfterWidth + $space;
    color: $blue2;
    transition: color 0.5s;
    will-change: color;
    svg {
      font-size: 18px;
    }
    span {
      margin-left: $space;
      font-size: 10px;
      line-height: 1;
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      width: $aAfterWidth;
      height: 32px;
      @include gradientPink;
      @include shadowPink;
      border-radius: 1.5px;
      transform: scale(0);
      transition: transform 0.5s;
      will-change: transform;
    }
  }
  a:last-child {
    margin-bottom: 0;
  }
  .nuxt-link-exact-active {
    color: $pink1;
    &:after {
      transform: scale(1);
    }
  }
}
</style>
