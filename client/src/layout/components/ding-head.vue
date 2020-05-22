<template>
  <div class="head">
    <div class="left"></div>
    <div class="right">
      <ChatHead
        :avatar="user.avatar"
        :userName="user.userName"
        :userDetail="user.userDetail"
        v-if="$route.name==='chat'"
      />
    </div>
  </div>
</template>

<script>
import imgUrl from "@/assets/avatar.jpg";
import ChatHead from "@/components/chat-header.vue";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    user() {
      return {
        avatar: imgUrl,
        userName: "culler",
        userDetail: "Culler( 前端--什么玩意儿~)"
      };
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    ChatHead
  }
};
</script>

<style scoped lang="scss">
.head {
  position: absolute;
  top: 0;
  right: 0;
  left: $side-bar-width;
  height: $layout-head-height;
  border-bottom: 1px solid #ddd;
  display: flex;
  .left {
    width: $aside-width;
    border-right: 1px solid #ddd;
  }
  .right {
    flex: 1;
    padding: 5px 15px;
  }
}
</style>
