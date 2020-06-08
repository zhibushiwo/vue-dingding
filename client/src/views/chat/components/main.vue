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
      <ChatEdit class="editor" />
    </div>
    <Empty v-else />
  </div>
</template>

<script>
import { GetMessage } from "@/api/message";

import Msg from "@/components/msg-item.vue";
import ChatEdit from "./chat-edit";
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
  methods: {
    async GetData() {
      const res = await GetMessage({
        fid: this.chat._id
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
  sockets:{
    getmsg(msg){
      console.log(msg)
    }
  },
  mounted() {},
  // watch: {
  //   "chat._id": function(val, old) {
  //     if (val != old) {
  //       this.GetData();
  //     }
  //   }
  // },
  components: {
    Msg,
    Empty,
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