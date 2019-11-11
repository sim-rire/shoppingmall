<template>
  
    <div class="goods-item">
      <a :href="goods.link">
      <img :src="goods.show.img" alt="" @load="imgLoaded">
      <div class="goods-info">
        <p class="title">{{goods.title}}</p>
      <span class="price">{{goods.price}}</span>
      <span class="collect">⭐️{{goods.cfav}}</span>
      </div>
      </a>
 
   
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgLoaded(){
      this.$bus.$emit('imgLoaded')
    }
  }
};
</script>

<style scoped>
.goods-item{padding-bottom:10px;width: 48%;}
.goods-item a{width: 100%;}
.goods-item img{width: auto;max-width: 100%;;border-radius: 5px;}
.goods-info{font-size: 12px;text-align: center;}
.goods-info p{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;margin: 5px 0;}
.goods-info .price{color: var(--color-high-text);margin-right: 20px;}
.goods-info .collect{position: relative;}
</style>