<template>
  <div class="goods">
    <goods-item v-for="item in goods" :goodsItem="item"></goods-item>
  </div>
</template>

<script>
  import GoodsItem from  'components/content/goods/GoodsItem'
  export default {
    name: "Goods",
    props: {
      goods: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {
      GoodsItem
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 10px;
  }
  /* 为什么同样的代码在Goods和GoodsItem中效果不同？
  .goods-item img {*/
    /*width: 100%;*/
  /*}*/
</style>