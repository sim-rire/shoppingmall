<template>
  <div>
    <div v-if="cartList.length>0">
      <scroll class="content-item" ref="scroll">
        <shopping-item v-for="(item,idx) in cartList" :key="idx" :item="item" />
      </scroll>
    </div>
    <div v-else>购物车还是空的哦～</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/Scroll";
import ShoppingItem from "./ShoppingItem";

export default {
  name: "ShoppingList",
  computed: {
    ...mapGetters(["cartList"])
  },
  components: {
    Scroll,
    ShoppingItem
  },
  activated(){
    console.log('22222')
    this.$refs.scroll.refresh()
  }
};
</script>

<style scoped>
.content-item {
  background: #fff;
  height: calc(100vh - 44px - 100px);
  overflow: hidden;
}
</style>
