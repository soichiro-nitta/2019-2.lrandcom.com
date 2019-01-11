<template>
  <Page v-if="opening"/>
</template>

<script>
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
        {
          property: 'twitter:title',
          content: 'お問い合わせ | リーディング＆カンパニー株式会社'
        }
      ]
    }
  }
}
</script>
