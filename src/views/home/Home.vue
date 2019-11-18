<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
        :titles="titles"
        class="tab-control-box tabConFixed" v-show="TabFixedShow"
      />
    <scroll
      class="scroll-main"
      ref="scroll"
      :probe-type="3"
      @scrollBack="scrollBack"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banner="banner" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <recommend :recommend="recommend" />
      <popular />
      <tab-control
        :titles="titles"
        class="tab-control-box"
        ref="tab-control"
      />
      <goods-list :goodsList="curGoodsList" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodList.vue";
import Scroll from "components/common/scroll/Scroll";

import HomeSwiper from "./childrenCps/HomeSwiper.vue";
import Recommend from "./childrenCps/Recommend";
import Popular from "./childrenCps/Popular";

import { getHomeMultidata, getHomeGoodsdata } from "network/home";
// import { debounce } from "common/utils.js";
import {itemListenrMixin,backrToTop} from 'common/mixin.js'
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    Popular,
    TabControl,
    GoodsList,
    Scroll
  },
  mixins:[itemListenrMixin,backrToTop],
  data() {
    return {
      titles: [
        { title: "流行", default: true, type: "pop" },
        { title: "经典", default: "", type: "sell" },
        { title: "新款", default: "", type: "new" }
      ],
      TabFixedShow: false,
      tabControlSTop: 0,
      saveY:0,
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        sell: { page: 0, list: [] },
        new: { page: 0, list: [] }
      }
    };
  },
  created() {
    this.getHomeMultidata();
    //请求 商品数据
    this.getHomeGoodsdata("pop");
    this.getHomeGoodsdata("sell");
    this.getHomeGoodsdata("new");
  },
  mounted() {
    // const refresh = debounce(this.$refs.scroll.refresh, 200);
    
    // this.itemImgListeer=() => {
    //   refresh();
    // }
    // this.$bus.$on("imgLoaded", this.itemImgListeer);
  },
  methods: {
    swiperImgLoad() {
      //tab-control
      this.tabControlSTop = this.$refs["tab-control"].$el.offsetTop;
      console.log(this.tabControlSTop);
    },
   
    scrollBack(position) {
      //console.log(position)
     // console.log(this.backTop)
      this.showTop(position)
      //tab-control 是否吸顶
      this.TabFixedShow = Math.abs(position.y) > this.tabControlSTop;
    },
    loadMore() {
      const type = this.curGoodsType;
      this.getHomeGoodsdata(type);
    },

    getHomeMultidata() {
      getHomeMultidata()
        .then(res => {
          //console.log(res);
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getHomeGoodsdata(type) {
      //请求 商品数据
      const page = this.goods[type].page + 1;
      getHomeGoodsdata(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    curGoodsList() {
      //const curGoods = this.titles.filter(item => item.default);
      this.curGoodsType;
      return this.goods[this.curGoodsType].list;
    },
    curGoodsType() {
      return this.titles.filter(item => item.default)[0].type;
    }
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.saveY=this.$refs.scroll.getScrollY()

    this.$bus.$off('imgLoaded',this.itemImgListeer)
  }
};
</script>
<style scoped>
.home-nav {
  background: var(--color-tint);
  color: #fff;
   /* position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;  */
}
#home {
  background: #fff;
  height: 100vh;
  box-sizing: border-box;
}
.tab-control-box {
  /* position: sticky;
  top: 44px; */
  background: #fff;
}
.scroll-main {
  height: calc(100% - 49px);
  overflow: hidden;position: absolute;
  top: 44px;bottom: 49px;left: 0;right: 0;
}

.tabConFixed {
position: relative;
z-index: 99;
}
</style>
