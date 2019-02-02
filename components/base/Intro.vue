<template>
  <div class="Intro">
    <div>
      <div>{{ intro }}</div>
    </div>
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  props: {
    intro: {
      type: String,
      required: true
    },
    leave: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    leave() {
      this.out()
    }
  },
  mounted() {
    this.in()
  },
  methods: {
    in() {
      requestAnimationFrame(() => {
        TweenMax.to('.Intro div div', 0.8, {
          y: 0,
          opacity: 1,
          ease: Expo.easeOut
        })
      })
    },
    out() {
      requestAnimationFrame(() => {
        TweenMax.to('.Intro div div', 0.5, {
          y: '-50px',
          opacity: 0,
          ease: Expo.easeIn
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Intro {
  padding: 33px 30px;
  font-size: 14px;
  line-height: 2;
  @include pc {
    padding: 73px 30px 33px;
    margin: 0 auto;
    width: calc(50% - 30px);
    text-align: center;
  }
  div {
    overflow: hidden;
    div {
      transform: translate(0, 30px);
      opacity: 0;
    }
  }
}
</style>
