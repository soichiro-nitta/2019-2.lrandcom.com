<template>
  <ul class="Sections">
    <li
      v-for="section in sections"
      :key="section.src"
    >
      <div class="thumb">
        <img :src="section.src">
      </div>
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
    padding: 40px 0;
  }
  li:nth-child(odd) {
    @include pc {
      flex-direction: row-reverse;
      background: linear-gradient(
        rgba(65, 65, 65, 0) 0%,
        rgba(65, 65, 65, 0.6) 50%,
        rgba(65, 65, 65, 0) 100%
      );
      background: -webkit-linear-gradient(
        rgba(65, 65, 65, 0) 0%,
        rgba(65, 65, 65, 0.6) 50%,
        rgba(65, 65, 65, 0) 100%
      );
    }
    .text {
      background: linear-gradient(
        rgba(65, 65, 65, 0) 0%,
        rgba(65, 65, 65, 0.6) 50%,
        rgba(65, 65, 65, 0) 100%
      );
      background: -webkit-linear-gradient(
        rgba(65, 65, 65, 0) 0%,
        rgba(65, 65, 65, 0.6) 50%,
        rgba(65, 65, 65, 0) 100%
      );
      @include pc {
        background: none;
      }
    }
  }
  li {
    @include pc {
      display: flex;
      align-items: center;
      padding: 0 30px;
    }
    .thumb {
      width: 100%;
      @include pc {
        padding: 30px;
        width: 50%;
        height: 22vw;
      }
      img {
        width: 100%;
        height: auto;
        @include pc {
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
        }
      }
    }
    .text {
      padding: 33.7px 30px 33px;
      @include pc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
      }
      .head {
        font-size: 14px;
        font-weight: bold;
        line-height: 2;
        @include pc {
          font-size: 18px;
          letter-spacing: 4px;
        }
      }
      .body {
        margin-top: 30px;
        font-size: 14px;
        color: #999;
        line-height: 2;
        white-space: pre-wrap;
      }
    }
  }
}
</style>
