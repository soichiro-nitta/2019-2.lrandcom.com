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
    <NLink to="/writer" class="right">
      <font-awesome-icon :icon="['far', 'flag-alt']" />
      <span>ライター募集</span>
    </NLink>
    <div ref="burger" class="burger">
      <font-awesome-icon :icon="['far', 'ellipsis-h-alt']" />
      <TabbarMenu
        :burger-opened="burgerOpened"
        :close-burger="closeBurger"
      />
    </div>
    <div
      ref="burgerLayer"
      class="burgerLayer"
      @click="clickBurger"
    />
    <div ref="share" class="share">
      <font-awesome-icon
        :icon="['far', 'share-alt']"
        class="shareIcon"
      />
      <div class="close">
        <div class="border1" />
        <div class="border2" />
      </div>
      <TabbarSocial
        :share-opened="shareOpened"
        :close-share="closeShare"
      />
    </div>
    <div class="shareLayer" @click="clickShare" />
    <div class="indicator" />
  </div>
</template>

<script>
import { TweenMax, Expo, Elastic } from 'gsap'
import TabbarSocial from '~/components/default/TabbarSocial'
import TabbarMenu from '~/components/default/TabbarMenu'

export default {
  components: {
    TabbarSocial,
    TabbarMenu
  },
  data() {
    return {
      num: 5,
      tabbarBottom: 8,
      tabbarWidth: 0,
      shareIconWidth: 0,
      burgerIconWidth: 0,
      iconsWidth: 0,
      leftOrigin: 0,
      shareOpened: false,
      burgerOpened: false
    }
  },
  watch: {
    async shareOpened() {
      if (this.shareOpened) {
        await this.$raf()
        TweenMax.to('.Tabbar .share', 1.2, {
          rotation: '720deg',
          ease: Elastic.easeOut.config(0.2, 0.3)
        })
        TweenMax.to('.Tabbar .shareIcon', 0.8, {
          scale: 0,
          ease: Expo.easeOut
        })
        TweenMax.to('.Tabbar .close', 0.8, {
          scale: 1,
          ease: Expo.easeOut
        })
      } else {
        await this.$raf()
        TweenMax.to('.Tabbar .share', 1.2, {
          rotation: '0deg',
          ease: Elastic.easeOut.config(0.2, 0.3)
        })
        TweenMax.to('.Tabbar .close', 0.8, {
          scale: 0,
          ease: Expo.easeOut
        })
        TweenMax.to('.Tabbar .shareIcon', 0.8, {
          scale: 1,
          ease: Expo.easeOut
        })
      }
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
    closeShare() {
      this.shareOpened = false
    },
    closeBurger() {
      this.burgerOpened = false
    },
    clickShare() {
      this.shareOpened = !this.shareOpened
      this.burgerOpened = false
    },
    clickBurger() {
      this.burgerOpened = !this.burgerOpened
      this.shareOpened = false
    },
    styleElements() {
      // tabbar全体とshareとburgerのwidthを取得
      this.tabbarWidth = this.$el.offsetWidth
      this.shareIconWidth = this.$refs.share.children[0].clientWidth
      this.burgerIconWidth = this.$refs.burger.children[0].clientWidth

      // 全iconのwidthの合計を取得
      Array.from(document.querySelectorAll('.Tabbar > a'), link => {
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
      this.$refs.burger.style.right = `${this.tabbarBottom +
        space * 0.7 -
        (this.$refs.burger.clientWidth - this.burgerIconWidth) / 2}px`
      this.$refs.burgerLayer.style.right = this.$refs.burger.style.right

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
$bottom: 8px;
$height: 100px;
$aPaddingTop: 15px;
$aFontSize: 18px;
$aSpanMarginTop: 12px;
$aSpanFontSize: 10px;
$shareHeight: 60px;
$shareOut: 15px;
$burgerHeight: 55px;
$burgerOut: 10px;

.Tabbar {
  display: flex;
  position: fixed;
  right: $bottom;
  left: $bottom;
  bottom: $bottom;
  margin: auto;
  width: calc(100% - #{$bottom * 2});
  height: $height;
  background: white;
  @include shadowBlue;
  border-radius: 15px 15px 15px 15px;
  opacity: 0;
  & > a {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    bottom: $bottom + $height -
      ($aPaddingTop + $aFontSize + $aSpanMarginTop + $aSpanFontSize);
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
      margin-top: $aSpanMarginTop;
      font-size: $aSpanFontSize;
      line-height: 1;
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
    position: fixed;
    right: 0;
    left: 0;
    bottom: $bottom + $height - ($shareHeight - $shareOut);
    margin: auto;
    color: white;
    width: $shareHeight;
    height: $shareHeight;
    font-size: 20px;
    border-radius: 50%;
    @include gradientBlue;
    @include shadowBlue;
    svg {
      @include absoluteCenter;
    }
    .close {
      @include absoluteCenter;
      transform: scale(0);
      .border1,
      .border2 {
        @include absoluteCenter;
        width: 3px;
        height: 20px;
        border-radius: 1.5px;
        background: white;
      }
      .border1 {
        transform: rotateZ(45deg);
      }
      .border2 {
        transform: rotateZ(-45deg);
      }
    }
  }
  .shareLayer {
    position: fixed;
    right: 0;
    left: 0;
    bottom: $bottom + $height - ($shareHeight - $shareOut);
    margin: auto;
    width: $shareHeight;
    height: $shareHeight;
  }
  .burger {
    @include flexCenter;
    position: fixed;
    right: 0;
    bottom: $height + $bottom - ($burgerHeight - $burgerOut);
    width: $burgerHeight;
    height: $burgerHeight;
    background: white;
    border-radius: 15px;
    @include shadowBlue;
    svg {
      color: $blue3;
      font-size: 22px;
    }
  }
  .burgerLayer {
    position: fixed;
    right: 0;
    bottom: $height + $bottom - ($burgerHeight - $burgerOut);
    width: $burgerHeight;
    height: $burgerHeight;
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
