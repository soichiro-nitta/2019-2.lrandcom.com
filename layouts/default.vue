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
import Background from '~/components/default/Background'
import Logo from '~/components/default/Logo'
import Burger from '~/components/default/Burger'
import Shade from '~/components/default/Shade'
import Menu from '~/components/default/Menu'
import Opening from '~/components/default/Opening'

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
    ...mapMutations({
      openMenu: 'openMenu',
      closeMenu: 'closeMenu'
    })
  }
}
</script>
