<template>
  <div class="Images">
    <Page
      v-for="(file, index) in files"
      :file="file"
      :data-index="index"
      :key="file"
    />
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'
import { mapGetters } from 'vuex'
import Page from '~/components/pages/images/Page'

export default {
  components: {
    Page
  },
  data: () => {
    return {
      files: []
    }
  },
  computed: {
    ...mapGetters({
      opening: 'opening'
    })
  },
  async mounted() {
    document.getElementById('scrollArea').scrollTop = 0
    let articles = []
    const { headers } = await this.$axios.get('/?_embed')
    const total = headers['x-wp-total']
    let remainder = total

    if (total <= 100) {
      const { data } = await this.$axios.get('/?_embed&per_page=100')
      articles = data
    } else {
      for (; remainder >= 100; remainder -= 100) {
        const { data } = await this.$axios.get(
          `/?_embed&per_page=100&offset=${total - remainder}`
        )
        articles = articles.concat(data)
      }
      const { data } = await this.$axios.get(
        `/?_embed&per_page=${remainder}&offset=${total - remainder}`
      )
      articles = articles.concat(data)
    }
    console.log(articles)
    this.files = articles.map(article => {
      return `${URL.WP}/wp-content/uploads/${
        article['_embedded']['wp:featuredmedia'][0]['media_details'].file
      }`
    })
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

<style lang="scss" scoped>
.Images {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  padding: 100px;
  overflow: hidden;
}
</style>
