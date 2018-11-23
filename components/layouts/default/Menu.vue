<template>
  <div class="Menu">
    <ul>
      <li>
        <nuxt-link
          to="/"
          class="num3"
          @click.native="closeMenu"
        >ホーム</nuxt-link>
      </li>
      <!-- <li>
          <nuxt-link
            class="num2"
            to="/articles"
            @click.native="closeMenu"
          >記事を読む</nuxt-link>
        </li> -->
      <li>
        <nuxt-link
          to="/contents"
          class="num1"
          @click.native="closeMenu"
        >記事制作について</nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/film"
          class="num1"
          @click.native="closeMenu"
        >映像制作について</nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/website"
          class="num2"
          @click.native="closeMenu"
        >サイト制作について</nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/contact"
          class="num3"
          @click.native="closeMenu"
        >お問い合わせ</nuxt-link>
      </li>
    </ul>
    <MenuClose
      :menu="menu"
      @closeMenu="closeMenu"
    />
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'
import MenuClose from './MenuClose'

export default {
  components: {
    MenuClose
  },
  props: {
    menu: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    async menu(menu) {
      if (menu) {
        await this.$delay(300)
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
        TweenMax.to(this.$el, 0.7, {
          right: 0,
          ease: Expo.easeOut
        })
        TweenMax.to('.Menu .num1', 1, {
          x: 0,
          opacity: 1,
          ease: Expo.easeOut,
          delay: 0.3
        })
        TweenMax.to('.Menu .num2', 2, {
          x: 0,
          opacity: 1,
          ease: Expo.easeOut,
          delay: 0.3
        })
        TweenMax.to('.Menu .num3', 3, {
          x: 0,
          opacity: 1,
          ease: Expo.easeOut,
          delay: 0.3
        })
      })
    },
    out() {
      requestAnimationFrame(() => {
        TweenMax.to(this.$el, 0.7, {
          right: '-300px',
          ease: Expo.easeInOut
        })
        TweenMax.to('.Menu .num1', 1, {
          x: '40px',
          opacity: 0,
          ease: Expo.easeOut
        })
        TweenMax.to('.Menu .num2', 1, {
          x: '40px',
          opacity: 0,
          ease: Expo.easeOut
        })
        TweenMax.to('.Menu .num3', 1, {
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
.Menu {
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
}
</style>
