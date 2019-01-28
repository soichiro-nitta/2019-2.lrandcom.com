<template>
  <div
    class="Banner"
  >
    <div class="BannerInsta"/>
    <!-- <div class="head">Instagramやっています！</div>
    <div class="text">リーディング＆カンパニーのInstagramでは、世の中のある瞬間をとらえた写真や、イラストを日々アップしています。記事と合わせて、こちらも逃さずチェック!!</div>
    <ButtonNew
      :to="insta"
      text="LCのInstagramをみる"
    /> -->
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'
import { TweenMax, Expo } from 'gsap'
import ButtonNew from '~/components/base/ButtonNew'

export default {
  components: {
    ButtonNew
  },
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
  .BannerInsta {
    position: fixed;
    bottom: 30px;
    left: 30px;
    padding: 30px;
    width: calc(100% - 60px);
    background: #171717;
  }
  // margin: 30px auto 0;
  // padding: 30px;
  // width: calc(100% - 60px);
  // text-align: center;
  // background: #171717;
  // border-radius: 20px;
  // @include pc {
  //   width: 540px;
  // }
  // .head {
  //   font-size: 14px;
  //   font-weight: bold;
  // }
  // .text {
  //   margin: 20px auto 0;
  //   font-size: 12px;
  //   color: #999;
  //   line-height: 2;
  // }
  // .ButtonNew {
  //   margin: 20px auto 0;
  // }
}
</style>
