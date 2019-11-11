<template>
<div>
<div class="tab-control">
  <div v-for="(item,idx) in titles" :key="idx" class="tab-control-item" @click="changeTab(item,idx)">
    <span v-if="item.default" class="tab-item-active">{{item.title}}</span>
    <span v-else>{{item.title}}</span>
  </div>
</div>
</div>
</template>

<script>

export default {
  name:'TabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
    //this.tabTitle=this.titles
  },
  data(){
    return {
      tabTitle:[]
    }
  },
  components:{
   
  },
  methods:{
    changeTab(item,idx){
      this.titles.map(n=>n.default='');
      item.default=true;
     // item.default=idx===item.
      }
  }
  
}
</script>

<style scoped>
.tab-item-active{color: var(--color-high-text);border-bottom: 3px solid #ff5777;padding-bottom: 4px;}
.tab-control{display: flex;text-align: center;height: 44px;line-height: 44px;;}
.tab-control-item{flex: 1;}


</style>