<template>
  <div>
    <Background />
    <nuxt />
    <Tabbar />
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
