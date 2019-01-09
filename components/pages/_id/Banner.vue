<template>
  <a
    :href="insta"
    class="Banner"
    target="_blank"
  >
    <div class="head">Instagramやっています！</div>
    <div class="text">リーディング＆カンパニーのInstagramでは、世の中のある瞬間をとらえた写真や、イラストを日々アップしています。記事と合わせて、こちらも逃さずチェック!!</div>
    <div class="btn">LCのInstagramをみる</div>
  </a>
</template>

<script>
import URL from '~/assets/data/url.json'
import { TweenMax, Expo } from 'gsap'

export default {
  data() {
    return {
      insta: URL.INSTA
    }
  },
  mounted() {}
}
</script>

<style lang="scss">
.Banner {
  display: block;
  margin: 30px auto 0;
  padding: 30px;
  width: calc(100% - 60px);
  text-align: center;
  background: #171717;
  border-radius: 20px;
  @include pc {
    width: 540px;
  }
  .head {
    font-size: 14px;
    font-weight: bold;
  }
  .text {
    margin: 20px auto 0;
    font-size: 12px;
    color: #999;
  }
  .btn {
    margin: 20px auto 0;
    width: 250px;
    line-height: 50px;
    background: #121212;
    border-radius: 25px;
    font-weight: bold;
    font-size: 14px;
    color: white;
  }
}
</style>
