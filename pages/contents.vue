<template>
  <Page v-if="opening"/>
</template>

<script>
import { mapGetters } from 'vuex'
import Page from '~/components/pages/contents/Page'

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
      title: '記事制作について',
      meta: [
        {
          property: 'og:title',
          content: '記事制作について | リーディング＆カンパニー株式会社'
        },
        {
          property: 'og:url',
          content: 'https://lrandcom.netlify.com/contents'
        },
        {
          property: 'twitter:title',
          content: '記事制作について | リーディング＆カンパニー株式会社'
        }
      ]
    }
  }
}
</script>
