<template>
  <div class="Contents">
    <div class="fv">
      <div
        ref="gradient"
        class="gradient"
      />
      <div class="fvContent">
        <div
          ref="title"

          class="title"
        >
          <span
            ref="titleText"
            class="titleText"
          >記事制作について</span>
          <div
            ref="titleDummy"
            class="titleDummy"
          />
        </div>
      </div>
    </div>
    <div class="text">
      コンテンツを軸にマーケティングをする際によく言われることですが、記事のクオリティーは70％〜80％で、とにかく記事の数を上げていくことが大切だと思われている傾向があります。もちろん、企業のメディア化という意味でも、ある程度の数を上げていくことは大切なことでしょう。
      <br><br>
      しかし、毎日世界中で約2700万個のWebコンテンツが作られ、その中の60％〜70％はユーザーに一切読んでもらえず、インターネットという巨大なブラックホールの中に消えてしまう世界では、クオリティーが70％〜80％の記事をどれだけたくさん作っても、新しい価値観を伝えるコンテンツ・マーケティングとしては、ほとんど効果を出すことはできません。
      <br><br>
      広告ではなく、ソーシャルメディアのメリットを最大限に活かすためには記事のクオリティーは70％〜80％という中途半端なものではなく、仮に記事の本数は少なくなったとしても、クオリティーは500％〜1000％(通常の5倍〜10倍)のものにして、たった一人のユーザーを徹底的に喜ばせることを意識することが、広告を使わない自然な形で新しい価値観を伝える唯一の方法だとも言えます。
    </div>
    <ul class="links">
      <li class="writing">
        <nuxt-link to="contents">
          <div class="en">
            Create Cotnents
          </div>
          <div class="ja">
            記事制作
          </div>
        </nuxt-link>
      </li>
      <li class="film">
        <nuxt-link to="film">
          <div class="en">
            Crete Film
          </div>
          <div class="ja">
            映像制作
          </div>
        </nuxt-link>
      </li>
      <li class="web">
        <nuxt-link to="web">
          <div class="en">
            Create Website
          </div>
          <div class="ja">
            ウェブ制作
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  mounted() {
    requestAnimationFrame(async () => {
      TweenMax.to(this.$refs.gradient, 1, {
        opacity: 1,
        ease: Expo.easeInOut
      })
      TweenMax.to(this.$refs.titleDummy, 0.5, {
        left: 0,
        ease: Expo.easeIn
      })
      await this.$delay(500)
      TweenMax.set(this.$refs.titleText, {
        opacity: 1
      })
      TweenMax.to(this.$refs.titleDummy, 0.5, {
        left: '100%',
        ease: Expo.easeOut
      })
      TweenMax.staggerTo(
        '.links a',
        0.5,
        {
          marginTop: 0,
          ease: Expo.easeOut
        },
        0.05
      )
    })
  }
}
</script>

<style lang="scss" scoped>
.Contents {
  padding-bottom: 30px;
  width: 100%;
  .fv {
    position: relative;
    width: 100%;
    height: 65vh;
    overflow: hidden;
    .gradient {
      width: 100%;
      height: 100%;
      background: linear-gradient(
        rgba(75, 75, 75, 0.8) 0%,
        rgba(75, 75, 75, 0) 100%
      );
      background: -webkit-linear-gradient(
        rgba(75, 75, 75, 0.8) 0%,
        rgba(75, 75, 75, 0) 100%
      );
      opacity: 0;
    }
    .fvContent {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
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
  }
  ul {
    li {
      margin: 0 auto 20px;
      width: calc(100% - 60px);
      height: 110px;
      overflow: hidden;
      a {
        display: block;
        margin-top: 100%;
        padding: 30px 40px;
        width: 100%;
        height: 100%;
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
  .text {
    margin: 0 auto 20px;
    width: calc(100% - 60px);
    font-size: 14px;
    line-height: 2;
  }
}
</style>
