<template>
  <Page
    v-if="opening"
    :leave="leave"
  />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Page from '~/components/pages/film/Page'

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
    const scrollArea = document.getElementById('scrollArea')
    TweenMax.to(scrollArea, 1.3, {
      scrollTop: scrollArea.scrollTop - 300,
      ease: Expo.easeOut
    })
    this.toggleLeave()
    await this.$delay(1300)
    next()
  },
  methods: {
    ...mapMutations({
      toggleLeave: 'toggleLeave'
    })
  },
  head() {
    return {
      title: '映像制作について',
      meta: [
        {
          property: 'og:title',
          content: '映像制作について | リーディング＆カンパニー株式会社'
        },
        {
          property: 'og:url',
          content: 'https://lrandcom.com/film'
        },
        {
          property: 'twitter:title',
          content: '映像制作について | リーディング＆カンパニー株式会社'
        }
      ]
    }
  }
}
</script>
