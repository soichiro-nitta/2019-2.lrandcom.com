<template>
  <div class="Page">
    <div class="tbc">
      <div class="head">お問い合わせ</div>
      <div class="company">LEADING & COMPANY</div>
      <div class="text">メディア構築、コンテンツ作成をご希望の企業様から、面白いコンテンツを作ってみたいライターやクリエイターさん、そして、ただオフィスに遊びに来たいという変わり者の方まで、お気軽に下記のメールアドレスからご連絡下さい。</div>
      <div class="email">HELLO@LRANDCOM.COM</div>
    </div>
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'
import { TweenMax, Expo } from 'gsap'

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

<style lang="scss" scoped>
.Page {
  display: table;
  padding: 0 50px;
  width: 100%;
  height: 100%;
  .head {
    font-size: 25px;
    font-weight: bold;
    line-height: 1;
  }
  .company {
    margin-top: 15px;
    font-size: 12px;
    line-height: 1;
    color: #999;
  }
  .text {
    margin-top: 30px;
    color: #999;
    font-size: 12px;
    line-height: 2;
  }
  .email {
    margin-top: 30px;
    padding: 0 20px;
    font-size: 14px;
    font-weight: bold;
    line-height: 50px;
    background: #121212;
    border-radius: 25px;
  }
}
</style>
