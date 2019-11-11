<template>
  <swiper>
    <swiper-slide v-for="(item,idx) in banner" :key="idx">
      <a :href="item.link">
        <img :src="item.image" alt @load="imageLoad" />
      </a>
    </swiper-slide>
  </swiper>
</template>

<script>
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import { swiper, swiperSlide } from "vue-awesome-swiper";

// require styles
import "swiper/dist/css/swiper.css";
// Vue.use(VueAwesomeSwiper, /* { default global options } */)
export default {
  name: "HomeSwiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImgLoad");
        this.isLoad = true;
      }
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>