<template>
  <div>
    <Background />
    <nuxt />
    <no-ssr v-if="$device.isMobile">
      <Tabbar />
    </no-ssr>
    <no-ssr v-else>
      <Dashboard />
    </no-ssr>
  </div>
</template>

<script>
import Tabbar from '~/components/default/Tabbar'
import Dashboard from '~/components/default/Dashboard'
import Background from '~/components/default/Background'

export default {
  components: {
    Tabbar,
    Dashboard,
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
