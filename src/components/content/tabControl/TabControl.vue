<template>
  <div class="tab-control">
    <div v-for="(item, index) in text"
         @click="itemClick(index)"
         :class="{active: currentIndex === index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      text: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    height: 38px;
    line-height: 38px;
    font-size: 15px;
  }
  .tab-control div {
    flex: 1;
    text-align: center;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    padding: 5px;
    border-bottom: 2px solid var(--color-high-text);
  }
</style>