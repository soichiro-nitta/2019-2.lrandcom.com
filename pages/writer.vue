<template>
  <Page v-if="opening"/>
</template>

<script>
import { mapGetters } from 'vuex'
import Page from '~/components/pages/writer/Page'

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
      title: '会社概要',
      meta: [
        {
          property: 'og:title',
          content: 'ライター募集 | リーディング＆カンパニー株式会社'
        },
        {
          property: 'og:url',
          content: 'https://lrandcom.com/writer'
        },
        {
          property: 'twitter:title',
          content: 'ライター募集 | リーディング＆カンパニー株式会社'
        }
      ]
    }
  }
}
</script>
