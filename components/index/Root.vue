<template>
  <div class="Root">
    <Firstview />
    <Services/>
    <div class="who">
      <div class="title">WHO</div>
      <div class="description">
        A high-tech project Factory. We connect Design
        with Artificial Intelligence to create innovative
        objects and experiences. We monitor and implement
        the ongoing digital evolution outcomes to continuously
        improve our work.
        <!-- リーディング＆カンパニーは企業のマーケティング用にウェブコンテンツの制作をしています。 -->
      </div>
    </div>
    <div class="who gray">
      <div class="title">VISION</div>
      <div class="description">
        When innovation is the goal,
        technology is the ultimate path to reach it.
        But ideas are the true propellent.
      </div>
    </div>
    <div class="who">
      <div class="title">MISSION</div>
      <div class="description">
        We redesign the way technology and Internet can offer
        people new perspectives. We imagine what does not exist
        and then we create it.
      </div>
    </div>
    <div class="who gray">
      <div class="title">CONTENTS</div>
      <div class="description">
        “Inspiration exists, but it has to find you working”
        Pablo Picasso
      </div>
      <div class="button">コンテンツをみる</div>
    </div>
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
.Root {
  padding-bottom: 30px;
  width: 100%;
  ul {
    li {
      margin: 0 auto 20px;
      width: calc(100% - 60px);
      height: 100px;
      overflow: hidden;
      border-radius: 15px;
      a {
        display: flex;
        width: 100%;
        height: 100%;
        background: #171717;
        border-radius: 15px;
        font-size: 13px;
        font-weight: bold;
        transform: translate(0, 100%);
        .thumb {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 95px;
          height: 100%;
          background: #121212;
          border-radius: 15px 0 0 15px;
          img {
            width: 23px;
            height: auto;
          }
          .filmImg {
            width: 26px;
            height: auto;
          }
        }
        .text {
          padding: 25px 40px;
          .ja {
            margin-top: 10px;
            color: #999;
          }
        }
      }
    }
  }
  .who.gray {
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
  .who {
    padding: 120px 50px;
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
    }
  }
}
</style>
