<template>
  <div class="TabbarSocial">
    <div class="fb">
      <font-awesome-icon :icon="['fab', 'facebook']" />
    </div>
    <div class="tw">
      <font-awesome-icon :icon="['fab', 'twitter']" />
    </div>
    <div class="copy">
      <font-awesome-icon :icon="['far', 'copy']" />
    </div>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  props: {
    shareOpened: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    async shareOpened() {
      if (this.shareOpened) {
        await this.$raf()
        TweenMax.to('.fb', 1.6, {
          x: '-52.5px',
          y: '-50px',
          scale: 1,
          ease: Expo.easeInOut
        })
        TweenMax.to('.tw', 1.4, {
          y: '-65px',
          scale: 1,
          ease: Expo.easeInOut
        })
        TweenMax.to('.copy', 1.2, {
          x: '52.5px',
          y: '-50px',
          scale: 1,
          ease: Expo.easeInOut
        })
      } else {
        await this.$raf()
        TweenMax.to('.fb', 1.2, {
          x: '0px',
          y: '0px',
          scale: 0,
          ease: Expo.easeInOut
        })
        TweenMax.to('.tw', 1.4, {
          y: '0px',
          scale: 0,
          ease: Expo.easeInOut
        })
        TweenMax.to('.copy', 1.6, {
          x: '0px',
          y: '0px',
          scale: 0,
          ease: Expo.easeInOut
        })
      }
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
  .copy {
    @include flexCenter;
    @include absoluteCenter;
    bottom: auto;
    width: 40px;
    height: 40px;
    background: white;
    font-size: 16px;
    border-radius: 50%;
    @include shadowBlue;
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
  }
  .copy {
    color: $pink1;
    transform: translate(0px, 0px) scale(0);
    svg {
      transform: rotateZ(30deg);
    }
  }
}
</style>
