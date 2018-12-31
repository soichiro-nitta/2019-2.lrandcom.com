<template>
  <div class="Navigation">
    <font-awesome-icon
      :icon="['fal', 'long-arrow-alt-left']"
      class="left"
      @click="decrement"
    />
    <div class="page">
      {{ page }}<span>/</span>{{ totalPages }}
    </div>
    <font-awesome-icon
      :icon="['fal', 'long-arrow-alt-right']"
      class="right"
      @click="increment"
    />
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'

export default {
  props: {
    page: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    increment() {
      this.$emit('increment')
      this.$emit('fetch')
    },
    decrement() {
      this.$emit('decrement')
      this.$emit('fetch')
    }
  }
}
</script>

<style lang="scss" scoped>
.Navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  height: 100px;
  background: rgba(23, 23, 23, 0.95);
  border-radius: 40px 40px 0 0;
  .left {
    width: 25px;
    height: auto;
  }
  .page {
    margin: 0 50px;
    padding: 10px 20px;
    font-weight: bold;
    background: #121212;
    border-radius: 40px;
    font-size: 14px;
    span {
      margin: 0 5px;
    }
  }
  .right {
    width: 25px;
    height: auto;
  }
}
</style>
