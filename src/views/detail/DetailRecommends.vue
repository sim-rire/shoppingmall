<template>
  <div v-if="recommends.length>0" class="recommends-main">
    <p>商品推荐</p>
    <div class="recommends-box">
      <good-list-item :goods="item" v-for="(item,idx) in recommends" :key="idx" />
    </div>
  </div>
</template>

<script>
import GoodListItem from "components/content/goods/GoodListItem";
export default {
  name: "DetailComment",
  props: {
    recommends: {
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
.recommends-main {
  padding: 5px;
}
.recommends-main p {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
}
.recommends-main .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 13px;
  height: 22px;
  line-height: 22px;
}
/* .recommends-box img {
  width: 100%;
} */
.recommends-box {
  display: flex;

  flex-wrap: wrap;
  justify-content: space-around;
}

</style>