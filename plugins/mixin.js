import URL from '~/assets/data/url.json'
import Vue from 'vue'

Vue.mixin({
  methods: {
    $head(head) {
      return {
        title: head.title,
        meta: [
          {
            property: 'og:url',
            content: URL.SITE + this.$route.path
          },
          { property: 'og:title', content: head.title },
          { property: 'twitter:title', content: head.title },
          { property: 'og:image', content: head.image },
          { property: 'twitter:image', content: head.image },
          // -----
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' },
          {
            name: 'keywords',
            content: 'リーディング＆カンパニー株式会社,夏目力'
          },
          { property: 'fb:app_id', content: '1475229082562793' },
          { property: 'og:description', content: '' },
          {
            property: 'og:site_name',
            content: 'リーディング＆カンパニー株式会社'
          },
          { property: 'twitter:card', content: 'summary_large_image' },
          { property: 'twitter:site', content: '@4chikara' },
          { property: 'twitter:creator', content: '@soichiro_nitta' },
          { property: 'twitter:description', content: '' }
        ]
      }
    }
  }
})
