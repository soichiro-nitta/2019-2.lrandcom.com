<template>
  <div class="Tabbar">
    <NLink to="/" class="left">
      <font-awesome-icon :icon="['far', 'home-lg-alt']" />
      <span>ホーム</span>
    </NLink>
    <NLink to="/articles" class="left">
      <font-awesome-icon :icon="['far', 'book-open']" />
      <span>記事を読む</span>
    </NLink>
    <div ref="share" class="share">
      <font-awesome-icon :icon="['far', 'share-alt']" />
    </div>
    <NLink to="/writer" class="right">
      <font-awesome-icon :icon="['far', 'flag-alt']" />
      <span>ライター募集</span>
    </NLink>
    <div ref="burger" class="burger">
      <font-awesome-icon :icon="['far', 'ellipsis-h-alt']" />
    </div>
    <div class="indicator" />
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  data() {
    return {
      num: 5,
      tabbarBottom: 8,
      tabbarWidth: 0,
      shareIconWidth: 0,
      burgerIconWidth: 0,
      iconsWidth: 0,
      leftOrigin: 0
    }
  },
  async mounted() {
    this.styleElements()
    await this.$raf()
    this.in()
  },
  methods: {
    in() {
      TweenMax.to(this.$el, 2, {
        opacity: 1,
        ease: Expo.easeOut
      })
    },
    styleElements() {
      // tabbar全体とshareとburgerのwidthを取得
      this.tabbarWidth = this.$el.offsetWidth
      this.shareIconWidth = this.$refs.share.children[0].clientWidth
      this.burgerIconWidth = this.$refs.burger.children[0].clientWidth

      // 全iconのwidthの合計を取得
      Array.from(document.querySelectorAll('.Tabbar a'), link => {
        const icon = link.children[0]
        this.iconsWidth += icon.clientWidth
      })

      // 上記から隙間の合計を取得
      const space =
        (this.tabbarWidth -
          this.shareIconWidth -
          this.burgerIconWidth -
          this.iconsWidth) /
        (this.num + 0.4)

      // burgerを配置
      document.querySelector('.Tabbar .burger').style.right = `${this
        .tabbarBottom +
        space * 0.7 -
        (this.$refs.burger.clientWidth - this.burgerIconWidth) / 2}px`

      // 右側のアイコンを配置
      const link = document.querySelector('.Tabbar .right')
      const icon = link.children[0]
      const text = link.children[1]
      const diff =
        icon.clientWidth >= text.clientWidth
          ? 0
          : (text.clientWidth - icon.clientWidth) / 2
      link.style.left = `calc(50% + ${this.shareIconWidth / 2}px + ${space -
        diff}px)`

      // 左側のアイコンを配置
      Array.from(document.querySelectorAll('.Tabbar .left'), (link, index) => {
        const icon = link.children[0]
        const text = link.children[1]
        const diff =
          icon.clientWidth >= text.clientWidth
            ? 0
            : (text.clientWidth - icon.clientWidth) / 2
        const left =
          index === 0
            ? this.tabbarBottom + space * 0.7 - diff
            : this.leftOrigin + space - diff
        link.style.left = `${left}px`
        this.leftOrigin = left + diff + icon.clientWidth
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Tabbar {
  $TabbarBottom: 8px;
  $TabbarHeight: 100px;
  $shareHeight: 60px;
  display: flex;
  position: fixed;
  right: $TabbarBottom;
  left: $TabbarBottom;
  bottom: $TabbarBottom;
  margin: auto;
  width: calc(100% - #{$TabbarBottom * 2});
  height: $TabbarHeight;
  background: white;
  @include shadowBlue;
  border-radius: 15px 15px 15px 15px;
  opacity: 0;
  a {
    $aPaddingTop: 15px;
    $aFontSize: 18px;
    $spanMarginTop: 12px;
    $spanFontSize: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    bottom: $TabbarBottom + $TabbarHeight -
      ($aPaddingTop + $aFontSize + $spanMarginTop + $spanFontSize);
    left: 0;
    padding-top: $aPaddingTop;
    font-size: $aFontSize;
    letter-spacing: 0;
    line-height: 1;
    color: $blue2;
    transition: color 0.5s;
    will-change: color;
    span {
      display: inline-block;
      margin-top: $spanMarginTop;
      font-size: $spanFontSize;
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      width: 35px;
      height: 3px;
      @include gradientPink;
      @include shadowPink;
      border-radius: 1.5px;
      transform: scale(0);
      transition: transform 0.5s;
      will-change: transform;
    }
  }
  .nuxt-link-exact-active {
    color: $pink1;
    &:after {
      transform: scale(1);
    }
  }
  .share {
    $shareOverlap: 15px;
    @include flexCenter;
    position: fixed;
    bottom: $TabbarHeight + $TabbarBottom - ($shareHeight - $shareOverlap);
    right: 0;
    left: 0;
    margin: auto;
    color: white;
    width: 60px;
    height: $shareHeight;
    font-size: 20px;
    border-radius: 50%;
    @include gradientBlue;
    @include shadowBlue;
  }
  .burger {
    $burgerHeight: 55px;
    $burgerOverlap: 10px;
    @include flexCenter;
    position: fixed;
    right: 0;
    bottom: $TabbarHeight + $TabbarBottom - ($burgerHeight - $burgerOverlap);
    width: $burgerHeight;
    height: $burgerHeight;
    color: $blue2;
    font-size: 22px;
    background: white;
    border-radius: 15px;
    @include shadowBlue;
  }
  .indicator {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 8px;
    margin: auto;
    width: $shareHeight;
    height: 5px;
    border-radius: 2.5px;
    @include gradientBlue;
  }
}
</style>
