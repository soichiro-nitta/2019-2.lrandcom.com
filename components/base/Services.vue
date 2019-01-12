<template>
  <div class="Services">
    <ul class="links">
      <li class="writing">
        <nuxt-link to="contents">
          <div class="thumb">
            <font-awesome-icon :icon="['far', 'pen']"/>
          </div>
          <div class="text">
            <div class="en">CREATE CONTENTS</div>
            <div class="ja">記事制作について</div>
          </div>
        </nuxt-link>
      </li>
      <li class="film">
        <nuxt-link to="film">
          <div class="thumb">
            <font-awesome-icon :icon="['far', 'video']"/>
          </div>
          <div class="text">
            <div class="en">CREATE FILM</div>
            <div class="ja">映像制作について</div>
          </div>
        </nuxt-link>
      </li>
      <li class="web">
        <nuxt-link to="website">
          <div class="thumb">
            <font-awesome-icon :icon="['far', 'desktop']"/>
          </div>
          <div class="text">
            <div class="en">CREATE WEBSITE</div>
            <div class="ja">ウェブ制作について</div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  mounted() {}
}
</script>

<style lang="scss" scoped>
.Services {
  ul {
    @include pc {
      display: flex;
      margin: 60px auto 0;
    }
    li {
      margin: 0 auto 20px;
      width: calc(100% - 60px);
      height: 100px;
      @include pc {
        width: 31.5%;
      }
      a {
        display: flex;
        width: 100%;
        height: 100%;
        overflow: hidden;
        font-size: 12px;
        font-weight: bold;
        background: #171717;
        border-radius: 20px;
        .thumb {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30%;
          height: 100%;
          background: #121212;
          svg {
            width: 25%;
            height: auto;
          }
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 14%;
          width: 70%;
          height: 100%;
          line-height: 1;
          font-size: 12px;
          .ja {
            margin-top: 15px;
            color: #999;
          }
        }
      }
    }
    li:last-child {
      margin: 0 auto;
    }
  }
}
</style>
