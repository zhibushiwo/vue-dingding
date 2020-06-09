<template>
  <div class="history">
    <ChatItem
      v-for="(item,index ) in Conversation"
      :key="index"
      :contacts="item.name"
      :contactContent="item.lastMsg"
      class="chat-item"
      :class="CurrentChat&&CurrentChat._id ==item._id?'active':'' "
      :unread="item.unread"
      @click.native="setCurrent(item)"
    />
  </div>
</template>

<script>
import { GetMyFriends } from "@/api/friend";
import ChatItem from "@/components/chat-item.vue";
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      linkMan: []
    };
  },
  components: {
    ChatItem
  },
  computed: {
    ...mapGetters(["CurrentChat", "user", "Conversation"])
  },
  async mounted() {
    const res = await GetMyFriends();
    if (res.code == 200) {
      this.setConversation(res.data);
    }
  },
  methods: {
    setCurrent(item) {
      this.setCurrentChat(item);
      this.$socket.emit("join", {
        uid: this.user._id,
        fid: this.CurrentChat._id
      });
    },
    ...mapMutations(["setCurrentChat", "setConversation"])
  }
};
</script>

<style lang="scss" scoped>
.history {
  overflow: auto;
  border-right: 1px solid #ddd;
  .chat-item + .chat-item {
    border-top: 1px solid #eee;
  }
  .active {
    background: cornsilk;
  }
}
</style>