<template>
  <ul class="contet">
    <li class="item">
      <div class="check-box">
        <check-btn :is-check="item.checked" @click.native="changeCheck"/>
      </div>

      <div class="img-box">
        <img :src="item.image" alt />
      </div>
      <div class="text-box">
        <p class="title">{{item.title}}</p>
        <p class="desc">{{item.desc}}</p>
        <p class="price-count">
          <span class="price">{{item.price}}</span>
          <span class="count">x{{item.count}}</span>
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CheckBtn from "components/content/checkBtn/CheckBtn.vue";
export default {
  name: "ShoppingItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    Scroll,
    CheckBtn
  },
  methods:{
    changeCheck(){
      this.item.checked=!this.item.checked
    }
  }
};
</script>

<style scoped>
.item {
  display: flex;
  padding: 8px;
  border-bottom: 1px solid #eee;
}
/* .check-box > div {
  margin-top: 60px;
} */
.check-box {
  width: 8%;
  padding: 0 6px;
}
.img-box {
  width: 34%;
}
img {
  width: 90%;
  border-radius: 10px;
}
.text-box {
  width: 58%;
}

.title {
  font-weight: bold;
  overflow: hidden;
  line-height: 2;
  margin-top: 20px;
  font-size: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.desc {
  color: #ccc;
  overflow: hidden;
  line-height: 2;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price {
  color: var(--color-high-text);
}
.count {
  color: #ccc;
}
.price-count {
  margin-top: 62px;
  display: flex;
  justify-content: space-between;
}
</style>
