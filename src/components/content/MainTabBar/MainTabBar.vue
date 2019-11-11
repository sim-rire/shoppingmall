<template>
 <tab-bar>
     <tab-bar-item path="/home" activeColor="#ff5777">
       <img slot="item-icon" src="~assets/imgs/tabbar/home.svg" alt="">
       <img slot="item-icon-active" src="~assets/imgs/tabbar/home-active.svg" alt="">
       <div slot="item-text">首页</div>
     </tab-bar-item>
     <tab-bar-item path="/category" activeColor="#ff5777">
       <img slot="item-icon" src="~assets/imgs/tabbar/category.svg" alt="">
       <img slot="item-icon-active" src="~assets/imgs/tabbar/category-active.svg" alt="">
       <div slot="item-text">分类</div>
     </tab-bar-item>
     <tab-bar-item path="/shoppingcar" activeColor="#ff5777">
       <img slot="item-icon" src="~assets/imgs/tabbar/shoppingcar.svg" alt="">
       <img slot="item-icon-active" src="~assets/imgs/tabbar/shoppingcar-active.svg" alt="">
       <div slot="item-text">购物车</div>
     </tab-bar-item>
     <tab-bar-item path="/profile" activeColor="#ff5777">
       <img slot="item-icon" src="~assets/imgs/tabbar/profile.svg" alt="">
       <img slot="item-icon-active" src="~assets/imgs/tabbar/profile-active.svg" alt="">
       <div slot="item-text">我的</div>
     </tab-bar-item>
   </tab-bar>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>