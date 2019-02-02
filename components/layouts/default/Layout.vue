<template>
  <div class="Layout">
    <Background/>
    <nuxt/>
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
    </no-ssr> -->
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
import Burger from './Burger'
import Shade from './Shade'
import Menu from './Menu'
import Opening from './Opening'

export default {
  components: {
    Background,
    Logo,
    Burger,
    Shade,
    Menu,
    Opening
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
