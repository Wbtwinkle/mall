<template>
  <div class="tab-bar-item" @click="itemClick()">
    <!-- 在使用插槽时，在slot外层添加一个div，防止实际标签替换插槽时，取消掉某些属性 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- 下面一行代码可以看到class属性在替换时，被去除了 -->
    <!--<slot :class="{active: isActive}" name="item-text"></slot>-->
    <!-- 下面这行代码样式未封装 -->
    <!--<div :class="{active: isActive}"><slot name="item-text"></slot></div>-->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      link: {
        type: String,
        default() {
          return '/home'
        }
      },
      active: {
        type: String,
        default() {
          return '#ff5777';
        }
      }
    },
    computed: {
      isActive() {
        /* this.$route.path是当前页面的path */
        return this.$route.path === this.link;
      },
      activeStyle() {
        return this.isActive ? {color: this.active} : {};
      }
    },
    data() {
      return {
        /* 动态判断是否处于活跃状态，借助isActive计算属性 */
        // isActive: true
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.link)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
  /*.active {*/
    /*color: #ff5777;*/
  /*}*/
</style>
