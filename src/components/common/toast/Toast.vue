<template>
  <div class="toast" v-show="isShow">
    <div class="content">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false
    }
  },
  methods: {
    show(message, duration=2000) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    }
  }
};
</script>

<style scoped>
.toast {
  
   /* position: fixed; */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; 
  position: absolute;z-index: 999;
}
.content {
  position: absolute;
  width: 80%;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 16px;
  padding: 10px;
}
</style>
