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
  bottom: 100px;
  right: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 150px;
  background: white;
  opacity: 0.7;
  border-radius: 40px;
  @include pc {
    bottom: 10px;
    left: 310px;
    width: calc(100% - 330px);
    border-radius: 20px;
  }
  .left {
    width: 25px;
    height: auto;
  }
  .page {
    margin: 0 50px;
    padding: 10px 20px;
    font-weight: bold;
    background: #171717;
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
