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
  padding: 60px 30px;
  font-size: 14px;
  line-height: 2;
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
  .quote {
    color: #999;
    font-size: 10px;
  }
}
</style>
