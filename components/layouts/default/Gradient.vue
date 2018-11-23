<template>
  <div class="Gradient">
    <div class="top"/>
    <div class="bottom"/>
  </div>
</template>

<style lang="scss" scoped>
.Gradient {
  .top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: linear-gradient(rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
    background: -webkit-linear-gradient(
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
    background: -webkit-linear-gradient(
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
}
</style>
