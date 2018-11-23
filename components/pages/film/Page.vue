<template>
  <div class="Page">
    <Firstview />
    <Sentence />
    <Services/>
  </div>
</template>

<script>
import Firstview from './Firstview'
import Sentence from './Sentence'
import Services from '~/components/base/Services'

export default {
  components: {
    Firstview,
    Sentence,
    Services
  }
}
</script>

<style lang="scss" scoped>
.Page {
  padding-bottom: 30px;
  width: 100%;
  .BaseServices {
    margin-top: 30px;
  }
}
</style>
