<template>
  <ul class="Services">
    <li>
      <nuxt-link ref="contents" to="/contents">
        <div class="thumb">
          <font-awesome-icon :icon="['far', 'pen-nib']" />
        </div>
        <div class="text">
          記事制作
        </div>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link ref="film" to="/film">
        <div class="thumb">
          <font-awesome-icon :icon="['far', 'video']" />
        </div>
        <div class="text">
          映像制作
        </div>
      </nuxt-link>
    </li>
    <li>
      <nuxt-link ref="website" to="/website">
        <div class="thumb">
          <font-awesome-icon :icon="['far', 'desktop']" />
        </div>
        <div class="text">
          サイト制作
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  props: {
    off: {
      type: Number,
      required: false,
      default: 0
    },
    leave: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  watch: {
    leave() {
      this.out()
    }
  },
  mounted() {
    const elements = {
      1: this.$refs.contents.$el,
      2: this.$refs.film.$el,
      3: this.$refs.website.$el
    }
    if (this.off !== 0) {
      elements[this.off].style.opacity = 0.5
      elements[this.off].disabled = true
    }
    this.in()
  },
  methods: {
    in() {
      requestAnimationFrame(() => {
        TweenMax.staggerTo(
          '.Services li',
          0.8,
          {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut
          },
          0.05
        )
      })
    },
    out() {
      requestAnimationFrame(() => {
        TweenMax.staggerTo(
          '.Services li',
          0.5,
          {
            opacity: 0,
            y: '-100%',
            ease: Expo.easeIn
          },
          0.05
        )
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Services {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: calc(100% - 40px);
  @include pc {
    max-width: 700px;
  }
  li {
    width: calc(100% / 3 - 9px);
    background: white;
    border-radius: 15px;
    @include shadowBlue;
    opacity: 0;
    transform: translate(0, 30%);
    @include pc {
      width: calc(100% / 3 - 14px);
    }
    a {
      display: block;
      padding: 25px 0;
      width: 100%;
      height: 100%;
      text-align: center;
      @include pc {
        @include flexCenter;
        padding: 30px 0;
      }
      .thumb {
        font-size: 20px;
        line-height: 1;
        @include pc {
          font-size: 24px;
        }
      }
      .text {
        margin-top: 15px;
        font-size: 14px;
        font-weight: bold;
        line-height: 1;
        @include pc {
          margin: 0 0 0 30px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
