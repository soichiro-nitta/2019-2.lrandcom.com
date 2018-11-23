<template>
  <div class="MenuList">
    <ul>
      <li>
        <nuxt-link
          to="/"
          @click.native="closeMenu"
        >
          <span>ホーム</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/contents"
          @click.native="closeMenu"
        >
          <span>記事制作について</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/film"
          @click.native="closeMenu"
        >
          <span>映像制作について</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/website"
          @click.native="closeMenu"
        >
          <span>サイト制作について</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/contact"
          @click.native="closeMenu"
        >
          <span>お問い合わせ</span>
        </nuxt-link>
      </li>
    </ul>
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
    async menu(menu) {
      if (menu) {
        await this.$delay(600)
        this.in()
      } else {
        this.out()
      }
    }
  },
  methods: {
    closeMenu() {
      this.$emit('closeMenu')
    },
    in() {
      requestAnimationFrame(() => {
        TweenMax.staggerTo(
          '.MenuList li span',
          0.7,
          {
            x: '0%',
            ease: Expo.easeOut
          },
          0.1
        )
      })
    },
    out() {
      requestAnimationFrame(() => {
        TweenMax.staggerTo(
          '.MenuList li:nth-child(odd) span',
          0.42,
          {
            x: '100%',
            ease: Expo.easeOut
          },
          0.06
        )
        TweenMax.staggerTo(
          '.MenuList li:nth-child(even) span',
          0.42,
          {
            x: '-100%',
            ease: Expo.easeOut,
            delay: 0.06
          },
          0.06
        )
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.MenuList {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  ul {
    text-align: center;
    li {
      a {
        display: inline-block;
        font-size: 15px;
        font-weight: bold;
        line-height: 1;
        overflow: hidden;
        span {
          display: inline-block;
        }
      }
    }
    li:nth-child(odd) span {
      transform: translateX(100%);
    }
    li:nth-child(even) span {
      transform: translateX(-100%);
    }
    li:not(:last-child) {
      margin-bottom: 30px;
    }
  }
}
</style>
