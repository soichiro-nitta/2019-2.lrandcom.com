<template>
  <Page
    v-if="opening"
    :leave="leave"
  />
</template>

<script>
import URL from '~/assets/data/url.json'
import { mapGetters, mapMutations } from 'vuex'
import Page from '~/components/pages/index/Page'

export default {
  components: {
    Page
  },
  computed: {
    ...mapGetters({
      opening: 'opening',
      leave: 'leave'
    })
  },
  async beforeRouteLeave(to, from, next) {
    this.toggleLeave()
    await this.$delay(500)
    next()
  },
  methods: {
    ...mapMutations({
      toggleLeave: 'toggleLeave'
    })
  },
  head() {
    return this.$head({
      title: 'リーディング＆カンパニー株式会社',
      image: `${URL.SITE}/ogp.ong`
    })
  }
}
</script>
