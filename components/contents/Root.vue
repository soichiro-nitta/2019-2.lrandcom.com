<template>
  <div class="Root">
    <Firstview />
    <Sentence />
    <BaseServices/>
  </div>
</template>

<script>
import Firstview from './Firstview'
import Sentence from './Sentence'
import BaseServices from '~/components/BaseServices'

export default {
  components: {
    Firstview,
    Sentence,
    BaseServices
  }
}
</script>

<style lang="scss" scoped>
.Root {
  padding-bottom: 30px;
  width: 100%;
  .BaseServices {
    margin-top: 30px;
  }
}
</style>
