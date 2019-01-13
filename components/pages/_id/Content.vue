<template>
  <div class="Content"/>
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
      ;(function(i) {
        that.$imageOnLoad(imgAll[i].src, () => {
          requestAnimationFrame(() => {
            TweenMax.to(imgAll[i], 3, {
              opacity: 0.9,
              ease: Expo.easeInOut
            })
          })
        })
      })(i)
    }
  }
}
</script>

<style lang="scss">
.Content {
  padding: 30px;
  color: #ccc;
  font-size: 14px;
  line-height: 2;
  @include pc {
    margin: 0 auto;
    width: 600px;
  }
  h2 {
    margin-top: 30px;
    font-size: 15px;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    opacity: 0;
  }
  .subTitle {
    margin-top: 30px;
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
