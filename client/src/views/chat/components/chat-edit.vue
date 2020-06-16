<template>
  <div class="edit">
    <div class="header">
      <Icon type="im_face" :size="18" />
      <Icon type="photo" :size="18" @click="$refs.image.click()" />
      <Icon type="likegood" :size="18" />
      <Icon type="file" :size="18" />
      <Icon type="more" :size="18" />
      <input type="file" ref="image" class="file" @change="upload" />
    </div>
    <div class="main">
      <textarea
        ref="editMain"
        placeholder="请输入内容"
        v-model="msg"
        @keydown.enter.stop.prevent="send"
        rows="5"
      ></textarea>
    </div>
    <div class="footer">
      <!-- TODO: 回车发送;ctrl+回车换行 -->
      <p class="tip">Enter 发送，Ctrl+Enter 换行</p>
      <el-button
        class="btn-send"
        size="small"
        @click="send"
        round
        type="primary"
        :disabled="msg==''"
        @
      >发送</el-button>
    </div>
  </div>
</template>

<script>
import { SendMessage } from "@/api/message";
import { UploadFile } from "@/api/global";
import { mapGetters } from "vuex";
export default {
  props: {},
  data() {
    return {
      msg: "",
      fileList: []
    };
  },
  computed: {
    ...mapGetters(["CurrentChat", "user"])
  },
  created() {},
  mounted() {
    this.$refs.editMain.addEventListener("paste", async event => {
      let items = event.clipboardData && event.clipboardData.items;
      let file = null;
      if (items && items.length) {
        // 检索剪切板items
        for (var i = 0; i < items.length; i++) {
          if (items[i].type.indexOf("image") !== -1) {
            file = items[i].getAsFile();
            break;
          }
        }
      }
      if (file != null) {
        // TODO:先展示到输入框里面，所有这里textarae 要改到 div contenteditable ='true'
        // let fileReader = new FileReader();
        // fileReader.onload(f => {
        //   console.log(f);
        // });
        // fileReader.readAsBinaryString(file);
        let formData = new FormData();
        formData.append("file", file);
        let res = await UploadFile(formData);
        if (res.code == 200) {
          this.$socket.emit("sendmsg", {
            from: this.user._id,
            type: "image",
            msg: res.data.filePath,
            to: this.CurrentChat._id
          });
        }
      }
    });
  },
  watch: {},
  methods: {
    async upload() {
      const file = this.$refs.image.files[0];
      let formData = new FormData();
      formData.append("file", file);
      let res = await UploadFile(formData);
      if (res.code == 200) {
        this.$socket.emit("sendmsg", {
          from: this.user._id,
          type: "image",
          msg: res.data.filePath,
          to: this.CurrentChat._id
        });
      }
    },
    async send() {
      if (this.msg == "") return false;
      let msg = this.msg;
      this.msg = "";
      this.$socket.emit("sendmsg", {
        from: this.user._id,
        type: "text",
        msg,
        to: this.CurrentChat._id
      });

      // const res = await SendMessage({
      //   type: "text",
      //   msg: this.msg,
      //   to: this.chat._id
      // });
      // if (res.code == 200) {
      //   this.msg = "";
      // }
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.edit {
  background: $edit-bg-color;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    height: 40px;
    padding: 7px 10px;
    display: flex;
    .iconfont {
      margin-right: 15px;
      cursor: pointer;
    }
  }
  .main {
    padding: 6px 12px;
    textarea {
      width: 100%;
      border: none;
      resize: none;
      outline: none;
    }
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 15px;
    .tip {
      color: #c6c6c6;
      margin-right: 15px;
    }
  }
}
.file {
  display: none;
}
</style>
