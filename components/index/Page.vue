<template>
  <div class="Page">
    <Firstview :leave="leave" />
    <Services :leave="leave" />
    <Profile :leave="leave" />
  </div>
</template>

<script>
import Firstview from './Firstview'
import Services from '~/components/base/Services'
import Profile from './Profile'

export default {
  components: {
    Firstview,
    Services,
    Profile
  },
  props: {
    leave: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.Page {
  .Services {
    margin-top: -50px;
    @include pc {
      margin: 20px auto 0;
    }
  }
}
</style>
