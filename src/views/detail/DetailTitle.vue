<template>
  <div class="title-info">
    <p class="title">{{titleInfo.title}}</p>
    <div class="price-main">
      <span class="price">¥{{titleInfo.price}}</span>
      <span class="oldPrice">{{titleInfo.oldPrice}}</span>
      <span
        class="discount"
        :style="{background:titleInfo.discountBgColor}"
      >{{titleInfo.discountDesc}}</span>
    </div>
    <div class="columns">
      <span v-for="item in titleInfo.columns" :key="item">{{item}}</span>
    </div>
    <div class="services">
      <div v-for="(item,idx) in titleInfo.services" :key="idx">
        <img :src="item.icon" alt />
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTitle",
  props: {
    titleInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      service: {}
    };
  },
  computed: {
    services() {
      this.service = this.titleInfo.services.pop();
    },
    columns() {
      console.log(this.service);
      this.titleInfo.columns.pop();
      this.titleInfo.columns.push(this.service.name);
    }
  }
};
</script>

<style scoped>
.title-info {
  padding: 5px;
}
.title {
  font-weight: bold;
  font-size: 16px;
  padding-top: 7px;
}
.price-main {
  margin: 7px 0;
}
.price {
  color: var(--color-high-text);
  font-size: 18px;
  margin-right: 8px;
}
.oldPrice {
  color: #ccc;
  font-size: 12px;
  text-decoration: line-through;
}
.discount {
  color: #fff;
  padding: 0 5px;
  border-radius: 5px;
  font-size: 13px;
  margin-left: 14px;
  vertical-align: super;
}
.columns,
.services {
  color: #ccc;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}
.services {
  padding: 20px 0;
}
.services img {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 2px;
}
</style>