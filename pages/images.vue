<template>
  <Page v-if="opening"/>
</template>

<script>
import { mapGetters } from 'vuex'
import Page from '~/components/pages/images/Page'

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
      title: 'アイキャッチ一覧',
      meta: [
        {
          property: 'og:title',
          content: 'アイキャッチ一覧 | リーディング＆カンパニー株式会社'
        },
        {
          property: 'og:url',
          content: 'https://lrandcom.netlify.com/images'
        },
        {
          property: 'twitter:title',
          content: 'アイキャッチ一覧 | リーディング＆カンパニー株式会社'
        }
      ]
    }
  }
}
</script>
