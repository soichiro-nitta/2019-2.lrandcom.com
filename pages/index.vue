<template>
  <Index v-if="opening"/>
</template>

<script>
import { mapGetters } from 'vuex'
import Index from '~/components/Index'

export default {
  components: {
    Index
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
      title: 'Home',
      meta: [
        {
          property: 'og:title',
          content: 'Home | リーディング＆カンパニー株式会社'
        },
        {
          property: 'og:url',
          content: 'https://lrandcom.netlify.com/'
        },
        {
          property: 'twitter:title',
          content: 'Home | リーディング＆カンパニー株式会社'
        }
      ]
    }
  }
}
</script>
