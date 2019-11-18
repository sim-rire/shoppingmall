<template>
  <div v-if="Object.keys(commentInfo).length>0">
    <div class="comment-info">
      <div class="comment-header">
        <div class="comment-title clear">用户评价</div>
        <div class="comment-more clear">
          更多
          <i class="comment-right"></i>
        </div>
      </div>
      <div class="comment-user">
        <img :src="commentInfo.user.avatar" alt />
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="comment-detail">
        <p>{{commentInfo.content}}</p>
        <div class="comment-other">
          <span class="date">{{commentInfo.created | showDate}}</span>
          <span>{{commentInfo.style}}</span>
        </div>
        <div class="info-imgs">
          <img :src="item" v-for="(item,idx) in commentInfo.images" :key="idx" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils.js";
export default {
  name: "DetailComment",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showDate(val) {
      let date = new Date(val * 1000);
      return formatDate(date, "yyy-MM-dd");
    }
  }
};
</script>

<style scoped>
.comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}

.comment-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
}

.comment-title {
  font-size: 15px;
}

.comment-more {
  margin-right: 10px;
  font-size: 13px;
}

.comment-user {
  padding: 10px 0 5px;
}

.comment-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.comment-user span {
  position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px;
}

.comment-detail {
  padding: 0 5px 15px;
}

.comment-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}

.comment-detail .comment-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}

.comment-other .date {
  margin-right: 8px;
}

.comment-imgs {
  margin-top: 10px;
}

.comment-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>