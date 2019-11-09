<template>
    <div id="tab-bar">
    <slot></slot>
   </div>
</template>
<script>
export default {
    name:'TabBar',
    components:{
      
    }
}
</script>

<style scoped>
#tab-bar{display:flex;box-shadow: 0 -3px 2px rgba(0,0,0,.1);position: fixed;right: 0;left: 0;bottom: 0;}
</style>