<template>
  <div class="Body" />
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.$el.innerHTML = this.content
    const that = this
    const imgAll = this.$el.querySelectorAll('img')
    for (let i = 0; i < imgAll.length; i++) {
      ;(async function(i) {
        await that.$loadImage(imgAll[i].src)
        requestAnimationFrame(() => {
          TweenMax.to(imgAll[i], 1, {
            opacity: 0.9,
            ease: Expo.easeOut
          })
        })
      })(i)
    }
  }
}
</script>

<style lang="scss">
.Body {
  padding: 60px 30px;
  width: 100%;
  font-size: 14px;
  line-height: 2;
  background: white;
  @include pc {
    padding: 30px 60px;
    margin: 0 auto;
    width: 600px;
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
    margin: 30px 0 20px;
    color: white;
    font-weight: bold;
    line-height: 1.7;
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
