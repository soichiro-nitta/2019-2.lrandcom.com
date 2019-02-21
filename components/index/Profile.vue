<template>
  <ul class="Profile">
    <li>
      <div class="title">
        <span>WHO</span>
      </div>
      <div class="description">
        <div>
          リーディング＆カンパニーは2014年に創業されたライター、エンジニア、そして、映像クリエイターから成るWebのクリエティブ・エージェンシーです。
        </div>
      </div>
    </li>
    <li>
      <div class="title">
        <span>VISION</span>
      </div>
      <div class="description">
        <div>
          「古い世界では持てる時間の30%を優れたプロダクトの開発に、70%をそれがどれほどすばらしいプロダクトかを吹聴してまわるのに充てていた。それが新たな世界では逆転した。」と言ったのはアマゾンのジェフ・ベゾスです。
          広告費に予算を使うことも大切ですが、その広告費を還元して、ユーザーが欲しがるコンテンツを作成すれば、商業臭さが無くなって、頼まなくても、ユーザーがあなたの会社の良さを周りに広めていってくれることでしょう。
          あなたが、このサイトにたどり着いたように。
        </div>
      </div>
    </li>
    <li>
      <div class="title">
        <span>FUTURE</span>
      </div>
      <div class="description">
        <div>
          10〜15年前にSNSがビジネスに活用されることなど、誰も予想しなかったように、2030年代のマーケティングの多くはAR・VRの中で行われていることでしょう。
          Webの世界では、新しいプラットフォームが出てくると、すぐにマーケターがメチャクチャにしてしまいます。
          そんな世界の中で、どうやったらクリエイティブとビジネスを両立させて、「良いものを作り続けられるか」を常に考えられることが、クリエイターにとっての「いまを生きる」ということなのかもしれません。
        </div>
      </div>
    </li>
    <li>
      <div class="title">
        <span>CONTENTS</span>
      </div>
      <div class="description">
        <div>
          まずは、リーディング＆カンパニーが実際に製作したコンテンツをみてみましょう。
          <ButtonNuxt
            to="/articles"
            text="コンテンツをみる"
          />
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { TweenMax, Expo } from 'gsap'
import ButtonNuxt from '~/components/base/ButtonNuxt'

export default {
  components: {
    ButtonNuxt
  },
  props: {
    leave: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    leave() {
      this.titleOut()
      this.descriptionOut()
      this.grayOut()
    }
  },
  mounted() {
    // document.getElementById('scrollArea').onscroll = () => {
    //   const list = document.getElementsByClassName('Profile')[0].children
    //   for (const el of list) {
    //     const itemTop = el.offsetTop
    //     const scrollTop = document.getElementById('scrollArea').scrollTop
    //     if (itemTop < scrollTop + el.clientHeight) {
    //       TweenMax.to(el, 0.8, {
    //         opacity: 1,
    //         ease: Expo.easeOut
    //       })
    //     }
    //   }
    // }
    this.titleIn()
    this.descriptionIn()
    this.grayIn()
  },
  methods: {
    titleIn() {
      requestAnimationFrame(() => {
        TweenMax.to('.Profile .title span', 0.8, {
          y: 0,
          ease: Expo.easeOut
        })
      })
    },
    titleOut() {
      requestAnimationFrame(() => {
        TweenMax.to('.Profile .title span', 0.5, {
          y: '-100%',
          ease: Expo.easeIn
        })
      })
    },
    descriptionIn() {
      requestAnimationFrame(() => {
        TweenMax.to('.Profile .description div', 0.8, {
          y: 0,
          opacity: 1,
          ease: Expo.easeOut,
          delay: 0.05
        })
      })
    },
    descriptionOut() {
      requestAnimationFrame(() => {
        TweenMax.to('.Profile .description div', 0.5, {
          y: '-50px',
          opacity: 0,
          ease: Expo.easeIn,
          delay: 0.05
        })
      })
    },
    grayIn() {
      requestAnimationFrame(() => {
        TweenMax.to('.Profile .gray', 0.8, {
          opacity: 1,
          ease: Expo.easeOut,
          delay: 0.05
        })
      })
    },
    grayOut() {
      requestAnimationFrame(() => {
        TweenMax.to('.Profile .gray', 0.5, {
          opacity: 0,
          ease: Expo.easeIn,
          delay: 0.05
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Profile {
  padding: 80px 0 0;
  li:nth-child(odd) {
    background: white;
  }
  li {
    padding: 80px 30px;
    text-align: center;
    .title {
      display: inline-block;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 4px;
      line-height: 1;
      overflow: hidden;
      @include pc {
        font-size: 1.7vw;
        letter-spacing: 0.5vw;
      }
      span {
        display: inline-block;
        transform: translate(0, 100%);
      }
    }
    .description {
      margin-top: 30px;
      font-size: 14px;
      line-height: 2;
      color: $blue3;
      @include pc {
        margin: 45px auto 0;
        width: 600px;
      }
      div {
        transform: translate(0, 30px);
        opacity: 0;
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
</style>
