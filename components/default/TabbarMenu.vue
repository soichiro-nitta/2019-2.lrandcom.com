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
      <span>会社概要<br><br>お問い合わせ</span>
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
    }
  },
  watch: {
    async $route() {
      await this.$delay(500)
      this.$emit('closeBurger')
    },
    async burgerOpened() {
      this.$emit('menuStart')
      if (this.burgerOpened) {
        this.$el.style.display = 'block'
        await this.$raf()
        TweenMax.to('.TabbarMenu', 0.6, {
          y: '0px',
          opacity: 1,
          ease: Expo.easeOut,
          startAt: {
            y: '30px'
          }
        })
        await this.$delay(600)
      } else {
        await this.$raf()
        TweenMax.to('.TabbarMenu', 0.6, {
          y: '30px',
          opacity: 0,
          ease: Expo.easeOut
        })
        await this.$delay(600)
        this.$el.style.display = 'none'
      }
      this.$emit('menuComplete')
    }
  }
}
</script>

<style lang="scss" scoped>
$tabbarBottom: 8px;
$tabbarHeight: 100px;
$burgerOut: 7px;
$space: 15px;
$aMarginBottom: 32.5px;
$aAfterWidth: 3px;
$maxIconWidth: 16px;
$maxTextWidth: 64.2px;

.TabbarMenu {
  display: none;
  position: fixed;
  bottom: $tabbarBottom * 2 + $tabbarHeight + $burgerOut;
  right: $tabbarBottom;
  padding: $aMarginBottom * 0.8 0;
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
      font-size: 16px;
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
      height: 27px;
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
