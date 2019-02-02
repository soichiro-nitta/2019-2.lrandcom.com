<template>
  <Page v-if="opening" />
</template>

<script>
import URL from '~/assets/data/url.json'
import { mapGetters } from 'vuex'
import Page from '~/components/pages/contact/Page'

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
      title: 'お問い合わせ',
      meta: [
        {
          property: 'og:title',
          content: 'お問い合わせ | リーディング＆カンパニー株式会社'
        },
        {
          property: 'og:url',
          content: 'https://lrandcom.com/contact'
        },
        { property: 'og:image', content: `${URL.SITE}/ogp.ong` },
        {
          property: 'twitter:title',
          content: 'お問い合わせ | リーディング＆カンパニー株式会社'
        },
        { property: 'twitter:image', content: `${URL.SITE}/ogp.ong` }
      ]
    }
  }
}
</script>
