import {
  debounce
} from "common/utils.js";
import BackTop from "components/content/backTop/BackTop";
export const itemListenrMixin = {
  data() {
    return {
      itemImgListeer: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 200);

    this.itemImgListeer = () => {
      this.newRefresh();
    };
    this.$bus.$on("imgLoaded", this.itemImgListeer);
    console.log('mmmmmm')
  }

}

export const backrToTop = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTop() {
      //console.log(this.$refs.scroll.scrollTo)
      this.$refs.scroll.scrollTo(0, 0);
    },
    showTop(position) {
      //BackTop是否显示
      this.isShowBackTop = Math.abs(position.y) > 1000;
    }
  }
}
