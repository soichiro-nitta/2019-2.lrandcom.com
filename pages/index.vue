<template>
  <div class="page">
    <Firstview :leave="leave" />
    <Services :leave="leave" />
    <Profile :leave="leave" />
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'
import Firstview from '~/components/index/Firstview'
import Services from '~/components/base/Services'
import Profile from '~/components/index/Profile'

export default {
  components: {
    Firstview,
    Services,
    Profile
  },
  data() {
    return {
      leave: false
    }
  },
  async beforeRouteLeave(to, from, next) {
    this.go()
    await this.$delay(500)
    next()
  },
  methods: {
    go() {
      this.leave = true
    }
  },
  head() {
    return this.$head({
      title: 'リーディング＆カンパニー株式会社',
      image: `${URL.SITE}/ogp.png`
    })
  }
}
</script>

<style lang="scss" scoped>
.page {
  @include pageBottom;
  .Services {
    margin-top: -40px;
    @include pc {
      margin-top: -30px;
    }
  }
}
</style>
