<template>
  <ul class="Sections">
    <li
      v-for="section in sections"
      :key="section.src"
    >
      <img :src="section.src">
      <div class="text">
        <div class="head">{{ section.head }}</div>
        <div class="body">{{ section.body }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    sections: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.Sections {
  @include pc {
    margin: 0 auto;
    width: 600px;
    overflow: hidden;
  }
  li {
    img {
      width: 100%;
    }
    .text {
      padding: 30px 30px;
      .head {
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 3px;
      }
      .body {
        margin-top: 30px;
        font-size: 14px;
        color: #999;
        line-height: 1.8;
        white-space: pre-wrap;
      }
    }
  }
  li:nth-child(odd) {
    .text {
      background: linear-gradient(
        rgba(65, 65, 65, 0.1) 0%,
        rgba(65, 65, 65, 0.6) 50%,
        rgba(65, 65, 65, 0.1) 100%
      );
      background: -webkit-linear-gradient(
        rgba(65, 65, 65, 0.1) 0%,
        rgba(65, 65, 65, 0.6) 50%,
        rgba(65, 65, 65, 0.1) 100%
      );
    }
  }
}
</style>
