<template>
  <div class="cart-main">
    <div class="cart-sum">
      <div class="sum-check">
        <!-- <div class="check-btn" :class="{isCheck:isCheck}">
          <img src="~assets/imgs/cart/tick.svg" alt v-show="isCheck" />
        </div>-->
        <checkBtn :is-check="isSelectAll" @click.native="selectAll" />
        <span>全选</span>
      </div>
      <div class="sum-price">总计：{{totalPrice}}</div>
      <div class="sum-topay">去支付</div>
    </div>
  </div>
</template>

<script>
import CheckBtn from "components/content/checkBtn/CheckBtn.vue";
import { filter } from "minimatch";
import { mapGetters } from "vuex";
export default {
  name: "ShoppingTotal",
  // props: {
  //   isCheck: {
  //     type: Boolean,
  //     default: true
  //   }
  // },
  components: {
    CheckBtn
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "¥" +
        this.$store.state.commodityList
          .filter(item => {
            return item.checked;
          })
          .reduce((pre, nex) => {
            return pre + nex.price * nex.count;
          }, 0)
      );
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.find(item => !item.checked);
    }
  },
  methods: {
    selectAll() {
      //全部选中
      // if (this.isSelectAll) {
      //   this.cartList.forEach(item => (item.checked = false));
      // } else {
      //   this.cartList.forEach(item => (item.checked = true));
      // }
      const selectFlag = this.isSelectAll;
      this.cartList.forEach(item => (item.checked = !selectFlag));
    }
  }
};
</script>

<style scoped>
.cart-sum {
  display: flex;
  height: 40px;
  width: 100%;
  background: #eee;
}
.sum-check {
  width: 22%;
  padding-left: 10px;
  display: flex;
  align-items: center;
}

.sum-price {
  width: 48%;
  line-height: 40px;
}
.sum-topay {
  width: 30%;
  background: var(--color-high-text);
  color: #fff;
  text-align: center;
  line-height: 40px;
}
.cart-main {
  position: fixed;
  bottom: 49px;
  width: 100%;
}
.check-btn {
  margin-top: 0;
}
.check-btn img {
  vertical-align: top;
  width: 100%;
}
</style>
