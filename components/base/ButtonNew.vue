<template>
  <a
    :href="to"
    class="ButtonNew"
    target="_blank"
    @click="click"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
.ButtonNew {
  display: block;
  width: 250px;
  text-align: center;
  line-height: 50px;
  background: black;
  border-radius: 25px;
  font-weight: bold;
  font-size: 14px;
  color: white;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}
</style>
