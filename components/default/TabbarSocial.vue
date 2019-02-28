<template>
  <div class="TabbarSocial">
    <a class="fb" :href="fb" target="_blank">
      <font-awesome-icon :icon="['fab', 'facebook']" />
    </a>
    <a class="tw" :href="tw" target="_blank">
      <font-awesome-icon :icon="['fab', 'twitter']" />
    </a>
    <a class="line" :href="line" target="_blank">
      <font-awesome-icon :icon="['fab', 'line']" />
    </a>
    <span class="copy" :data-clipboard-text="copy" @click="clickCopy">
      <div class="bg" />
      <font-awesome-icon :icon="['far', 'copy']" />
      <span>コピーしました</span>
    </span>
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'
import { TweenMax, Expo } from 'gsap'
import ClipboardJS from 'clipboard'

export default {
  props: {
    shareOpened: {
      type: Boolean,
      required: true
    },
    closeShare: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      fb: '',
      tw: '',
      line: '',
      copy: '',
      copyProcess: false
    }
  },
  watch: {
    $route() {
      this.closeShare()
    },
    async shareOpened() {
      if (this.shareOpened) {
        const currentUrl = URL.SITE + this.$route.path
        this.fb = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`
        this.tw = `https://twitter.com/share?url=${currentUrl}&text=${
          document.title
        }`
        this.line = `https://timeline.line.me/social-plugin/share?url=${currentUrl}`
        this.copy = `${document.title} ${currentUrl}`

        await this.$raf()
        TweenMax.to('.fb', 1.45, {
          x: '-74px',
          y: '-45px',
          scale: 1,
          ease: Expo.easeOut
        })
        TweenMax.to('.tw', 1.3, {
          x: '-26px',
          y: '-65px',
          scale: 1,
          ease: Expo.easeOut
        })
        TweenMax.to('.line', 1.15, {
          x: '26px',
          y: '-65px',
          scale: 1,
          ease: Expo.easeOut
        })
        TweenMax.to('.copy', 1, {
          x: '74px',
          y: '-45px',
          scale: 1,
          ease: Expo.easeOut
        })
      } else {
        await this.$raf()
        TweenMax.to('.fb', 1, {
          x: '0px',
          y: '0px',
          scale: 0,
          ease: Expo.easeOut
        })
        TweenMax.to('.tw', 1.15, {
          x: '0px',
          y: '0px',
          scale: 0,
          ease: Expo.easeOut
        })
        TweenMax.to('.line', 1.3, {
          x: '0px',
          y: '0px',
          scale: 0,
          ease: Expo.easeOut
        })
        TweenMax.to('.copy', 1.45, {
          x: '0px',
          y: '0px',
          scale: 0,
          ease: Expo.easeOut
        })
      }
    }
  },
  mounted() {
    const clipboard = new ClipboardJS('.copy')
    clipboard.on('success', () => {})
  },
  methods: {
    async clickCopy() {
      if (this.copyProcess) return
      this.copyProcess = true
      await this.$raf()
      TweenMax.to('.copy .bg', 0.3, {
        width: '95px',
        ease: Expo.easeOut
      })
      TweenMax.to('.copy svg', 0.6, {
        scale: 0,
        ease: Expo.easeOut
      })
      TweenMax.to('.copy span', 0.6, {
        x: '0px',
        opacity: 1,
        ease: Expo.easeOut,
        startAt: {
          x: '-10px'
        }
      })
      await this.$delay(700)
      await this.$raf()
      TweenMax.to('.copy .bg', 0.3, {
        width: '40px',
        ease: Expo.easeOut
      })
      TweenMax.to('.copy span', 0.6, {
        x: '-10px',
        opacity: 0,
        ease: Expo.easeOut
      })
      TweenMax.to('.copy svg', 0.6, {
        scale: 1,
        ease: Expo.easeOut
      })
      await this.$delay(600)
      this.copyProcess = false
    }
  }
}
</script>

<style lang="scss" scoped>
$tabbarBottom: 8px;
$tabbarHeight: 100px;
$shareOut: 15px;
$bottomOrigin: $tabbarBottom + $tabbarHeight + $shareOut;

.TabbarSocial {
  .fb,
  .tw,
  .line,
  .copy {
    @include flexCenter;
    @include absoluteCenter;
    bottom: auto;
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 50%;
    @include shadowBlue;
    svg {
      font-size: 16px;
    }
  }
  .fb {
    transform: translate(0px, 0px) scale(0);
    svg {
      color: $fb;
      transform: rotateZ(-30deg);
    }
  }
  .tw {
    transform: translate(0px, 0px) scale(0);
    svg {
      color: $tw;
      transform: rotateZ(-10deg);
    }
  }
  .line {
    transform: translate(0px, 0px) scale(0);
    svg {
      color: $line;
      transform: rotateZ(10deg);
    }
  }
  .copy {
    background: none;
    box-shadow: none;
    transform: translate(0px, 0px) scale(0);
    .bg {
      @include absoluteCenter;
      right: auto;
      width: 40px;
      height: 100%;
      @include gradientPink;
      @include shadowPink;
      border-radius: 20px;
    }
    svg {
      @include absoluteCenter;
      color: white;
      transform: rotateZ(30deg);
    }
    span {
      @include flexCenter;
      @include absoluteCenter;
      width: 95px;
      height: 40px;
      color: white;
      font-size: 10px;
      font-weight: bold;
      line-height: 1;
      letter-spacing: 0;
      opacity: 0;
    }
  }
}
</style>
