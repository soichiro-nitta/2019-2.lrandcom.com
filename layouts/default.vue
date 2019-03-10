<template>
  <div>
    <Background />
    <nuxt />
    <Tabbar v-if="$device.isMobile" />
  </div>
</template>

<script>
import Tabbar from '~/components/default/Tabbar'
import Background from '~/components/default/Background'

export default {
  components: {
    Tabbar,
    Background
  }
}
</script>

<style lang="scss" scoped>
.page {
  @include pc {
    padding: 10px;
    margin-left: 310px;
    width: calc(100% - 310px);
  }
}
</style>
