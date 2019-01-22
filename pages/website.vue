<template>
  <Page
    v-if="opening"
    :leave="leave"
  />
</template>

<script>
import URL from '~/assets/data/url.json'
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
    // const scrollArea = document.getElementById('scrollArea')
    // TweenMax.to(scrollArea, 0.7, {
    //   scrollTop: scrollArea.scrollTop - 100,
    //   ease: Expo.easeOut
    // })
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
        { property: 'og:image', content: `${URL.SITE}/ogp.ong` },
        {
          property: 'twitter:title',
          content: 'サイト制作について | リーディング＆カンパニー株式会社'
        },
        { property: 'twitter:image', content: `${URL.SITE}/ogp.ong` }
      ]
    }
  }
}
</script>
