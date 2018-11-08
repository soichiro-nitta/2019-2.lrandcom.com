<template>
  <div class="Sentence">
    <div class="intro">
      コンテンツを軸にマーケティングをする際によく言われることですが、記事のクオリティーは70％〜80％で、とにかく記事の数を上げていくことが大切だと思われている傾向があります。もちろん、企業のメディア化という意味でも、ある程度の数を上げていくことは大切なことでしょう。
    </div>
    <img src="/ogp.png">
    <section class="gray">
      <div class="head">THE PROJECT</div>
      <div class="body">
        Today we all integrate real life with the Internet.
        We interact through social media, shop online, play on virtual game platforms and new possibilities are increasingly appearing thanks to new services.
        The Gate project aims at making people’s life easier in this new era.
      </div>
    </section>
    <img src="https://lrandcom.com/wp-content/uploads/2014/08/starbucks_resized-1400x783.jpg">
    <section>
      <div class="head">THE PICTURE</div>
      <div class="body">
        In addition to human body scanning, the 4D booth can perform high-resolution object scans to create images and catalogues of furniture and decoration, jewelry, experimental shapes and prototypes, etc.
      </div>
    </section>
    <img src="https://lrandcom.com/wp-content/themes/lrandcom_dev/assets/img/create-contents/6.png">
    <section class="gray">
      <div class="head">ADVERTISING & ENTERTAINMENT</div>
      <div class="body">
        In terms of Brand activity, offering the target a chance to create his/her own Avatar is a powerful drive towards engagement, customer loyalty and sales promotion.<br><br>
        A scan booth temporarily installed during a branded event or in a showroom produces a significant drive-to-store effect enhancing the physical location’s appeal.
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.Sentence {
  .intro {
    padding: 50px 30px;
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
    padding: 50px;
    overflow: hidden;
    .head {
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 3px;
    }
    .body {
      margin-top: 50px;
      font-size: 14px;
      color: #999;
    }
  }
}
</style>
