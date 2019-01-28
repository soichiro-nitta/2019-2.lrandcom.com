<template>
  <div class="Layout">
    <Background/>
    <div id="scrollArea">
      {{ `screenHeight: ${screenHeight}` }}<br>
      {{ `screenAvailHeight: ${screenAvailHeight}` }}<br>
      {{ `windowInnerHeight: ${windowHeight}` }}<br>
      {{ `windowOuterHeight: ${windowOuterHeight}` }}<br>
      {{ `documentBodyClientHeight: ${documentBodyClientHeight}` }}<br>
      {{ `documentBodyOffsetHeight: ${documentBodyOffsetHeight}` }}<br>
      {{ `documentBodyScrollHeight: ${documentBodyScrollHeight}` }}<br>
      {{ `documentDocumentElementClientHeight: ${documentDocumentElementClientHeight}` }}<br>
      {{ `documentDocumentElementOffsetHeight: ${documentDocumentElementOffsetHeight}` }}<br>
      {{ `documentDocumentElementScrollHeight: ${documentDocumentElementScrollHeight}` }}<br>
      <!-- <nuxt/> -->
    </div>
    <!-- <Loading/> -->
    <!-- <no-ssr v-if="$device.isMobile">
      <Burger
        :opening="opening"
        :menu="menu"
        @openMenu="openMenu"
      />
    </no-ssr> -->
    <!-- <Logo :opening="opening"/> -->
    <!-- <no-ssr v-if="$device.isMobile">
      <Shade
        :menu="menu"
        @closeMenu="closeMenu"
      />
    </no-ssr>
    <Menu
      :menu="menu"
      :opening="opening"
      @closeMenu="closeMenu"
    /> -->
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
      screenHeight: 0,
      screenAvailHeight: 0,
      windowOuterHeight: 0,
      documentBodyClientHeight: 0,
      documentBodyOffsetHeight: 0,
      documentBodyScrollHeight: 0,
      documentDocumentElementClientHeight: 0,
      documentDocumentElementOffsetHeight: 0,
      documentDocumentElementScrollHeight: 0
    }
  },
  computed: {
    ...mapGetters({
      opening: 'opening',
      menu: 'menu'
    })
  },
  mounted() {
    // this.$el.style.height = `${this.windowHeight}px`
    this.screenHeight = screen.height
    this.screenAvailHeight = screen.availHeight
    this.windowOuterHeight = window.outerHeight
    this.documentBodyClientHeight = document.body.clientHeight
    this.documentBodyOffsetHeight = document.body.offsetHeight
    this.documentBodyScrollHeight = document.body.scrollHeight
    this.documentDocumentElementClientHeight =
      document.documentElement.clientHeight
    this.documentDocumentElementOffsetHeight =
      document.documentElement.offsetHeight
    this.documentDocumentElementScrollHeight =
      document.documentElement.scrollHeight
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
  @include pc {
    background: blue;
  }
  #scrollArea {
    margin-top: 70px;
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
