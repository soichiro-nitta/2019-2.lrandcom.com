<template>
  <div class="Page">
    <FirstviewVideo
      :title="title"
      :src="src"
      :leave="leave"
    />
    <Services :leave="leave"/>
    <Profile :leave="leave"/>
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'
import { TweenMax, Expo } from 'gsap'
import FirstviewVideo from '~/components/base/FirstviewVideo'
import Services from '~/components/base/Services'
import Profile from './Profile'

export default {
  components: {
    FirstviewVideo,
    Services,
    Profile
  },
  props: {
    leave: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: 'LEADING & COMPANY',
      src: `${URL.WP}/static/index/${
        this.$device.isMobile ? 'mobile' : 'pc'
      }.mp4`
    }
  }
}
</script>

<style lang="scss" scoped>
.Page {
  width: 100%;
  .Services {
    margin: 40px auto 0;
    @include pc {
      margin: 20px auto 0;
    }
  }
}
</style>
