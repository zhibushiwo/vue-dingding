<template>
  <div class="history">
    <ChatItem
      v-for="(item,index ) in linkMan"
      :key="index"
      class="chat-item"
      :class="chat&&chat._id ==item._id?'active':'' "
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
    ...mapGetters(["chat"])
  },
  async mounted() {
    const res = await GetMyFriends();
    if (res.code == 200) {
      this.linkMan = res.data;
    }
  },
  methods: {
    setCurrent(item) {
      console.log(1);
      this.setChat(item);
    },
    ...mapMutations(["setChat"])
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