<template>
  <div>
    <Background />
    <nuxt />
    <Opening @open="open" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Background from '~/components/default/Background'
import Opening from '~/components/default/Opening'

export default {
  components: {
    Background,
    Opening
  },
  methods: {
    ...mapMutations({
      open: 'open'
    })
  }
}
</script>

<style lang="scss" scoped>
span {
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
}
</style>
