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
          <div class="thumb">
            <img src="/svg/contents.svg">
          </div>
          <div class="text">
            <div class="en">
              Create Cotnents
            </div>
            <div class="ja">
              記事制作
            </div>
          </div>
        </nuxt-link>
      </li>
      <li class="film">
        <nuxt-link to="film">
          <div class="thumb">
            <img
              src="/svg/film.svg"
              class="filmImg"
            >
          </div>
          <div class="text">
            <div class="en">
              Crete Film
            </div>
            <div class="ja">
              映像制作
            </div>
          </div>
        </nuxt-link>
      </li>
      <li class="web">
        <nuxt-link to="web">
          <div class="thumb">
            <img src="/svg/website.svg">
          </div>
          <div class="text">
            <div class="en">
              Create Website
            </div>
            <div class="ja">
              ウェブ制作
            </div>
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
        1,
        {
          y: 0,
          ease: Expo.easeOut,
          delay: 0.1
        },
        0.1
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
      height: 100px;
      overflow: hidden;
      a {
        display: flex;
        width: 100%;
        height: 100%;
        background: #1c1c1c;
        border-radius: 15px;
        font-size: 13px;
        font-weight: bold;
        transform: translate(0, 100%);
        .thumb {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 95px;
          height: 100%;
          background: #222;
          border-radius: 15px 0 0 15px;
          img {
            width: 23px;
            height: auto;
          }
          .filmImg {
            width: 26px;
            height: auto;
          }
        }
        .text {
          padding: 25px 40px;
          .ja {
            margin-top: 10px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
