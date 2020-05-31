<template>
  <div class="chat-item" @click="setCurChat">
    <div class="avatar-wrap">
      <img :src="avatarUrl" />
    </div>
    <div class="content-wrap">
      <div class="contacts">{{contacts}}</div>
      <div class="contactContent">{{contactContent}}</div>
    </div>
    <div class="time">{{time}}</div>
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
  &:hover{
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
  .time {
    color: #888;
    align-self: flex-start;
  }
}
</style>