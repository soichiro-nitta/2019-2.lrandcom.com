<template>
  <div class="default">
    <Background/>
    <div id="scrollArea">
      <nuxt/>
    </div>
    <Logo/>
    <Loading/>
    <Navigation/>
    <Opening/>
  </div>
</template>

<script>
import Background from '~/components/default/Background'
import Logo from '~/components/default/Logo'
import Loading from '~/components/default/Loading'
import Navigation from '~/components/default/Navigation'
import Opening from '~/components/default/Opening'

export default {
  components: {
    Background,
    Logo,
    Loading,
    Navigation,
    Opening
  },
  mounted() {
    if (!this.$device.isMobile) {
      this.$nuxt.error({
        statusCode: 777,
        message: 'Desktop is not implemented yet'
      })
    }
    console.log('this is staging')
    // const progress = document.getElementsByClassName('nuxt-progress')[0]
    // progress.style.height = this.$device.isMobile ? '10px' : '20px'
  }
}
</script>

<style lang="scss" scoped>
.default {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  #scrollArea {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
