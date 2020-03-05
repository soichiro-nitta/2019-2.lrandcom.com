<template>
  <div>
    <!-- <Background /> -->
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
// import Background from '~/components/default/Background'

export default {
  components: {
    Tabbar,
    Dashboard
    // Background
  }
}
</script>

<style lang="scss" scoped>
.page {
  @include pc {
    position: relative;
    margin-left: 300px;
    width: calc(100% - 300px);
  }
}
</style>
