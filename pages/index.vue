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
    return {
      title: 'ホーム',
      meta: [
        {
          property: 'og:title',
          content: 'ホーム | リーディング＆カンパニー株式会社'
        },
        {
          property: 'og:url',
          content: 'https://lrandcom.com/'
        },
        { property: 'og:image', content: `${URL.SITE}/ogp.ong` },
        {
          property: 'twitter:title',
          content: 'ホーム | リーディング＆カンパニー株式会社'
        },
        { property: 'twitter:image', content: `${URL.SITE}/ogp.ong` }
      ]
    }
  }
}
</script>
