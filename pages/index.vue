<template>
  <div class="index">
    <div class="fv">
      <div>LEADING & COMPANY</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
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
      rgba(100, 100, 100, 0.8) 0%,
      rgba(100, 100, 100, 0.4) 60%,
      rgba(100, 100, 100, 0) 100%
    );
    background: -webkit-linear-gradient(
      rgba(100, 100, 100, 0.8) 0%,
      rgba(100, 100, 100, 0.4) 60%,
      rgba(100, 100, 100, 0) 100%
    );
  }
}
</style>
