<template>
  <div class="chat-item" @click="setCurChat">
    <div class="avatar-wrap">
      <img :src="avatarUrl" />
    </div>
    <div class="content-wrap">
      <div class="contacts">{{contacts}}</div>
      <div class="contactContent">{{contactContent}}</div>
    </div>
    <div class="right">
      <div class="time">{{time}}</div>
      <el-badge :value="unread" v-show="unread>0"></el-badge>
    </div>
  </div>
</template>

<script>
import imgUrl from "@/assets/avatar.jpg";
export default {
  props: {
    avatarUrl: {
      type: String,
      default: imgUrl
    },
    contacts: {
      type: String,
      default: "culler"
    },
    contactContent: {
      type: String,
      default: "hello worldXXXXXXXssss"
    },
    time: {
      type: String,
      default: "10:05"
    },
    unread: {
      type: Number,
      default: 0
    }
  },
  methods: {
    setCurChat() {}
  }
};
</script>

<style lang="scss" scoped>
.chat-item {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 70px;
  padding: 10px;
  align-items: center;
  &:hover {
    background: #eee;
  }
  .avatar-wrap {
    img {
      @include round(40px);
    }
  }
  .content-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    padding-left: 10px;
    height: 100%;
    @include text-ellipsis;
    .contacts {
      font-size: $font-size-lg;
      @include text-ellipsis;
    }
    .contactContent {
      color: #888;
      @include text-ellipsis;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    .time {
      color: #888;
      align-self: flex-start;
      margin: 6px 0;
    }
  }
}
</style>