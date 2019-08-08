<template>
  <div class="_idBody">
    <div ref="body" />
    <BodyFB />
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'
import BodyFB from '~/components/_id/BodyFB'

export default {
  components: {
    BodyFB
  },
  props: {
    content: {
      type: String,
      required: true
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
  padding: 70px 30px;
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
