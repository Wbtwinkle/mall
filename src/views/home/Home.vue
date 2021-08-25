<template>
  <div>
    <navigation class="nav-home">
      <div slot="center">首页</div>
    </navigation>
  </div>
</template>

<script>
  import Navigation from 'components/common/navigation/Navigation'
  // 为避免组件和axios请求耦合性过高，又封装了一个中间层home.js
  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    components: {
      'navigation': Navigation
    },
    created() {
      getHomeMultidata().then(res => {
        // console.log(res);
        // created生命周期函数回调完成后会销毁，因此其中数据需要保存在data中
        this.recommends = res.data.recommend.list;
        this.banners = res.data.banner.list;
      });
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
