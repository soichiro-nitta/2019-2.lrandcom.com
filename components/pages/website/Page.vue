<template>
  <div class="Page">
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
      :off="3"
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
  props: {
    leave: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: 'サイト制作について',
      src: `${URL.WP}/static/website/${
        this.$device.isMobile ? 'mobile' : 'pc'
      }.mp4`,
      intro:
        'クオリティーの高いWebコンテンツは顧客を引き付ける磁石の役割を果たし、このコンテンツによって作られた企業への信頼が、将来、企業が生み出すキャッシュと同じぐらい重要になってきます。',
      sections: [
        {
          src: `ogp.png`,
          head: '1. デザインとエンジニアリングを平行して同時に進めていく。',
          body: `通常のWebサイト制作であれば、デザインはデザイナーが請け負い、プログラミングはエンジニアが請け負うといったように、それぞれの仕事を分業して、サイトを作っていくことが多いです。

しかし、デザインとプログラミングの両方を理解した人間が、Photoshopのようなデザインツールをできるだけ使わず、コードを書きながらサイトをデザインしていくことでしかできない新しい表現というものがあります。

例えば、アニメーションでだったり、画面のページ遷移でだったり、インタラクション的な部分をデザインしていくためには、デザインとプログラミングを分業するのではなく、平行して作っていくことで、本当にいいものができていくのです。`
        },
        {
          src: `${URL.WP}/static/website/2.png`,
          head: '2. サイトの速さが一番のプライオリティー',
          body: `最新のプログラミング技術を常に導入し、サイトのスピードを速くすることを一番のプライオリティーとして意識します。

メディアサイトをつくるにしても、記事を静的ページとして事前に用意していくことで、サーバーに一回一回リクエストを送る必要がなくなり、サイト全体のスピードや滑らかさが一段とよくなっていくのです。

日本の多くのWebサイトは、自社独自のフレームワークを採用しているため、技術のアップデートに追従していくことができず、どんどん置き去りにされていってしまっています。

Webサイトはもちろんのことですが、もっと複雑なアプリなどをつくる時にも、弊社の技術力が力を発揮できる部分が多いのではないかと思います。`
        },
        {
          src: `${URL.WP}/static/film/3.jpg`,
          head: '3. サーバーのスピードを圧倒的に速く、そして低コストで。',
          body: `最新の技術(GCP,Netlify)やグーグルが提供するインフラなどを上手く組み合わせることで、サーバーのスピードを圧倒的に速く、なおかつ低コストで運用することができます。`
        },
        {
          src: `${URL.WP}/static/film/4.jpg`,
          head: '4. サイトと記事、映像をインテグレーションさせる。',
          body: `どれだけ良い記事や映像のコンテンツを作っても、サイト自体の設計がすごく読みづらい設計になっていたり、映像が上手く再生できないつくりになっていては何の意味もありません。

コードを読み込む順番を変えたり、様々な方法でファイルを軽くしたりすることで、どんな環境でもコンテンツが見やすいUI/UXを作っていくことが大切です。

すべてのコンテンツを適切な位置に配置しながら、デザイン・コーディングをしていくことで、記事や映像などのコンテンツが上手くインテグレーションしたサイトをつくることができます。`
        },
        {
          src: `${URL.WP}/static/website/5.jpg`,
          head: '5. アニメーション',
          body: `サイト内でアニメーションをつくる時、コーディングで表現すると、色々と難しい部分が出てきますが、After Effectsなどの映像の技術を組み合わせることによって、より複雑なことがサイト上でできるようになります。

アニメーションを一番滑らかに表現する技術は、様々なものがあり、デザイン、コーディング、そして、アニメーションの3つを上手くインテグレーションさせることで、一番快適なUI/UXを提供できるのです。`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.Page {
  padding-bottom: 30px;
  width: 100%;
  @include pc {
    padding: 0;
  }
}
</style>
