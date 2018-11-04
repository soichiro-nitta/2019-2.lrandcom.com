<template>
  <div class="Index">
    <div class="fv">
      <div
        ref="gradient"
        class="gradient"
      />
      <div class="fvContent">
        <div
          ref="title"

          class="title"
        >
          <span
            ref="titleText"
            class="titleText"
          >LEADING & COMPANY</span>
        </div>
      </div>
    </div>
    <ul class="links">
      <li class="writing">
        <nuxt-link to="contents">
          <div class="en">
            Create Cotnents
          </div>
          <div class="ja">
            記事制作
          </div>
        </nuxt-link>
      </li>
      <li class="film">
        <nuxt-link to="film">
          <div class="en">
            Crete Film
          </div>
          <div class="ja">
            映像制作
          </div>
        </nuxt-link>
      </li>
      <li class="web">
        <nuxt-link to="web">
          <div class="en">
            Create Website
          </div>
          <div class="ja">
            ウェブ制作
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  mounted() {
    requestAnimationFrame(() => {
      TweenMax.to(this.$refs.gradient, 3, {
        y: 0,
        ease: Expo.easeOut
      })
      TweenMax.to(this.$refs.titleText, 1, {
        y: 0,
        ease: Expo.easeInOut
      })
      TweenMax.staggerTo(
        '.links a',
        0.5,
        {
          marginTop: 0,
          ease: Expo.easeOut
        },
        0.05
      )
    })
  }
}
</script>

<style lang="scss" scoped>
.Index {
  padding-bottom: 30px;
  width: 100%;
  .fv {
    position: relative;
    width: 100%;
    height: 65vh;
    overflow: hidden;
    .gradient {
      width: 100%;
      height: 100%;
      background: linear-gradient(
        rgba(75, 75, 75, 0.8) 0%,
        rgba(75, 75, 75, 0) 100%
      );
      background: -webkit-linear-gradient(
        rgba(75, 75, 75, 0.8) 0%,
        rgba(75, 75, 75, 0) 100%
      );
      transform: translate(0, -100%);
    }
    .fvContent {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .title {
        display: inline-block;
        position: relative;
        line-height: 1;
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 3px;
        overflow: hidden;
        .titleText {
          display: inline-block;
          transform: translate(0, 100%);
        }
      }
    }
  }
  ul {
    li {
      margin: 0 auto 20px;
      width: calc(100% - 60px);
      height: 110px;
      overflow: hidden;
      a {
        display: block;
        margin-top: 100%;
        padding: 30px 40px;
        width: 100%;
        height: 100%;
        background: #1c1c1c;
        border-radius: 15px;
        font-size: 14px;
        font-weight: bold;
        .ja {
          margin-top: 10px;
          color: #999;
        }
      }
    }
  }
}
</style>
