<template>
  <div class="check-btn" :class="{isCheck:isCheck}">
    <img src="~assets/imgs/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  name: "CheckBtn",
  props: {
    isCheck: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
.check-btn {
  width: 20px;height: 20px;;
  margin-top: 60px;
  border-radius: 50%;
  border: 1px solid #aaa;
}
.isCheck {
  border-color: #ff8198;
  background-color: #ff8198;
}
</style>
