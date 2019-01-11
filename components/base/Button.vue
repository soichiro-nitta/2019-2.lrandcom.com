<template>
  <div class="Button">{{ text }}</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.Button {
  display: inline-block;
  width: 250px;
  line-height: 50px;
  background: #121212;
  border-radius: 25px;
  font-weight: bold;
  font-size: 14px;
  color: white;
}
</style>
