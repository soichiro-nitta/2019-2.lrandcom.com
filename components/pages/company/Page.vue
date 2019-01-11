<template>
  <div class="Page">
    <div class="tbc">
      <div class="head">会社概要</div>
      <dl>
        <dt>社名：</dt>
        <dd>
          リーディング＆カンパニー株式会社（Leading & Company Inc.）
        </dd>
      </dl>
      <dl>
        <dt>設立：</dt>
        <dd>2014年2月</dd>
      </dl>
      <dl>
        <dt>本社所在地：</dt>
        <dd>
          東京都渋谷区渋谷2-21-1
          渋谷ヒカリエ8F
          Creative Lounge MOV内
        </dd>
      </dl>
      <dl>
        <dt>代表取締役：</dt>
        <dd>夏目　力</dd>
      </dl>
      <dl>
        <dt>事業内容：</dt>
        <dd>Webコンテンツの制作、Webサイト制作、動画制作</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'
import { TweenMax, Expo } from 'gsap'
import ButtonNew from '~/components/base/ButtonNew'

export default {
  components: {
    ButtonNew
  },
  data() {
    return {
      src: `${URL.WP}/static/_id/natsume.jpg`,
      fb: URL.FB,
      tw: URL.TW,
      insta: URL.INSTA
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.Page {
  display: table;
  padding: 0 50px;
  width: 100%;
  height: 100%;
  @include pc {
    margin: 0 auto;
    width: 800px;
  }
  .head {
    padding-bottom: 15px;
    font-size: 25px;
    font-weight: bold;
    line-height: 1;
  }
  dl {
    margin-top: 15px;
    dt {
      font-size: 12px;
      line-height: 1;
      color: #999;
    }
    dd {
      margin-top: 7px;
      margin-left: 5px;
      font-size: 14px;
    }
  }
}
</style>
