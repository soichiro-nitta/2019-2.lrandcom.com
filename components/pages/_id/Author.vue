<template>
  <div class="Author">
    <img
      :src="src"
      class="thumb"
    >
    <div class="text">
      <div class="name">
        著者：夏目 力（なつめ ちから）
      </div>
      <div class="icons">
        <a
          :href="fb"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </a>
        <a
          :href="tw"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
        <a
          :href="insta"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" />
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
  margin: 30px auto 0;
  width: calc(100% - 60px);
  height: 50px;
  @include pc {
    width: 540px;
  }
  .thumb {
    width: auto;
    height: 100%;
    border-radius: 50%;
  }
  .text {
    margin-left: 20px;
    .name {
      font-size: 12px;
      font-weight: bold;
      line-height: 1;
    }
    .icons {
      display: flex;
      margin-top: 10px;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        width: 30px;
        height: 30px;
        overflow: hidden;
        background: #121212;
        border-radius: 50%;
      }
      svg {
        width: auto;
        height: 13px;
        color: #999;
      }
    }
  }
}
</style>
