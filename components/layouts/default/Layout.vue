<template>
  <div class="Layout">
    <Background/>
    <div id="scrollArea">
      {{ windowWidth }}
      <nuxt/>
    </div>
    <Loading/>
    <Burger
      v-show="isMobile"
      :opening="opening"
      :menu="menu"
      @openMenu="openMenu"
    />
    <Logo :opening="opening"/>
    <Shade
      v-show="isMobile"
      :menu="menu"
      @closeMenu="closeMenu"
    />
    <Menu
      :menu="menu"
      :opening="opening"
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
import Shade from './Shade'
import Menu from './Menu'
import Opening from './Opening'

export default {
  components: {
    Background,
    Logo,
    Loading,
    Burger,
    Shade,
    Menu,
    Opening
  },
  data() {
    return {
      isMobile: this.$device.isMobile
    }
  },
  computed: {
    ...mapGetters({
      opening: 'opening',
      menu: 'menu'
    })
  },
  methods: {
    isDev() {
      // if (!this.$device.isMobile) {
      //   this.$nuxt.error({
      //     statusCode: 777,
      //     message: 'Desktop is not implemented yet'
      //   })
      // }
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
    margin-top: 69px;
    position: relative;
    width: 100%;
    height: calc(100% - 70px);
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    // will-change: transform;
    @include pc {
      padding: 10px;
      margin-left: 310px;
      width: calc(100% - 310px);
    }
  }
}
</style>
