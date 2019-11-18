<template>
  <div>
    <NavBar class="nav-bar">
      <span slot="center">购物车({{carProdLen}})</span>
    </NavBar>
    <shopping-list />
    <shopping-total />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import NavBar from "components/common/navbar/NavBar";

import ShoppingList from "./ShoppingList";
import ShoppingTotal from "./ShoppingTotal";

export default {
  name: "Shoppingcar",
  components: {
    NavBar,
    ShoppingList,
    ShoppingTotal
  },
  computed: {
    // itemLen(){
    //   //return this.$store.state.commodityList.length
    //   return this.$store.getters.carProdLen
    // }
    ...mapGetters(["carProdLen"])
  }
};
</script>

<style scoped>
.nav-bar {
  background: var(--color-high-text);
  color: #fff;
  font-size: 18px;
}
</style>
