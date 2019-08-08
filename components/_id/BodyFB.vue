<template>
  <div class="BodyFB">
    <div class="head">
      Facebookページにいいね！しよう
      <div class="text">
        この記事が気に入ったらFacebookページにいいね！しましょう。リーディング＆カンパニーの最新記事をお届けします。
      </div>
      <ButtonNew
        :to="to"
        text="Facebookページにいく"
      />
    </div>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'
import ButtonNew from '~/components/base/ButtonNew'
import URL from '~/assets/data/url.json'

export default {
  components: {
    ButtonNew
  },
  data() {
    return {
      to: URL.FB_PAGE
    }
  },
  async mounted() {
    await this.$raf()
    TweenMax.to(this.$el, 0.6, {
      opacity: 1,
      y: 0,
      startAt: {
        y: '30px'
      },
      ease: Expo.easeOut
    })
  }
}
</script>

<style lang="scss">
.BodyFB {
  margin: 30px 0 10px;
  padding: 30px;
  width: 100%;
  text-align: center;
  background: white;
  border-radius: 20px;
  @include shadowBlue;
  opacity: 0;
  @include pc {
    margin: 40px 0 10px;
    width: 500px;
  }
  .head {
    font-size: 14px;
    font-weight: bold;
  }
  .text {
    margin: 15px auto 0;
    font-size: 12px;
    color: $blue4;
    line-height: 2;
  }
  .ButtonNew {
    margin: 15px auto 0;
  }
}
</style>
