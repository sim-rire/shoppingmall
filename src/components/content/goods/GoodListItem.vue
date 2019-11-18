<template>
    <div class="goods-item" @click="itemClick">
      <img :src="goodsImg" alt="" @load="imgLoaded">
      <div class="goods-info">
        <p class="title">{{goods.title}}</p>
      <span class="price">{{goods.price}}</span>
      <span class="collect">⭐️{{goods.cfav}}</span>
      </div>
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
    },
    itemClick(){
      this.$router.push('/detail/'+this.goods.iid)
    }
  },
  computed:{
    goodsImg(){
      return this.goods.image||this.goods.show.img
    }
  }
};
</script>

<style scoped>
.goods-item{padding-bottom:10px;width: 48%;}
.goods-item a{width: 100%;}
.goods-item img{width: auto;max-width: 100%;;border-radius: 5px;}
.goods-info{font-size: 12px;text-align: center;width: 100%;}
.goods-info p{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;margin: 5px 0;}
.goods-info .price{color: var(--color-high-text);margin-right: 20px;}
.goods-info .collect{position: relative;}
</style>