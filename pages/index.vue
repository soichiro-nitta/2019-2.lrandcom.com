<template>
  <div class="index">
    <div class="fv">
      <div
        ref="title"
        class="title"
      >
        <span
          ref="titleText"
          class="titleText"
        >
          LEADING & COMPANY
        </span>
        <div
          ref="titleDummy"
          class="titleDummy"
        />
      </div>
    </div>
    <ul>
      <li class="writing">
        <div class="en">
          Create Cotnents
        </div>
        <div class="ja">
          記事制作
        </div>
      </li>
      <li class="film">
        <div class="en">
          Crete Film
        </div>
        <div class="ja">
          映像制作
        </div>
      </li>
      <li class="web">
        <div class="en">
          Create Website
        </div>
        <div class="ja">
          ウェブ制作
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  async mounted() {
    requestAnimationFrame(() => {
      TweenMax.to(this.$refs.titleDummy, 0.5, {
        left: 0,
        ease: Expo.easeIn
      })
    })
    await this.$delay(500)
    requestAnimationFrame(() => {
      TweenMax.set(this.$refs.titleText, {
        opacity: 1
      })
      TweenMax.to(this.$refs.titleDummy, 0.5, {
        left: '100%',
        ease: Expo.easeOut
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.index {
  padding-bottom: 30px;
  width: 100%;
  .fv {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 65vh;
    background: linear-gradient(
      rgba(75, 75, 75, 0.8) 0%,
      rgba(75, 75, 75, 0) 100%
    );
    background: -webkit-linear-gradient(
      rgba(75, 75, 75, 0.8) 0%,
      rgba(75, 75, 75, 0) 100%
    );
    .title {
      position: relative;
      display: inline-block;
      padding: 15px;
      line-height: 1;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 3px;
      border-radius: 12px;
      overflow: hidden;
      .titleText {
        opacity: 0;
      }
      .titleDummy {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        background: #1c1c1c;
      }
    }
  }
  ul {
    li {
      margin: 0 auto 20px;
      padding: 30px 40px;
      width: calc(100% - 60px);
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
</style>
