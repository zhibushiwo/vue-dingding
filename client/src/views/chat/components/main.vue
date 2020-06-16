<template>
  <div>
    <div class="chatMain">
      <div class="msgContent" ref="msgContent">
        <Msg
          v-for="(item,index) in msgData"
          :key="index"
          :content="item.content"
          :time="item.time"
          :isSend="item.isSend"
          :type="item.type"
          class="msg-item"
        />
      </div>
      <ChatEdit class="editor" />
    </div>
  </div>
</template>

<script>
import { GetMessage } from "@/api/message";
import { scrollToBottom } from "@/utils";
import Msg from "@/components/msg-item.vue";
import ChatEdit from "./chat-edit";
import { mapGetters } from "vuex";
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
    ...mapGetters(["CurrentChat"])
  },
  methods: {
    async GetData() {
      const res = await GetMessage({
        fid: this.CurrentChat._id
      });
      if (res.code == 200) {
        this.msgData = res.data.map(({ msg, type, createAt, isSend }) => {
          return {
            content: msg,
            time: createAt,
            type,
            isSend
          };
        });
      }
    }
  },
  sockets: {
    getmsg(msg) {
      this.GetData();
    }
  },
  mounted() {
    this.CurrentChat && this.GetData();
  },
  watch: {
    "CurrentChat._id": function(val, old) {
      if (val != old) {
        this.GetData();
      }
    },
    msgData() {
      //TODO 加载图片后滚动到底部
      this.$nextTick(() => {
        scrollToBottom(this.$refs.msgContent);
      });
    }
  },
  components: {
    Msg,
    ChatEdit
  }
};
</script>

<style lang="scss" scoped>
.chatMain {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: $message-bg-color;
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