<template>
  <ul class="Sections">
    <li
      v-for="section in sections"
      :key="section.src"
    >
      <div class="thumb">
        <div>
          <img :src="section.src">
        </div>
      </div>
      <div class="text">
        <div class="head">
          <div>{{ section.head }}</div>
        </div>
        <div class="body">
          <div>{{ section.body }}</div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    sections: {
      type: Array,
      required: true
    },
    leave: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    leave() {
      this.thumbOut()
      this.headOut()
      this.bodyOut()
      this.oddOut()
    }
  },
  mounted() {
    this.thumbIn()
    this.headIn()
    this.bodyIn()
    this.oddIn()
  },
  methods: {
    thumbIn() {
      requestAnimationFrame(() => {
        TweenMax.to('.Sections .thumb img', 1, {
          y: 0,
          ease: Expo.easeOut
        })
      })
    },
    thumbOut() {
      requestAnimationFrame(() => {
        TweenMax.to('.Sections .thumb img', 0.7, {
          y: '-100%',
          ease: Expo.easeIn
        })
      })
    },
    headIn() {
      requestAnimationFrame(() => {
        TweenMax.to('.Sections .head div', 1, {
          y: 0,
          ease: Expo.easeOut,
          delay: 0.05
        })
      })
    },
    headOut() {
      requestAnimationFrame(() => {
        TweenMax.to('.Sections .head div', 0.7, {
          y: '-100%',
          ease: Expo.easeIn,
          delay: 0.05
        })
      })
    },
    bodyIn() {
      requestAnimationFrame(() => {
        TweenMax.to('.Sections .body div', 1, {
          y: 0,
          opacity: 1,
          ease: Expo.easeOut,
          delay: 0.1
        })
      })
    },
    bodyOut() {
      requestAnimationFrame(() => {
        TweenMax.to('.Sections .body div', 0.7, {
          y: '-50px',
          opacity: 0,
          ease: Expo.easeIn,
          delay: 0.1
        })
      })
    },
    oddIn() {
      requestAnimationFrame(() => {
        TweenMax.to('.Sections li:nth-child(odd)', 1, {
          opacity: 1,
          ease: Expo.easeOut,
          delay: 0.1
        })
      })
    },
    oddOut() {
      requestAnimationFrame(() => {
        TweenMax.to('.Sections li:nth-child(odd)', 0.7, {
          opacity: 0,
          ease: Expo.easeIn,
          delay: 0.1
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Sections {
  @include pc {
    padding: 40px 0;
  }
  li:nth-child(odd) {
    @include pc {
      flex-direction: row-reverse;
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
    .text {
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
      @include pc {
        background: none;
      }
    }
  }
  li {
    @include pc {
      display: flex;
      align-items: center;
      padding: 0 30px;
    }
    .thumb {
      width: 100%;
      overflow: hidden;
      @include pc {
        padding: 30px;
        width: 50%;
        height: 22vw;
      }
      div {
        overflow: hidden;
        @include pc {
          height: 100%;
        }
        img {
          width: 100%;
          height: auto;
          transform: translate(0, 100%);
          @include pc {
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
          }
        }
      }
    }
    .text {
      padding: 33px 30px 33px;
      @include pc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 31px 30px 33px;
        width: 50%;
      }
      .head {
        font-size: 14px;
        font-weight: bold;
        line-height: 2;
        overflow: hidden;
        @include pc {
          font-size: 18px;
          letter-spacing: 4px;
        }
        div {
          transform: translate(0, 100%);
        }
      }
      .body {
        margin-top: 28px;
        font-size: 14px;
        color: #999;
        line-height: 2;
        white-space: pre-wrap;
        overflow: hidden;
        @include pc {
          margin-top: 26px;
        }
        div {
          transform: translate(0, 30px);
          opacity: 0;
        }
      }
    }
  }
}
</style>
