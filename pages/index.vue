<template>
  <div
    v-if="opened"
    class="page"
  >
    <Firstview :leave="leave" />
    <Services :leave="leave" />
    <Profile :leave="leave" />
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'
import { mapGetters, mapMutations } from 'vuex'
import Firstview from '~/components/index/Firstview'
import Services from '~/components/base/Services'
import Profile from '~/components/index/Profile'

export default {
  components: {
    Firstview,
    Services,
    Profile
  },
  computed: {
    ...mapGetters({
      opened: 'opened',
      leave: 'leave'
    })
  },
  async beforeRouteLeave(to, from, next) {
    this.toggleLeave()
    await this.$delay(500)
    next()
  },
  methods: {
    ...mapMutations({
      toggleLeave: 'toggleLeave'
    })
  },
  head() {
    return this.$head({
      title: 'リーディング＆カンパニー株式会社',
      image: `${URL.SITE}/ogp.ong`
    })
  }
}
</script>

<style lang="scss" scoped>
.page {
  .Services {
    margin-top: -50px;
    @include pc {
      margin: 20px auto 0;
    }
  }
}
</style>
