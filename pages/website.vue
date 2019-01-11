<template>
  <Page v-if="opening"/>
</template>

<script>
import { mapGetters } from 'vuex'
import Page from '~/components/pages/website/Page'

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
