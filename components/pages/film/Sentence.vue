<template>
  <div class="Sentence">
    <div class="intro">
      クオリティーの高いWebコンテンツは顧客を引き付ける磁石の役割を果たし、このコンテンツによって作られた企業への信頼が、将来、企業が生み出すキャッシュと同じぐらい重要になってきます。
    </div>
    <img :src="src1">
    <section class="gray">
      <div class="head">1. 一眼ではないシネマカメラでの撮影</div>
      <div class="body">
        一眼カメラの動画の質が上がり、アマチュアの人たちでもそれなりの動画が撮れるようになりました。そういった意味で、ユーザーに次のビジュアル体験を提供していくためには、一眼カメラよりも一つ上の映画用のカメラ(シネマカメラ)を使って、動画をつくっていかなければなりません。
        一眼カメラはデータが圧縮されてしまいますが、シネマカメラはデータが一切圧縮されないため、色味などの本領を発揮することができるのです。
      </div>
    </section>
    <img :src="src2">
    <section>
      <div class="head">2. 監督、撮影、編集がオールインワン</div>
      <div class="body">
        通常、動画を撮影する場合は、監督、撮影、そして、編集の担当者をそれぞれアサインするため制作コストが一気に膨らんでしまいます。
        弊社では、監督、撮影、編集のすべてができる少数精鋭のメンバーが動画を作成するため、最高のコンテンツクオリティーを保ちながら、一定のコストで作成することができます。
      </div>
    </section>
    <img :src="src3">
    <section class="gray">
      <div class="head">3. 編集力</div>
      <div class="body">
        音楽や動画全体を通してのリズム感など、編集力によって動画が伝えるストーリーが全然違ってきます。
        この一瞬を撮って伝えたいからストーリーを考えていると言っても過言ではないくらい、伝えたいメッセージを絞り、そのメッセージに沿って動画を編集していきます。
      </div>
    </section>
    <img :src="src4">
    <section class="gray">
      <div class="head">4. 時流に合わせた演出・企画を提案</div>
      <div class="body">
        どれだけ素晴らしい動画を作っても、ユーザーに見てもらえなければ何の意味もありません。
        Youtubeに載せるのであれば、最初の5秒でどうインパクトをつけるか、FacebookやTwitterであれば、音がでない状況で視聴者を引き込むにはどうするかなど、マーケット的な観点からエンターテイメント性の高い作品に仕上げていきます。
      </div>
    </section>
  </div>
</template>

<script>
import URL from '~/assets/data/url.json'

export default {
  data() {
    return {
      src1: `${URL.WP}/static/film/1.jpg`,
      src2: `${URL.WP}/static/film/2.jpg`,
      src3: `${URL.WP}/static/film/3.jpg`,
      src4: `${URL.WP}/static/film/4.jpg`,
      src5: `${URL.WP}/static/film/5.png`,
      src6: `${URL.WP}/static/film/6.jpg`
    }
  }
}
</script>

<style lang="scss" scoped>
.Sentence {
  .intro {
    padding: 60px 35px;
    font-size: 14px;
    line-height: 2;
  }
  img {
    width: 100%;
  }
  section.gray {
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
  section {
    padding: 60px 35px;
    overflow: hidden;
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
      .more {
        text-decoration: underline;
        span {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
