<template>
  <div class="Page">
    <Firstview />
    <Services/>
    <ul>
      <li>
        <div class="title">WHO</div>
        <div class="description">
          リーディング＆カンパニーは2014年に創業されたライター、エンジニア、そして、映像クリエイターから成るWebのクリエティブ・エージェンシーです。
        </div>
      </li>
      <li class="gray">
        <div class="title">VISION</div>
        <div class="description">
          「古い世界では持てる時間の30%を優れたプロダクトの開発に、70%をそれがどれほどすばらしいプロダクトかを吹聴してまわるのに充てていた。それが新たな世界では逆転した。」と言ったのはアマゾンのジェフ・ベゾスです。
          広告費に予算を使うことも大切ですが、その広告費を還元して、ユーザーが欲しがるコンテンツを作成すれば、商業臭さが無くなって、頼まなくても、ユーザーがあなたの会社の良さを周りに広めていってくれることでしょう。
          あなたが、このサイトにたどり着いたように。
        </div>
      </li>
      <li>
        <div class="title">FUTURE</div>
        <div class="description">
          10〜15年前にSNSがビジネスに活用されることなど、誰も予想しなかったように、2030年代のマーケティングの多くはAR・VRの中で行われていることでしょう。
          Webの世界では、新しいプラットフォームが出てくると、すぐにマーケターがメチャクチャにしてしまいます。
          そんな世界の中で、どうやったらクリエイティブとビジネスを両立させて、「良いものを作り続けられるか」を常に考えられることが、クリエイターにとっての「いまを生きる」ということなのかもしれません。
        </div>
      </li>
      <li class="gray">
        <div class="title">CONTENTS</div>
        <div class="description">
          まずは、リーディング＆カンパニーが実際に製作したコンテンツをみてみましょう。
          <nuxt-link
            to="/articles"
            class="button"
          >
            コンテンツをみる
          </nuxt-link>
      </div></li>
    </ul>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'
import Firstview from './Firstview'
import Services from '~/components/base/Services'

export default {
  components: {
    Firstview,
    Services
  },
  mounted() {
    requestAnimationFrame(() => {
      TweenMax.staggerTo(
        '.links a',
        1,
        {
          y: 0,
          ease: Expo.easeOut,
          delay: 0.1
        },
        0.1
      )
    })
  }
}
</script>

<style lang="scss" scoped>
.Page {
  padding-bottom: 30px;
  width: 100%;
  .BaseServices {
    margin-top: 10px;
  }
  ul {
    padding: 90px 0;
    li.gray {
      background: linear-gradient(
        rgba(65, 65, 65, 0) 0%,
        rgba(65, 65, 65, 0.6) 50%,
        rgba(65, 65, 65, 0) 100%
      );
      background: -webkit-linear-gradient(
        rgba(65, 65, 65, 0) 0%,
        rgba(65, 65, 65, 0.6) 50%,
        rgba(65, 65, 65, 0) 100%
      );
    }
    li {
      padding: 90px 35px;
      text-align: center;
      .title {
        font-size: 30px;
        font-weight: bold;
        letter-spacing: 3px;
      }
      .description {
        margin-top: 20px;
        font-size: 14px;
        overflow: hidden;
        line-height: 2;
        color: #999;
      }
      .button {
        margin-top: 40px;
        display: inline-block;
        width: 100%;
        line-height: 50px;
        background: #121212;
        border-radius: 25px;
        font-weight: bold;
        font-size: 14px;
        color: white;
      }
    }
  }
}
</style>
