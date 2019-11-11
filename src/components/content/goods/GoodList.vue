<template>
  <div class="goods">
    <good-list-item v-for="(item,idx) in goodsList" :key="idx" :goods='item' class="goods"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
  name: "GoodList",
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodListItem
  }
};
</script>

<style scoped>
.goods{display: flex;flex-wrap: wrap;justify-content: space-evenly;}
</style>