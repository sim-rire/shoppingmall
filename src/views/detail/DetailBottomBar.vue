<template>
  <div class="b-bar">
    <div class="bar-left left">
      <div>
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-right right">
      <div class="add-car" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
import { debounce } from "common/utils.js";
export default {
  name: "DetailInfo",
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
};
</script>

<style scoped>
.b-bar {
  height: 58px;
  position: relative;
  z-index: 9;
  bottom: 0;
  overflow: hidden;
}
.bar-left,
.bar-right {
  display: flex;
}
.bar-left {
  width: 55%;
}
.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto 3px;
  background: url("~assets/imgs/detail/detail_bottom.png") 0 0/100%;
}
.bar-left .service {
  background-position: 0 97px;
}
.bar-left .shop {
  background-position: 0 202px;
}
.bar-left .select {
}
.bar-right {
  width: 45%;
}
.bar-left > div,
.add-car,
.buy {
  flex: 1;
  text-align: center;
}
.add-car {
  line-height: 58px;
  background: #ffe817;
  width: 25%;
}
.buy {
  line-height: 58px;
  background: var(--color-high-text);
  width: 20%;
  color: #fff;
}
</style>