<template>
  <div class="index">
    <div class="fv">
      <div>LEADING & COMPANY</div>
    </div>
    <ul>
      <li class="writing">
        <div class="en">
          Create Cotnents
        </div>
        <div class="ja">
          記事制作
        </div>
      </li>
      <li class="film">
        <div class="en">
          Crete Film
        </div>
        <div class="ja">
          映像制作
        </div>
      </li>
      <li class="web">
        <div class="en">
          Create Website
        </div>
        <div class="ja">
          ウェブ制作
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.index {
  padding-bottom: 30px;
  width: 100%;
  .fv {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 5px;
    background: linear-gradient(
      rgba(75, 75, 75, 0.8) 0%,
      rgba(75, 75, 75, 0.4) 60%,
      rgba(75, 75, 75, 0) 100%
    );
    background: -webkit-linear-gradient(
      rgba(75, 75, 75, 0.8) 0%,
      rgba(75, 75, 75, 0.4) 60%,
      rgba(75, 75, 75, 0) 100%
    );
  }
  ul {
    li {
      margin: 0 auto 20px;
      padding: 30px 40px;
      width: calc(100% - 60px);
      background: #1c1c1c;
      border-radius: 15px;
      font-size: 14px;
      font-weight: bold;
      .ja {
        margin-top: 10px;
        color: #999;
      }
    }
  }
}
</style>
