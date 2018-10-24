<template>
  <Contents v-if="opening"/>
</template>

<script>
import { mapGetters } from 'vuex'
import Contents from '~/components/Contents'

export default {
  components: {
    Contents
  },
  computed: {
    ...mapGetters({
      opening: 'opening'
    })
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
