<template>
    <swiper class="detail-swiper">
    <swiper-slide v-for="(item,idx) in banner" :key="idx">
        <img :src="item"/>
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
  name: "DetailSwiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped>
.detail-swiper {
 height: 300px;
 overflow: hidden;
}
.detail-swiper img{
  width: 100%;
}
</style>