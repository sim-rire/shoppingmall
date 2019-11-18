<template>
  <div class="shop-info">
    <div class="shop-logo">
      <img :src="shopInfo.logo" alt />
      <p>{{shopInfo.name}}</p>
    </div>
    <div class="shop-box">
      <div class="shop-sell">
        <div class="left sell-count">
          <p>{{shopInfo.sells|sellCount}}</p>
          <p>总销量</p>
        </div>
        <div class="left goods-count">
          <p>{{shopInfo.goodsCount}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop-scroe">
        <ul>
          <li v-for="(item,idx) in shopInfo.score" :key="idx">
            <span>{{item.name}}</span>
            <span class="score" :class="{red:item.isBetter}">{{item.score}}</span>
            <span class="scoreflag" :class="{bgcolor:item.isBetter}">{{item.isBetter?'高':'低'}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="shop-enter">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    sellCount(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    }
  }
};
</script>

<style scoped>
.shop-info {
  padding: 5px;
  border-bottom: 3px solid #eee;
}
.shop-logo {
  margin-left: 7px;
  display: flex;
}
.shop-logo img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.shop-logo p {
  height: 50px;
  line-height: 50px;
}
.shop-box {
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
}
.shop-box .sell-count {
  margin-right: 18px;
  line-height: 1.5;
}
.shop-box .goods-count {
  padding-right: 26px;
  border-right: 2px solid #eee;
  line-height: 1.5;
}
.shop-scroe ul {
  text-align: left;
}
.shop-scroe li {
  list-style: none;
  line-height: 1.8;
}
.shop-scroe span {
  margin-right: 15px;
}
.shop-scroe .score {
  color: green;
  width: 48px;
  display: inline-block;
}
.shop-scroe .red {
  color: red;
}
.shop-scroe .scoreflag {
  color: #fff;
  background: green;
}
.shop-scroe .scoreflag.bgcolor {
  background: red;
}
.shop-enter {
  text-align: center;
  margin: 10px 0;
}
.shop-enter span {
  display: inline-block;
  background: #eee;
  width: 150px;
  line-height: 30px;
  height: 30px;
  border-radius: 10px;
  margin: 10px 0;
}
</style>