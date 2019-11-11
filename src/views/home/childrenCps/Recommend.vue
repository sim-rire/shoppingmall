<template>
<div class="recommend-main">
  <div v-for="(item,idx) in recommend" :key="idx" class="recommend-list">
     <a :href="item.link">
       <img :src="item.image" alt="">
       <p>{{item.title}}</p>
     </a>
  </div>

</div>
</template>

<script>

export default {
  name:'Recommend',
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
   
  }
  
}
</script>

<style scoped>
.recommend-main{display: flex;text-align: center;font-size: 12px;}
.recommend-list{flex: 1;padding: 12px 0 22px;border-bottom: 8px solid #eee;}
.recommend-list img{width: 70px;height: 70px;;}

</style>