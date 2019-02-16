<template>
  <div>
    <!-- <Background /> -->
    <nuxt />
    <Tabbar />
    <!-- <Opening @open="open" /> -->
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
import Tabbar from '~/components/default/Tabbar'
// import Opening from '~/components/default/Opening'

export default {
  components: {
    Tabbar
    // Background
    // Opening
  }
  // methods: {
  //   ...mapMutations({
  //     open: 'open'
  //   })
  // }
}
</script>
