<template>
  <div class="page">
    <div class="container">
      <div class="contact">
        <div class="head">
          お問い合わせ
        </div>
        <div class="text">
          メディア構築、コンテンツ作成をご希望の企業様から、面白いコンテンツを作ってみたいライターやクリエイターさん、そして、ただオフィスに遊びに来たいという変わり者の方まで、お気軽に下記のメールアドレスからご連絡下さい。
        </div>
        <a
          href="mailto:hello@lrandcom.com"
          class="button"
        >
          HELLO@LRANDCOM.COM
        </a>
      </div>
      <div class="company">
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
            東京都渋谷区東1-1-37 大希青山ビル 3階
          </dd>
        </dl>
        <dl>
          <dt>代表取締役：</dt>
          <dd>夏目 力</dd>
        </dl>
        <dl>
          <dt>事業内容：</dt>
          <dd>Webコンテンツの制作、Webサイト制作、動画制作</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'

export default {
  data() {
    return {
      src: `${URL.WP}/static/_id/natsume.jpg`,
      fb: URL.FB,
      tw: URL.TW,
      insta: URL.INSTA
    }
  },
  head() {
    return this.$head({
      title: 'お問い合わせ / リーディング＆カンパニー株式会社',
      image: `${URL.SITE}/ogp.png`
    })
  }
}
</script>

<style lang="scss" scoped>
.page {
  @include pageBottom;
  .container {
    padding-right: 50px;
    padding-left: 50px;
    @include pc {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
    }
    .head {
      font-size: 18px;
      font-weight: bold;
      line-height: 1;
      @include pc {
        font-size: 1.7vw;
        letter-spacing: 0.5vw;
      }
    }
    .contact {
      margin-top: 100px;
      @include pc {
        margin-top: 0;
        width: 40%;
      }
      .text {
        margin-top: 30px;
        color: $blue4;
        font-size: 12px;
        line-height: 2;
      }
      .button {
        margin-top: 30px;
        display: block;
        width: 250px;
        text-align: center;
        color: white;
        font-weight: bold;
        font-size: 14px;
        line-height: 50px;
        @include gradientPink;
        border-radius: 25px;
        @include shadowPink;
      }
    }
    .company {
      margin-top: 60px;
      padding-bottom: 30px;
      @include pc {
        margin-top: 0;
        padding-bottom: 0;
        width: 42%;
      }
      .head {
        margin-bottom: 30px;
      }
      dl {
        margin-bottom: 30px;
        dt {
          font-size: 12px;
          line-height: 1;
          color: $blue4;
        }
        dd {
          margin-top: 10px;
          margin-left: 5px;
          font-size: 12px;
          @include pc {
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>
