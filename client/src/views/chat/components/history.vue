<template>
  <div class="history">
    <ChatItem v-for=" n in 12 " :key="n" class="chat-item" />
  </div>
</template>

<script>
import ChatItem from "@/components/chat-item.vue";
export default {
  data() {
    return {
      contactHistory: []
    };
  },
  components: {
    ChatItem
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
}
</style>