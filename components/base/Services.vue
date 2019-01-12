<template>
  <div class="Services">
    <ul class="links">
      <li class="writing">
        <nuxt-link to="contents">
          <div class="thumb">
            <font-awesome-icon :icon="['far', 'pen']"/>
          </div>
          <div class="text">
            <div class="en">Create Cotnents</div>
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
            <div class="en">Create Film</div>
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
            <div class="en">Create Website</div>
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
    li:last-child {
      margin: 0 auto;
    }
    li {
      margin: 0 auto 20px;
      width: calc(100% - 60px);
      height: 100px;
      overflow: hidden;
      border-radius: 15px;
      @include pc {
        width: 31.5%;
      }
      a {
        display: flex;
        width: 100%;
        height: 100%;
        background: #171717;
        border-radius: 15px;
        font-size: 13px;
        font-weight: bold;
        // transform: translate(0, 100%);
        .thumb {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 95px;
          height: 100%;
          background: #121212;
          border-radius: 15px 0 0 15px;
          svg {
            width: 23px;
            height: auto;
          }
        }
        .text {
          padding: 25px 40px;
          .ja {
            margin-top: 10px;
            color: #999;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
