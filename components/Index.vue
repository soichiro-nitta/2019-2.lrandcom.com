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
            <div class="en">Create Cotnents</div>
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
            <div class="en">Crete Film</div>
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
            <div class="en">Create Website</div>
            <div class="ja">
              ウェブ制作
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
    <div class="who">
      <div class="title">WHO</div>
      <div class="description">
        A high-tech project Factory. We connect Design
        with Artificial Intelligence to create innovative
        objects and experiences. We monitor and implement
        the ongoing digital evolution outcomes to continuously
        improve our work.
        <!-- リーディング＆カンパニーは企業のマーケティング用にウェブコンテンツの制作をしています。 -->
      </div>
    </div>
    <div class="who gray">
      <div class="title">VISION</div>
      <div class="description">
        When innovation is the goal,
        technology is the ultimate path to reach it.
        But ideas are the true propellent.
      </div>
    </div>
    <div class="who">
      <div class="title">MISSION</div>
      <div class="description">
        We redesign the way technology and Internet can offer
        people new perspectives. We imagine what does not exist
        and then we create it.
      </div>
    </div>
    <div class="who gray">
      <div class="title">CONTENTS</div>
      <div class="description">
        “Inspiration exists, but it has to find you working”
        Pablo Picasso
      </div>
      <div class="button">コンテンツをみる</div>
    </div>
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
        rgba(65, 65, 65, 0.8) 0%,
        rgba(65, 65, 65, 0) 100%
      );
      background: -webkit-linear-gradient(
        rgba(65, 65, 65, 0.8) 0%,
        rgba(65, 65, 65, 0) 100%
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
        font-size: 18px;
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
      border-radius: 15px;
      a {
        display: flex;
        width: 100%;
        height: 100%;
        background: #171717;
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
          background: #121212;
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
  .who.gray {
    background: linear-gradient(
      rgba(65, 65, 65, 0) 0%,
      rgba(65, 65, 65, 0.6) 40%,
      rgba(65, 65, 65, 0.7) 50%,
      rgba(65, 65, 65, 0.6) 60%,
      rgba(65, 65, 65, 0) 100%
    );
    background: -webkit-linear-gradient(
      rgba(65, 65, 65, 0) 0%,
      rgba(65, 65, 65, 0.6) 40%,
      rgba(65, 65, 65, 0.7) 50%,
      rgba(65, 65, 65, 0.6) 60%,
      rgba(65, 65, 65, 0) 100%
    );
  }
  .who {
    padding: 120px 30px;
    text-align: center;
    .title {
      font-size: 30px;
      font-weight: bold;
      letter-spacing: 3px;
    }
    .description {
      margin-top: 20px;
      font-size: 14px;
      overflow: hidden;
      line-height: 2;
    }
    .button {
      margin-top: 40px;
      display: inline-block;
      width: 100%;
      line-height: 50px;
      background: #121212;
      border-radius: 25px;
      font-weight: bold;
      font-size: 14px;
    }
  }
}
</style>
