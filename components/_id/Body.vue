<template>
  <div class="_idBody">
    <div ref="body" />
    <BodyFooter
      head="毎日が実験！!"
      body="最初は下手でも、徐々に個性のある動画が撮れるようになってくるはず。"
      :to="yt"
      button="YouTubeをみる"
    />
    <BodyFooter head="インスタ毎日更新中" body="写真だんだん上手くなってきた" :to="insta" button="Instagramをみる" />
    <BodyFooter
      head="Facebookページにいいね！しよう"
      body="この記事が気に入ったらFacebookページにいいね！しましょう。リーディング＆カンパニーの最新記事をお届けします。"
      :to="fb"
      button="Facebookページにいく"
    />
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'
import BodyFooter from '~/components/_id/BodyFooter'
import URL from '~/assets/data/url.json'

export default {
  components: {
    BodyFooter
  },
  props: {
    content: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      fb: URL.FB_PAGE,
      yt: URL.YOUTUBE,
      insta: URL.INSTA
    }
  },
  mounted() {
    this.$refs.body.innerHTML = this.content
    const that = this
    const imgAll = this.$refs.body.querySelectorAll('img')
    for (let i = 0; i < imgAll.length; i++) {
      ;(async function(i) {
        await that.$loadImage(imgAll[i].src)
        await that.$raf()
        TweenMax.to(imgAll[i], 1, {
          opacity: 1,
          ease: Expo.easeOut
        })
      })(i)
    }
  }
}
</script>

<style lang="scss">
._idBody {
  padding: 100px 30px 70px;
  width: 100%;
  font-size: 14px;
  line-height: 2;
  background: white;
  @include pc {
    margin: 0 auto;
    width: 560px;
    font-size: 16px;
  }
  h2 {
    margin-top: 30px;
  }
  img {
    margin-left: -30px;
    width: calc(100% + 60px);
    height: auto;
    opacity: 0;
    @include pc {
      margin: 10px 0 10px -30px;
      width: calc(100% + 60px);
    }
  }
  .subTitle {
    position: relative;
    margin: 50px 0 30px;
    padding-bottom: 30px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.7;
    @include pc {
      font-size: 18px;
    }
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 30px;
      height: 3px;
      background: $blue2;
      border-radius: 1.5px;
    }
  }
  .quote {
    color: #999;
    font-size: 10px;
  }
  .info {
    padding: 10px 20px;
    font-size: 12px;
    line-height: 1.7;
    word-break: break-all;
    background: #171717;
    color: #999;
    border-radius: 20px;
    a {
      color: white;
      text-decoration: underline;
    }
  }
}
</style>
