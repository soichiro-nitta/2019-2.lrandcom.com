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
          <nuxt-link to="/website">ホーム</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/website">記事を読む</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contents">記事制作</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/film">映像制作</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/website">サイト制作</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/website">お問い合わせ</nuxt-link>
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
      />
      <div
        ref="closeLine2"
        class="closeLine2"
      />
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
      requestAnimationFrame(() => {
        this.$refs.mask.style.display = 'block'
        TweenMax.to(this.$refs.mask, 0.7, {
          opacity: 0.5,
          ease: Expo.easeInOut
        })
        TweenMax.to(this.$refs.menu, 0.7, {
          right: 0,
          ease: Expo.easeInOut
        })
        TweenMax.to(this.$refs.close, 0.7, {
          left: '-20px',
          ease: Expo.easeInOut,
          delay: 0.3
        })
        TweenMax.to(this.$refs.closeLine1, 0.7, {
          left: '-3px',
          width: '12px',
          ease: Expo.easeInOut,
          delay: 0.6
        })
        TweenMax.to(this.$refs.closeLine2, 0.7, {
          left: '-3px',
          width: '12px',
          ease: Expo.easeInOut,
          delay: 0.7
        })
      })
    },
    close() {
      console.log('close')
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
    background: #1c1c1c;
    ul {
      li {
        a {
          display: inline-block;
          font-size: 15px;
          font-weight: bold;
          line-height: 1;
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
      background: #1c1c1c;
      border-radius: 50%;
    }
    .closeLine1,
    .closeLine2 {
      position: absolute;
      top: calc(50% - 1px);
      left: 0;
      width: 0;
      height: 2px;
      background: white;
      border-radius: 1px;
    }
    .closeLine1 {
      transform: rotate(-45deg);
    }
    .closeLine2 {
      transform: rotate(45deg);
    }
  }
  .mask {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 300px);
    height: 100%;
    background: #1c1c1c;
    opacity: 0;
  }
}
</style>
