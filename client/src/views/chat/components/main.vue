<template>
  <div>
    <div class="chatMain" v-if="chat">
      <div class="msgContent">
        <Msg
          v-for="(item,index) in msgData"
          :key="index"
          :content="item.content"
          :time="item.time"
          :isSend="item.isSend"
          class="msg-item"
        />
      </div>
      <div class="editor"></div>
    </div>
    <Empty v-else />
  </div>
</template>

<script>
import Msg from "@/components/msg-item.vue";
import { mapGetters } from "vuex";
import Empty from "./empty";
export default {
  data() {
    return {
      msgData: [
        {
          content: "hello worldxxxxx",
          time: "14:14",
          isSend: 0
        },
        {
          content: "hello worldxxxxx",
          time: "14:14",
          isSend: 1
        },
        {
          content: "hello worldxxxxx",
          time: "14:14",
          isSend: 1
        },
        {
          content: "hello worldxxxxx",
          time: "14:14",
          isSend: 0
        },
        {
          content: "hello worldxxxx",
          time: "14:14",
          isSend: 1
        },
        {
          content: "hello worldxxxx",
          time: "14:14",
          isSend: 1
        },
        {
          content:
            "hello worldxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          time: "14:14",
          isSend: 0
        },
        {
          content: "hello worldxxxxxxxxxxxxxxxxx",
          time: "14:14",
          isSend: 1
        },
        {
          content: "hello worldxxxxxx",
          time: "14:14",
          isSend: 0
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["chat"])
  },
  components: {
    Msg,
    Empty
  }
};
</script>

<style lang="scss" scoped>
.chatMain {
  display: flex;
  flex-direction: column;
  .msgContent {
    flex: 1;
    padding: 10px;
    overflow: auto;
    .msg-item {
      margin: 30px 5px 6px;
    }
  }
  .editor {
    background: #fff;
    height: $editor-height;
  }
}
</style>