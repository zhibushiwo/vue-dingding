<template>
  <div class="head">
    <div class="left">
      <SearchBar />
    </div>
    <div class="right">
      <ChatHead
        :avatar="user.avatar"
        :userName="user.userName"
        :userDetail="user.userDetail"
        v-show="$route.name==='chat' && chat"
      />
    </div>
  </div>
</template>

<script>
import imgUrl from "@/assets/avatar.jpg";
import ChatHead from "@/components/chat-header.vue";
import SearchBar from "@/components/search-bar.vue";
import { mapGetters } from "vuex";
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
    },
    ...mapGetters(["chat"])
  },
  created() {},
  mounted() {
    console.log(this.chat);
  },
  watch: {},
  methods: {},
  components: {
    ChatHead,
    SearchBar
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
