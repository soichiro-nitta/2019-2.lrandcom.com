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
      tabbarWidth: 0,
      shareIconWidth: 0,
      burgerIconWidth: 0,
      iconsWidth: 0,
      leftOrigin: 0
    }
  },
  watch: {
    $route() {
      console.log('route watch')
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
      document.querySelector('.Tabbar .burger').style.right = `${space * 0.7 -
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
            ? this.leftOrigin + space * 0.7 - diff
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
  display: flex;
  position: fixed;
  right: 8px;
  left: 8px;
  bottom: 8px;
  margin: auto;
  width: calc(100% - 16px);
  height: 100px;
  background: white;
  @include shadowBlue;
  border-radius: 15px 15px 15px 15px;
  opacity: 0;
  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 18px;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 1;
    color: $blue2;
    svg {
      vertical-align: bottom;
    }
    span {
      display: inline-block;
      margin-top: 10px;
      font-size: 10px;
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
      transform: scaleX(0);
    }
  }
  .nuxt-link-exact-active {
    color: $pink1;
    transition: color 0.3s;
    &:after {
      transform: scaleX(1);
      transition: transform 0.3s;
    }
  }
  .share {
    @include flexCenter;
    position: absolute;
    top: -15px;
    right: 0;
    left: 0;
    margin: auto;
    color: white;
    width: 60px;
    height: 60px;
    font-size: 20px;
    border-radius: 50%;
    @include gradientBlue;
    @include shadowBlue;
  }
  .burger {
    @include flexCenter;
    position: absolute;
    top: -10px;
    right: 0;
    width: 55px;
    height: 55px;
    color: $blue2;
    font-size: 22px;
    background: white;
    border-radius: 15px;
    @include shadowBlue;
  }
  .indicator {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 60px;
    height: 5px;
    border-radius: 2.5px;
    @include gradientBlue;
  }
}
</style>
