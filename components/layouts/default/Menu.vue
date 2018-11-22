<template>
  <div class="Navigation">
    <div
      ref="mask"
      class="mask"
      @click="click"
    />
    <div
      ref="menu"
      class="menu"
    >
      <ul>
        <li>
          <nuxt-link
            to="/"
            class="num3"
            @click.native="click"
          >ホーム</nuxt-link>
        </li>
        <!-- <li>
          <nuxt-link
            class="num2"
            to="/articles"
            @click.native="click"
          >記事を読む</nuxt-link>
        </li> -->
        <li>
          <nuxt-link
            to="/contents"
            class="num1"
            @click.native="click"
          >記事制作について</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/film"
            class="num1"
            @click.native="click"
          >映像制作について</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/website"
            class="num2"
            @click.native="click"
          >サイト制作について</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/contact"
            class="num3"
            @click.native="click"
          >お問い合わせ</nuxt-link>
        </li>
      </ul>
      <div
        ref="close"
        class="close"
        @click="click"
      />
      <div
        ref="closeLine1"
        class="closeLine1"
      >
        <div
          ref="closeLine1Inner"
          class="closeLine1Inner"
        />
      </div>
      <div
        ref="closeLine2"
        class="closeLine2"
      >
        <div
          ref="closeLine2Inner"
          class="closeLine2Inner"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  props: {
    menu: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    menu(menu) {
      // await this.$delay(1000)
      menu ? this.tweenIn() : this.tweenOut()
      // this.tweenIn()
    }
  },
  methods: {
    click() {
      this.$emit('closeMenu')
    },
    tweenIn() {
      this.$refs.mask.style.display = 'block'
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.mask, 1, {
          opacity: 0.5,
          ease: Expo.easeOut
        })
        TweenMax.to(this.$refs.menu, 0.7, {
          right: 0,
          ease: Expo.easeOut
        })
        TweenMax.to(this.$refs.close, 1, {
          left: '-20px',
          ease: Expo.easeOut,
          delay: 0.4
        })
        TweenMax.to(this.$refs.closeLine1Inner, 0.5, {
          scaleX: 1,
          ease: Expo.easeOut,
          delay: 0.7
        })
        TweenMax.to(this.$refs.closeLine2Inner, 0.5, {
          scaleX: 1,
          ease: Expo.easeOut,
          delay: 0.8
        })
        TweenMax.to('.Navigation .menu .num1', 1, {
          x: 0,
          opacity: 1,
          ease: Expo.easeOut,
          delay: 0.3
        })
        TweenMax.to('.Navigation .menu .num2', 2, {
          x: 0,
          opacity: 1,
          ease: Expo.easeOut,
          delay: 0.3
        })
        TweenMax.to('.Navigation .menu .num3', 3, {
          x: 0,
          opacity: 1,
          ease: Expo.easeOut,
          delay: 0.3
        })
      })
    },
    tweenOut() {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.mask, 1, {
          opacity: 0,
          ease: Expo.easeOut,
          onComplete: () => {
            this.$refs.mask.style.display = 'none'
          }
        })
        TweenMax.to(this.$refs.menu, 0.7, {
          right: '-300px',
          ease: Expo.easeInOut
        })
        TweenMax.to(this.$refs.close, 1, {
          left: 0,
          ease: Expo.easeInOut
        })
        TweenMax.to(this.$refs.closeLine1Inner, 0.5, {
          scaleX: 0,
          ease: Expo.easeOut
        })
        TweenMax.to(this.$refs.closeLine2Inner, 0.5, {
          scaleX: 0,
          ease: Expo.easeOut
        })
        TweenMax.to('.Navigation .menu .num1', 1, {
          x: '40px',
          opacity: 0,
          ease: Expo.easeOut
        })
        TweenMax.to('.Navigation .menu .num2', 1, {
          x: '40px',
          opacity: 0,
          ease: Expo.easeOut
        })
        TweenMax.to('.Navigation .menu .num3', 1, {
          x: '40px',
          opacity: 0,
          ease: Expo.easeOut
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Navigation {
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    position: fixed;
    top: 0;
    right: -300px;
    width: 300px;
    height: 100%;
    background: #171717;
    ul {
      li {
        a {
          display: inline-block;
          font-size: 15px;
          font-weight: bold;
          line-height: 1;
          opacity: 0;
          transform: translateX(40px);
        }
      }
      li:not(:last-child) {
        margin-bottom: 30px;
      }
    }
    .close {
      position: absolute;
      top: calc(50% - 50px);
      left: 0;
      width: 100px;
      height: 100px;
      background: #171717;
      border-radius: 50%;
    }
    .closeLine1,
    .closeLine2 {
      position: absolute;
      top: calc(50% - 1px);
      left: -3px;
      width: 12px;
      height: 2px;
    }
    .closeLine1 {
      transform: rotate(45deg);
    }
    .closeLine2 {
      transform: rotate(-45deg);
    }
    .closeLine1Inner,
    .closeLine2Inner {
      width: 100%;
      height: 100%;
      background: white;
      border-radius: 1px;
      transform: scaleX(0);
      transform-origin: right center;
    }
  }
  .mask {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
  }
}
</style>
