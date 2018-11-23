<template>
  <Page v-if="opening"/>
</template>

<script>
import { mapGetters } from 'vuex'
import Page from '~/components/pages/film/Page'

export default {
  components: {
    Page
  },
  computed: {
    ...mapGetters({
      opening: 'opening'
    })
  },
  mounted() {
    document.getElementById('scrollArea').scrollTop = 0
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
          content: 'https://lrandcom.netlify.com/film'
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
