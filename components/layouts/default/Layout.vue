<template>
  <div class="Layout">
    <Background/>
    <div id="scrollArea">
      <nuxt/>
    </div>
    <Logo/>
    <Loading/>
    <Burger
      :opening="opening"
      @openMenu="openMenu"
    />
    <Menu
      :menu="menu"
      @closeMenu="closeMenu"
    />
    <Opening/>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Background from './Background'
import Logo from './Logo'
import Loading from './Loading'
import Burger from './Burger'
import Menu from './Menu'
import Opening from './Opening'

export default {
  components: {
    Background,
    Logo,
    Loading,
    Burger,
    Menu,
    Opening
  },
  computed: {
    ...mapGetters({
      opening: 'opening',
      menu: 'menu'
    })
  },
  mounted() {
    console.log('opening: ' + this.opening)
    this.isDev()
  },
  methods: {
    isDev() {
      if (!this.$device.isMobile) {
        this.$nuxt.error({
          statusCode: 777,
          message: 'Desktop is not implemented yet'
        })
      }
      // const progress = document.getElementsByClassName('nuxt-progress')[0]
      // progress.style.height = this.$device.isMobile ? '10px' : '20px'
    },
    ...mapMutations({
      openMenu: 'openMenu',
      closeMenu: 'closeMenu'
    })
  }
}
</script>

<style lang="scss" scoped>
.Layout {
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
