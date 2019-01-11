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
          to="/articles"
          @click.native="closeMenu"
        >
          <span>納品サンプルを読む</span>
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
    },
    opening: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    async menu(menu) {
      if (menu) {
        await this.$delay(500)
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
      this.$el.style.display = 'flex'
      requestAnimationFrame(() => {
        TweenMax.staggerTo(
          '.MenuList li span',
          1,
          {
            y: '0%',
            ease: Expo.easeOut
          },
          0.05
        )
      })
    },
    out() {
      requestAnimationFrame(() => {
        TweenMax.staggerTo(
          '.MenuList li span',
          0.5,
          {
            y: '100%',
            ease: Expo.easeOut,
            onComplete: () => {
              this.$el.style.display = 'none'
            }
          },
          0.025
        )
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.MenuList {
  display: none;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  @include pc {
    left: 0;
    right: auto;
  }
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
          transform: translateY(100%);
        }
      }
    }
    li:not(:last-child) {
      margin-bottom: 30px;
    }
  }
}
</style>
