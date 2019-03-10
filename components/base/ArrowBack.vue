<template>
  <NLink :to="to" class="ArrowBack">
    <font-awesome-icon :icon="['fal', 'long-arrow-alt-left']" />
  </NLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.ArrowBack {
  position: absolute;
  top: 30px;
  left: 30px;
  svg {
    color: white;
    font-size: 25px;
  }
}
</style>
