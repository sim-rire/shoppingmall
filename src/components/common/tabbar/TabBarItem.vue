<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props:{
      path:String,
      activeColor:{
          type:String,
          default:'red'
      }
  },
  data(){
      return{
          //isActive:true,
         // path:'/home'
      }
  },
  methods:{
      itemClick(){
       this.$router.push(this.path)  
      }
  },
  computed:{
      isActive(){
          return this.$route.path===this.path
      },
      activeStyle(){
          //console.log(this.activeColor)
          return this.isActive?{color:this.activeColor}:{}
      }
  }
};
</script>

<style scoped>
.tab-bar-item{flex: 1;text-align: center;height: 49px;background: #f6f6f6;font-size: 12px;}
.tab-bar-item img{width: 27px;height: 27px;vertical-align: middle;margin-top: 3px;}
/* .active{color:red;} */
</style>