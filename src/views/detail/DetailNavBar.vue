<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="goBack">
        <img src="~assets/imgs/tabbar/goback.svg" alt />
      </div>
      <div slot="center" class="tab-title">
        <div
          v-for="(item,idx) in tabTitle"
          :key="idx"
          class="tab-item"
          :class="{active:currentIndex===idx}"
          @click="changeTab(idx)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  data() {
    return {
      tabTitle: ["商品", "参数", "评价", "推荐"],
     // curIdx: 0
    };
  },
  props: {
    currentIndex: {
      type: Number,
      default:0
    }
  },
  components: {
    NavBar
  },
  methods: {
    changeTab(idx) {
      //this.currentIndex = idx;
      this.$emit("navClick", idx);
    },
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.back {
  width: 44px;
  height: 44px;
}
.back img {
  width: 100%;
}
.tab-title {
  display: flex;
  font-size: 13px;
}
.tab-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>