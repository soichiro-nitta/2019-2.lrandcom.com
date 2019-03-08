<template>
  <div class="Head">
    <NLink to="/">
      <font-awesome-icon :icon="['fal', 'long-arrow-alt-left']" />
    </NLink>
    <div class="sort">
      <div class="all">
        All
      </div>
      <div class="sample">
        納品サンプル
      </div>
      <div class="blog">
        ブログ
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>


<style lang="scss" scoped>
$articlesOut: 100px;
$height: 270px;
$svgMarginTop: 30px;
$svgFontSize: 25px;
$sortHeight: 30px;

.Head {
  width: 100%;
  height: $height;
  // background: black;
  @include gradientBlue;
  a {
    svg {
      margin: $svgMarginTop 0 0 $svgMarginTop;
      color: white;
      font-size: $svgFontSize;
    }
  }
  .sort {
    display: flex;
    justify-content: space-between;
    margin: (
        $height - $articlesOut - $svgMarginTop - $svgFontSize - $sortHeight
      ) / 2 auto 0;
    width: calc(100% - 40px);
    & > div {
      width: 30%;
      text-align: center;
      color: $pink1;
      font-size: 10px;
      font-weight: bold;
      line-height: $sortHeight;
      background: white;
      @include shadowPink;
      border-radius: 15px;
      // 95px
    }
    .all {
      color: white;
      @include gradientPink;
    }
  }
}
</style>
