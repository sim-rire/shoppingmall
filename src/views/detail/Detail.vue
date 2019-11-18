<template>
  <div id="detail">
    <detail-nav-bar @navClick="navClick" :current-index="currentIndex" />
    <scroll class="detail-scroll" ref="scroll" @scrollBack="scrollBack" :probe-type="3">
      <detail-swiper :banner="banner" />
      <detail-title :title-info="titleInfo" />
      <detail-shop :shop-info="shopInfo" />
      <detail-info :detail-info="detailInfo" @imageLoad="imgloaded" />
      <detail-params :params-info="paramsInfo" ref="shop-params" />
      <detail-comment :comment-info="commentInfo" ref="comment" />
      <detail-recommends :recommends="recommends" ref="recommends" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
    <detail-bottom-bar @addToCart="addToCart" />
    <!-- <toast :msg="addMsg" :isShow="isShow" /> -->
  </div>
</template>
<script>
import scroll from "components/common/scroll/Scroll.vue";

import DetailNavBar from "./DetailNavBar";
import DetailSwiper from "./DetailSwiper";
import DetailTitle from "./DetailTitle";
import DetailShop from "./DetailShop";
import DetailInfo from "./DetailInfo";
import DetailParams from "./DetailParams";
import DetailComment from "./DetailComment";
import DetailRecommends from "./DetailRecommends";
import DetailBottomBar from "./DetailBottomBar";

import { getDetail, titleInfo, shop, getRecommend } from "network/detail";

import { itemListenrMixin, backrToTop } from "common/mixin.js";
import { debounce } from "common/utils.js";

import { mapActions } from "vuex";

// import Toast from "components/common/toast/Toast";
export default {
  name: "Detail",
  mixins: [itemListenrMixin, backrToTop],
  data() {
    return {
      iid: null,
      detail: null,
      banner: [],
      titleInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      themeY: [],
      themeYaFn: null,
      currentIndex: 0,
      addMsg: ""
      // isShow: false
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    //获取商品详情
    getDetail(this.iid)
      .then(res => {
        this.detail = res;
        const data = res.result;
        this.banner = data.itemInfo.topImages;

        this.titleInfo = new titleInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo
        );
        this.shopInfo = new shop(data.shopInfo);

        this.detailInfo = data.detailInfo;
        this.itemParams = data.itemParams;
        this.paramsInfo = data.itemParams;
        this.commentInfo = data.rate.list ? data.rate.list[0] : {};
      })
      .catch(err => {
        console.log(err);
      });

    getRecommend()
      .then(res => {
        this.recommends = res.data.list;
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {
    // const refresh = debounce(this.$refs.scroll.refresh, 200);
    // this.itemImgListeer = () => {
    //   refresh();
    // };
    // this.$bus.$on("imgLoaded", this.itemImgListeer);

    this.themeYaFn = debounce(() => {
      this.getThemeY();
    }, 200);
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailTitle,
    DetailShop,
    DetailInfo,
    DetailParams,
    DetailComment,
    DetailRecommends,
    DetailBottomBar,
    scroll
    // Toast
  },
  methods: {
    ...mapActions(["addCommodity"]),
    imgloaded() {
      this.newRefresh();
      this.themeYaFn();
    },
    getThemeY() {
      this.themeY = [];
      this.themeY.push(0);
      this.themeY.push(this.$refs["shop-params"].$el.offsetTop);
      this.themeY.push(this.$refs.comment.$el.offsetTop);
      this.themeY.push(this.$refs.recommends.$el.offsetTop);
      this.themeY.push(Number.MAX_VALUE);
      // console.log(this.themeY);
    },
    navClick(idx) {
      this.$refs.scroll.scrollTo(0, -this.themeY[idx], 100);
    },
    scrollBack(pos) {
      this.showTop(pos);
      this.scrollTheme(-pos.y);
    },
    scrollTheme(pos) {
      let len = this.themeY.length;
      for (let i = 0; i < len - 1; i++) {
        let iPosa = this.themeY[i];
        let iPosb = this.themeY[i + 1];
        if (iPosa <= pos && pos < iPosb) {
          if (this.currentIndex !== i) {
            this.currentIndex = i;
          }
          break;
        }
      }
    },
    addToCart() {
      //商品信息
      const commodity = {
        image: this.banner[0],
        title: this.titleInfo.title,
        price: this.titleInfo.price,
        desc: this.detailInfo.desc,
        iid: this.iid,
        count: 1,
        checked: true
      };
      //将商品加入购物车
      // this.$store.dispatch("addCommodity", commodity);
      this.addCommodity(commodity).then(res => {
        // console.log(res);
        // this.isShow = true;
        // this.addMsg = res;
        // setTimeout(() => {
        //   this.isShow = false;
        // }, 30000);

// console.log(this.$toast)
        this.$toast.show(res,3000)
      });
    }
  },
  destroyed() {
    this.$bus.$off("imgLoaded", this.itemImgListeer);
  }
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background: #fff;
}
.detail-scroll {
  height: calc(100vh - 44px - 49px);
  background: #fff;
  overflow: hidden;
}
</style>