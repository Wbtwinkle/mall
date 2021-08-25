<template>
  <div>
    <navigation class="nav-home">
      <div slot="center">首页</div>
    </navigation>
  </div>
</template>

<script>
  import Navigation from 'components/common/navigation/Navigation'
  export default {
    name: "Home",
    components: {
      'navigation': Navigation
    }
  }
</script>

<style scoped>
  .nav-home {
    background-color: var(--color-tint);
  }
  .nav-home {
    color: #fff;
  }
</style>
