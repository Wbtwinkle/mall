<template>
  <!-- div使用id不太合适，因为导航栏会在cart/category/home/profile等多个文件使用，id会重复 -->
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navigation"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .left, .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>