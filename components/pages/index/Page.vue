<template>
  <div class="Page">
    <FirstviewVideo
      :title="title"
      :src="src"
    />
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
          <ButtonNuxt
            to="/articles"
            text="コンテンツをみる"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'
import { TweenMax, Expo } from 'gsap'
import FirstviewVideo from '~/components/base/FirstviewVideo'
import Services from '~/components/base/Services'
import ButtonNuxt from '~/components/base/ButtonNuxt'

export default {
  components: {
    FirstviewVideo,
    Services,
    ButtonNuxt
  },
  data() {
    return {
      title: 'LEADING & COMPANY',
      src: `${URL.WP}/static/index/${
        this.$device.isMobile ? 'mobile' : 'pc'
      }.mp4`
    }
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
  width: 100%;
  .Services {
    margin: 40px auto 0;
    @include pc {
      margin: 20px auto 0;
    }
  }
  ul {
    padding: 80px 0;
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
      padding: 80px 30px;
      text-align: center;
      overflow: hidden;
      .title {
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 4px;
        line-height: 1;
        @include pc {
          font-size: 1.7vw;
          letter-spacing: 0.5vw;
        }
      }
      .description {
        margin-top: 30px;
        font-size: 14px;
        overflow: hidden;
        line-height: 2;
        color: #999;
        @include pc {
          margin: 45px auto 0;
          width: 600px;
        }
      }
      .ButtonNuxt {
        margin: 30px auto 0;
        @include pc {
          margin: 45px auto 0;
        }
      }
    }
  }
}
</style>
