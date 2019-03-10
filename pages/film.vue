<template>
  <div class="page">
    <FirstviewVideo
      :title="title"
      :src="src"
      :leave="leave"
    />
    <Intro
      :intro="intro"
      :leave="leave"
    />
    <Sections
      :sections="sections"
      :leave="leave"
    />
    <Services
      :off="2"
      :leave="leave"
    />
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'
import FirstviewVideo from '~/components/base/FirstviewVideo'
import Intro from '~/components/base/Intro'
import Sections from '~/components/base/Sections'
import Services from '~/components/base/Services'

export default {
  components: {
    FirstviewVideo,
    Intro,
    Sections,
    Services
  },
  data() {
    return {
      title: '映像制作について',
      src: `${URL.WP}/static/film/${
        this.$device.isMobile ? 'mobile' : 'pc'
      }.mp4`,
      leave: false,
      intro:
        'クオリティーの高いWebコンテンツは顧客を引き付ける磁石の役割を果たし、このコンテンツによって作られた企業への信頼が、将来、企業が生み出すキャッシュと同じぐらい重要になってきます。',
      sections: [
        {
          src: `${URL.WP}/static/film/1.jpg`,
          head: '1. 一眼ではないシネマカメラでの撮影',
          body: `一眼カメラの動画の質が上がり、アマチュアの人たちでもそれなりの動画が撮れるようになりました。そういった意味で、ユーザーに次のビジュアル体験を提供していくためには、一眼カメラよりも一つ上の映画用のカメラ(シネマカメラ)を使って、動画をつくっていかなければなりません。

一眼カメラはデータが圧縮されてしまいますが、シネマカメラはデータが一切圧縮されないため、色味などの本領を発揮することができるのです。`
        },
        {
          src: `${URL.WP}/static/film/2.jpg`,
          head: '2. 監督、撮影、編集がオールインワン',
          body: `通常、動画を撮影する場合は、監督、撮影、そして、編集の担当者をそれぞれアサインするため制作コストが一気に膨らんでしまいます。

弊社では、監督、撮影、編集のすべてができる少数精鋭のメンバーが動画を作成するため、最高のコンテンツクオリティーを保ちながら、一定のコストで作成することができます。`
        },
        {
          src: `${URL.WP}/static/film/3.jpg`,
          head: '3. 編集力',
          body: `音楽や動画全体を通してのリズム感など、編集力によって動画が伝えるストーリーが全然違ってきます。

この一瞬を撮って伝えたいからストーリーを考えていると言っても過言ではないくらい、伝えたいメッセージを絞り、そのメッセージに沿って動画を編集していきます。`
        },
        {
          src: `${URL.WP}/static/film/4.jpg`,
          head: '4. 時流に合わせた演出・企画を提案',
          body: `どれだけ素晴らしい動画を作っても、ユーザーに見てもらえなければ何の意味もありません。

Youtubeに載せるのであれば、最初の5秒でどうインパクトをつけるか、FacebookやTwitterであれば、音がでない状況で視聴者を引き込むにはどうするかなど、マーケット的な観点からエンターテイメント性の高い作品に仕上げていきます。`
        }
      ]
    }
  },
  async beforeRouteLeave(to, from, next) {
    this.leave = true
    await this.$delay(500)
    next()
  },
  head() {
    return this.$head({
      title: '映像制作について / リーディング＆カンパニー株式会社',
      image: `${URL.SITE}/ogp.png`
    })
  }
}
</script>

<style lang="scss" scoped>
.page {
  @include pageBottom;
  .Services {
    // margin-top: -40px;
    margin-bottom: 45px;
  }
}
</style>
