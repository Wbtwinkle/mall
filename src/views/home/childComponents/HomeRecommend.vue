<template>
  <div id="recommend">
    <div v-for="(item, index) in recommends" class="recommend">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommends: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  #recommend {
    display: flex;
    width: 100%;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
    font-size: 13px;
  }
  #recommend .recommend {
    flex: 1;
  }
  #recommend .recommend a img {
    width: 68px;
    height: 68px;
    margin-bottom: 10px;
  }
</style>