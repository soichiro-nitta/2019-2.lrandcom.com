<template>
  <div class="Dashboard">
    <div class="head">
      SERVICES
    </div>
    <NLink to="/" class="left">
      <font-awesome-icon :icon="['far', 'home-lg-alt']" />
      <span>ホーム</span>
    </NLink>
    <NLink to="/articles" class="left">
      <font-awesome-icon :icon="['far', 'book-open']" />
      <span>記事を読む</span>
    </NLink>
    <div class="head jobs">
      JOBS
    </div>
    <NLink to="/writer" class="right">
      <font-awesome-icon :icon="['far', 'flag-alt']" />
      <span>ライター募集</span>
    </NLink>
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
        @closeShare="closeShare"
      />
    </div>
    <div class="shareLayer" @click="clickShare" />
  </div>
</template>

<script>
import { TweenMax, Expo, Elastic } from 'gsap'
import TabbarSocial from '~/components/default/TabbarSocial'

export default {
  components: {
    TabbarSocial
  },
  data() {
    return {
      shareOpened: false
    }
  },
  watch: {
    async shareOpened() {
      if (this.shareOpened) {
        await this.$raf()
        TweenMax.to('.Dashboard .share', 1.2, {
          rotation: '735deg',
          ease: Elastic.easeOut.config(0.2, 0.3)
        })
        TweenMax.to('.Dashboard .shareIcon', 0.8, {
          scale: 0,
          ease: Expo.easeOut
        })
        TweenMax.to('.Dashboard .share .close', 0.8, {
          scale: 1,
          ease: Expo.easeOut
        })
      } else {
        await this.$raf()
        TweenMax.to('.Dashboard .share', 1.2, {
          rotation: '0deg',
          ease: Elastic.easeOut.config(0.2, 0.3)
        })
        TweenMax.to('.Dashboard .share .close', 0.8, {
          scale: 0,
          ease: Expo.easeOut
        })
        TweenMax.to('.Dashboard .shareIcon', 0.8, {
          scale: 1,
          ease: Expo.easeOut
        })
      }
    }
  },
  methods: {
    closeShare() {
      this.shareOpened = false
    },
    clickShare() {
      this.shareOpened = !this.shareOpened
      this.burgerOpened = false
    }
  }
}
</script>

<style lang="scss" scoped>
.Dashboard {
  position: fixed;
  top: 0;
  left: 0;
  padding: 60px 0 0 60px;
  width: 300px;
  height: 100%;
  background: white;
  // @include shadowBlue();
  .head {
    margin-bottom: 40px;
    color: $blue4;
    // @include gradientTextBlue;
    font-size: 14px;
    font-weight: bold;
    &.jobs {
      padding-top: 20px;
    }
  }
  a {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 40px;
    color: $blue2;
    transition: color 0.5s;
    will-change: color;
    svg {
      font-size: 18px;
    }
    span {
      margin-left: 25px;
      font-size: 12px;
      font-weight: bold;
      line-height: 1;
    }
    &:after {
      content: '';
      position: absolute;
      right: 0;
      width: 3px;
      height: 27px;
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
    left: 250px;
    bottom: 60px;
    margin: auto;
    color: white;
    width: 60px;
    height: 60px;
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
    left: 250px;
    bottom: 60px;
    margin: auto;
    width: 60px;
    height: 60px;
  }
}
</style>
