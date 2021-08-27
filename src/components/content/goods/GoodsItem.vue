<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collection">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {};
        }
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    position: relative;
    width: 46%;
    padding-bottom: 40px;
  }
  .goods-item .goods-info {
    position: absolute;
    font-size: 13px;
    bottom: 7px;
    left: 0;
    right: 0;
    text-align: center;
  }
  .goods-item img {
    width: 100%;
    border-radius: 8px;
  }
  .goods-item p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collection {
    position: relative;
  }
  .goods-info .collection::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>