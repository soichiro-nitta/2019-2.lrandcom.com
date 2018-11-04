<template>
  <div class="TheNavigation">
    <div
      ref="switch"
      class="switch"
      @click="open"
    >
      <div
        ref="border1"
        class="border1"
      />
      <div
        ref="border2"
        class="border2"
      />
      <div
        ref="border3"
        class="border3"
      />
    </div>
    <div
      ref="mask"
      class="mask"
      @click="close"
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
            @click.native="close"
          >ホーム</nuxt-link>
        </li>
        <li>
          <nuxt-link
            class="num2"
            to="/articles"
            @click.native="close"
          >記事を読む</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/contents"
            class="num1"
            @click.native="close"
          >記事制作</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/film"
            class="num1"
            @click.native="close"
          >映像制作</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/website"
            class="num2"
            @click.native="close"
          >サイト制作</nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/contact"
            class="num3"
            @click.native="close"
          >お問い合わせ</nuxt-link>
        </li>
      </ul>
      <div
        ref="close"
        class="close"
        @click="close"
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
import { mapGetters } from 'vuex'
import { TweenMax, Expo } from 'gsap'

export default {
  computed: {
    ...mapGetters({
      opening: 'opening'
    })
  },
  watch: {
    async opening() {
      await this.$delay(400)
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.border1, 0.5, {
          scaleX: 1,
          ease: Expo.easeOut,
          delay: 0.4
        })
        TweenMax.to(this.$refs.border2, 0.5, {
          scaleX: 1,
          ease: Expo.easeOut,
          delay: 0.5
        })
        TweenMax.to(this.$refs.border3, 0.5, {
          scaleX: 1,
          ease: Expo.easeOut,
          delay: 0.6
        })
      })
    }
  },
  methods: {
    open() {
      console.log('open')
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
        TweenMax.to('.TheNavigation .menu .num1', 1.5, {
          x: 0,
          opacity: 1,
          ease: Expo.easeOut,
          delay: 0.3
        })
        TweenMax.to('.TheNavigation .menu .num2', 1.5, {
          x: 0,
          opacity: 1,
          ease: Expo.easeOut,
          delay: 0.4
        })
        TweenMax.to('.TheNavigation .menu .num3', 1.5, {
          x: 0,
          opacity: 1,
          ease: Expo.easeOut,
          delay: 0.5
        })
      })
    },
    close() {
      console.log('close')
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
        TweenMax.to('.TheNavigation .menu .num1', 1, {
          x: '30px',
          opacity: 0,
          ease: Expo.easeOut
        })
        TweenMax.to('.TheNavigation .menu .num2', 1, {
          x: '30px',
          opacity: 0,
          ease: Expo.easeOut
        })
        TweenMax.to('.TheNavigation .menu .num3', 1, {
          x: '30px',
          opacity: 0,
          ease: Expo.easeOut
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.TheNavigation {
  .switch {
    position: fixed;
    top: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    // mix-blend-mode: difference;
    .border1,
    .border2,
    .border3 {
      position: absolute;
      right: 0;
      left: 0;
      margin: auto;
      height: 2px;
      background: #fff;
      border-radius: 1px;
    }
    .border1 {
      top: 16.5px;
      width: 10px;
      transform: scaleX(0);
      transform-origin: center right;
    }
    .border2 {
      top: 23.5px;
      width: 15px;
      transform: scaleX(0);
      transform-origin: center left;
    }
    .border3 {
      top: 30.5px;
      width: 10px;
      transform: scaleX(0);
      transform-origin: center right;
    }
  }
  img {
    width: 40px;
    height: 40px;
  }
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
          transform: translateX(30px);
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
    background: #1c1c1c;
    opacity: 0;
  }
}
</style>
