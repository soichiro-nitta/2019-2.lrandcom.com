<template>
  <div class="Menu">
    <MenuShape :menu="menu"/>
    <MenuClose
      :menu="menu"
      @closeMenu="closeMenu"
    />
    <MenuList
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
    }
  },
  watch: {
    async menu(menu) {
      if (menu) {
        this.in()
      } else {
        await this.$delay(500)
        this.out()
      }
    }
  },
  methods: {
    closeMenu() {
      this.$emit('closeMenu')
    },
    in() {
      this.$el.style.display = 'block'
    },
    out() {
      this.$el.style.display = 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
.Menu {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
}
</style>
