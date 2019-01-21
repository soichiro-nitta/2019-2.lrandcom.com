<template>
  <div class="Intro">
    <div>
      <div>{{ intro }}</div>
    </div>
  </div>
</template>

<script>
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
        TweenMax.to('.Intro div div', 1, {
          y: 0,
          opacity: 1,
          ease: Expo.easeOut
        })
      })
    },
    out() {
      requestAnimationFrame(() => {
        TweenMax.to('.Intro div div', 0.7, {
          y: '-30px',
          opacity: 0,
          ease: Expo.easeOut
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
