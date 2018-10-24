<template>
  <Website v-if="opening"/>
</template>

<script>
import { mapGetters } from 'vuex'
import Website from '~/components/Website'

export default {
  components: {
    Website
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
          content: 'https://lrandcom.netlify.com/website'
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
