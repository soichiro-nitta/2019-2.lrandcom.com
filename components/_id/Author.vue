<template>
  <div class="Author">
    <img
      :src="src"
      class="thumb"
    >
    <div class="text">
      <span>著者：夏目 力（なつめ ちから）</span>
      <div class="icons">
        <a
          :href="fb"
          target="_blank"
        >
          <font-awesome-icon
            :icon="['fab', 'facebook']"
            class="fb"
          />
        </a>
        <a
          :href="tw"
          target="_blank"
        >
          <font-awesome-icon
            :icon="['fab', 'twitter']"
            class="tw"
          />
        </a>
        <a
          :href="insta"
          target="_blank"
        >
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            class="insta"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'

export default {
  data() {
    return {
      src: `${URL.WP}/static/_id/natsume.jpg`,
      fb: URL.FB,
      tw: URL.TW,
      insta: URL.INSTA
    }
  },
  mounted() {}
}
</script>

<style lang="scss">
.Author {
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  margin: -35px auto 0;
  width: calc(100% - 40px);
  height: 75px;
  background: white;
  @include shadowBlue;
  border-radius: 15px;
  @include pc {
    width: 540px;
  }
  .thumb {
    margin: -10px 0 0 15px;
    position: absolute;
    width: auto;
    height: 65px;
    border-radius: 50%;
    border: 5px solid white;
  }
  .text {
    margin-left: 90px;
    span {
      display: block;
      font-size: 12px;
      font-weight: bold;
      line-height: 1;
    }
    .icons {
      display: flex;
      margin-top: 6px;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        width: 30px;
        height: 30px;
        overflow: hidden;
        background: white;
        border-radius: 50%;
        @include shadowBlue;
      }
      svg.fb {
        color: $fb;
      }
      svg.tw {
        color: $tw;
      }
      svg.insta {
        color: $insta;
      }
      svg {
        width: auto;
        height: 13px;
      }
    }
  }
}
</style>
