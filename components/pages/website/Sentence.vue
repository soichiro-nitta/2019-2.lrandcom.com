<template>
  <div class="Sentence">
    <div class="intro">
      クオリティーの高いWebコンテンツは顧客を引き付ける磁石の役割を果たし、このコンテンツによって作られた企業への信頼が、将来、企業が生み出すキャッシュと同じぐらい重要になってきます。
    </div>
    <img :src="src1">
    <section class="gray">
      <div class="head">1.デザインとエンジニアリングを平行して同時に進めていく。</div>
      <div class="body">
        通常のWebサイト制作であれば、デザインはデザイナーが請け負い、プログラミングはエンジニアが請け負うといったように、それぞれの仕事を分業して、サイトを作っていくことが多いです。
        しかし、デザインとプログラミングの両方を理解した人間が、Photoshopのようなデザインツールをできるだけ使わず、コードを書きながらサイトをデザインしていくことでしかできない新しい表現というものがあります。
        例えば、アニメーションでだったり、画面のページ遷移でだったり、インタラクション的な部分をデザインしていくためには、デザインとプログラミングを分業するのではなく、平行して作っていくことで、本当にいいものができていくのです。
      </div>
    </section>
    <img :src="src2">
    <section>
      <div class="head">2.サイトの速さが一番のプライオリティー</div>
      <div class="body">
        最新のプログラミング技術を常に導入し、サイトのスピードを速くすることを一番のプライオリティーとして意識します。
        メディアサイトをつくるにしても、記事を静的ページとして事前に用意していくことで、サーバーに一回一回リクエストを送る必要がなくなり、サイト全体のスピードや滑らかさが一段とよくなっていくのです。
        日本の多くのWebサイトは、自社独自のフレームワークを採用しているため、技術のアップデートに追従していくことができず、どんどん置き去りにされていってしまっています。
        Webサイトはもちろんのことですが、もっと複雑なアプリなどをつくる時にも、弊社の技術力が力を発揮できる部分が多いのではないかと思います。
      </div>
    </section>
    <img :src="src3">
    <section class="gray">
      <div class="head">3. サーバーのスピードを圧倒的に速く、そして低コストで。</div>
      <div class="body">
        最新の技術(GCP,Netlify)やグーグルが提供するインフラなどを上手く組み合わせることで、サーバーのスピードを圧倒的に速く、なおかつ低コストで運用することができます。
      </div>
    </section>
    <img :src="src4">
    <section class="gray">
      <div class="head">4. サイトと記事、映像をインテグレーションさせる。</div>
      <div class="body">
        どれだけ良い記事や映像のコンテンツを作っても、サイト自体の設計がすごく読みづらい設計になっていたり、映像が上手く再生できないつくりになっていては何の意味もありません。
        コードを読み込む順番を変えたり、様々な方法でファイルを軽くしたりすることで、どんな環境でもコンテンツが見やすいUI/UXを作っていくことが大切です。
        すべてのコンテンツを適切な位置に配置しながら、デザイン・コーディングをしていくことで、記事や映像などのコンテンツが上手くインテグレーションしたサイトをつくることができます。
      </div>
    </section>
    <img :src="src5">
    <section>
      <div class="head">5.アニメーション</div>
      <div class="body">
        サイト内でアニメーションをつくる時、コーディングで表現すると、色々と難しい部分が出てきますが、After Effectsなどの映像の技術を組み合わせることによって、より複雑なことがサイト上でできるようになります。
        アニメーションを一番滑らかに表現する技術は、様々なものがあり、デザイン、コーディング、そして、アニメーションの3つを上手くインテグレーションさせることで、一番快適なUI/UXを提供できるのです。
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
