<template>
  <Page
    v-if="opening"
    :leave="leave"
  />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Page from '~/components/pages/website/Page'

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
  mounted() {
    document.getElementById('scrollArea').scrollTop = 0
  },
  async beforeRouteLeave(to, from, next) {
    this.toggleLeave()
    await this.$delay(1000)
    next()
  },
  methods: {
    ...mapMutations({
      toggleLeave: 'toggleLeave'
    })
  },
  head() {
    return {
      title: 'サイト制作について',
      meta: [
        {
          property: 'og:title',
          content: 'サイト制作について | リーディング＆カンパニー株式会社'
        },
        {
          property: 'og:url',
          content: 'https://lrandcom.com/website'
        },
        {
          property: 'twitter:title',
          content: 'サイト制作について | リーディング＆カンパニー株式会社'
        }
      ]
    }
  }
}
</script>
