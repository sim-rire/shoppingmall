<template>
  <div v-if="Object.keys(detailInfo).length>0">
    <div class="detail-info">
      <div class="describle clear-fix">
        <div class="start left"></div>
        <div class="content">{{detailInfo.desc}}</div>
        <div class="end right"></div>
      </div>
      <p class="info-key">
        <span>{{detailInfo.detailImage[0].key}}</span>
      </p>
      <ul class="detail-imgs">
        <li v-for="(item,idx) in detailInfo.detailImage[0].list" :key="idx">
          <img :src="item" alt @load="imgLoaded" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { debounce } from "common/utils.js";
export default {
  name: "DetailInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      counter: 0,
      imagesLen: 0
    };
  },
  // watch: {
  //   imgLen() {
  //     console.log('1')
  //     console.log(this.detailInfo)
  //     this.imagesLen = this.detailInfo.detailImage[0].list.length;
  //   }
  // },
  methods: {
    imgLoaded() {
      // console.log(this.detailInfo.detailImage[0].list.length)
      // console.log(this.counter)
      // if (++this.counter == this.detailInfo.detailImage[0].list.length) {
      //   this.$emit("imageLoad");
      // }
      //debounce(() => {
        this.$emit("imageLoad");
     // }, 100);
    }
  }
};
</script>

<style scoped>
.describle {
  padding: 0 15px;
}
.describle .start,
.describle .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.describle .content {
  padding: 10px;
}
.describle .start::before,
.describle .end::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background: #333;
  bottom: 0;
}
.describle .end::after {
  right: 0;
}
.describle {
  padding: 15px 0;
  font-size: 14px;
}
.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.detail-imgs img {
  width: 100%;
}
.detail-info {
  
}
</style>