<template>
  <div class="Tabbar">
    <NLink to="/contents">
      <font-awesome-icon
        :icon="['fal', 'pen']"
      />
    </NLink>
    <div class="share">
      <font-awesome-icon
        :icon="['fal', 'share-alt']"
      />
    </div>
    <NLink to="/film">
      <font-awesome-icon
        :icon="['fal', 'video']"
      />
    </NLink>
    <!-- <div class="indicator" /> -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.Tabbar {
  display: flex;
  justify-content: center;
  position: fixed;
  right: 8px;
  left: 8px;
  bottom: 8px;
  margin: auto;
  width: calc(100% - 16px);
  height: 100px;
  text-align: center;
  background: white;
  @include shadowBlue;
  border-radius: 15px 15px 15px 15px;
  .share {
    @include center;
    margin: -15px 30px auto;
    color: white;
    font-size: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    @include gradientBlue;
    @include shadowBlue;
  }
  a {
    font-weight: bold;
    font-size: 25px;
    letter-spacing: 0;
    opacity: 0.5;
  }
  .indicator {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    margin: auto;
    height: 5px;
  }
}
</style>
