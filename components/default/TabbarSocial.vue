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
        const clipboard = new ClipboardJS('.copy')
        clipboard.on('success', () => {})

        await this.$raf()
        TweenMax.to('.fb', 1.55, {
          x: '-74px',
          y: '-45px',
          scale: 1,
          ease: Expo.easeInOut
        })
        TweenMax.to('.tw', 1.4, {
          x: '-26px',
          y: '-65px',
          scale: 1,
          ease: Expo.easeInOut
        })
        TweenMax.to('.line', 1.25, {
          x: '26px',
          y: '-65px',
          scale: 1,
          ease: Expo.easeInOut
        })
        TweenMax.to('.copy', 1.1, {
          x: '74px',
          y: '-45px',
          scale: 1,
          ease: Expo.easeInOut
        })
      } else {
        await this.$raf()
        TweenMax.to('.fb', 1.1, {
          x: '0px',
          y: '0px',
          scale: 0,
          ease: Expo.easeInOut
        })
        TweenMax.to('.tw', 1.25, {
          x: '0px',
          y: '0px',
          scale: 0,
          ease: Expo.easeInOut
        })
        TweenMax.to('.line', 1.4, {
          x: '0px',
          y: '0px',
          scale: 0,
          ease: Expo.easeInOut
        })
        TweenMax.to('.copy', 1.55, {
          x: '0px',
          y: '0px',
          scale: 0,
          ease: Expo.easeInOut
        })
      }
    }
  },
  methods: {
    async clickCopy() {
      if (this.copyProcess) return
      this.copyProcess = true
      await this.$raf()
      TweenMax.to('.copy span', 0.6, {
        x: '0px',
        opacity: 1,
        ease: Expo.easeOut,
        startAt: {
          x: '-10px',
          opacity: 0
        }
      })
      await this.$delay(700)
      await this.$raf()
      TweenMax.to('.copy span', 0.6, {
        x: '10px',
        opacity: 0,
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
    color: $fb;
    transform: translate(0px, 0px) scale(0);
    svg {
      transform: rotateZ(-30deg);
    }
  }
  .tw {
    color: $tw;
    transform: translate(0px, 0px) scale(0);
    svg {
      transform: rotateZ(-10deg);
    }
  }
  .line {
    color: $line;
    transform: translate(0px, 0px) scale(0);
    svg {
      transform: rotateZ(10deg);
    }
  }
  .copy {
    color: white;
    @include gradientPink;
    @include shadowPink;
    transform: translate(0px, 0px) scale(0);
    // width: 95px;
    border-radius: 20px;
    svg {
      transform: rotateZ(30deg);
    }
    span {
      @include flexCenter;
      position: absolute;
      top: 0;
      left: 0;
      width: 95px;
      height: 40px;
      color: white;
      font-size: 10px;
      font-weight: bold;
      line-height: 1;
      letter-spacing: 0;
      // @include gradientPink;
      // @include shadowPink;
      opacity: 0;
    }
  }
}
</style>
