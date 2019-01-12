<template>
  <div class="Menu">
    <MenuShape
      :menu="menu"
      :opening="opening"
    />
    <MenuClose
      v-show="isMobile"
      :menu="menu"
      @closeMenu="closeMenu"
    />
    <MenuList
      :opening="opening"
      :menu="menu"
      @closeMenu="closeMenu"
    />
  </div>
</template>

<script>
import { TweenMax, Expo } from 'gsap'
import MenuShape from './MenuShape'
import MenuList from './MenuList'
import MenuClose from './MenuClose'

export default {
  components: {
    MenuShape,
    MenuList,
    MenuClose
  },
  props: {
    menu: {
      type: Boolean,
      required: true
    },
    opening: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isMobile: this.$device.isMobile
    }
  },
  methods: {
    closeMenu() {
      this.$emit('closeMenu')
    }
  }
}
</script>
