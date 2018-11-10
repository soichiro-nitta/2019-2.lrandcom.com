<template>
  <Root v-if="opening"/>
</template>

<script>
import { mapGetters } from 'vuex'
import Root from '~/components/index/Root'

export default {
  components: {
    Root
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
      title: 'ホーム',
      meta: [
        {
          property: 'og:title',
          content: 'ホーム | リーディング＆カンパニー株式会社'
        },
        {
          property: 'og:url',
          content: 'https://lrandcom.netlify.com/'
        },
        {
          property: 'twitter:title',
          content: 'ホーム | リーディング＆カンパニー株式会社'
        }
      ]
    }
  }
}
</script>
