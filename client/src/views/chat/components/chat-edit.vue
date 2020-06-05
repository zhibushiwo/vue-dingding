<template>
  <div class="edit">
    <div class="header">
      <Icon type="im_face" :size="18" />
      <Icon type="photo" :size="18" />
      <Icon type="likegood" :size="18" />
      <Icon type="more" :size="18" />
    </div>
    <div class="main">
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="msg"
        @keydown.enter.stop.prevent="send"
        :rows="4"
      />
    </div>
    <div class="footer">
      <!-- TODO: 回车发送 -->
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
import { mapGetters } from "vuex";
export default {
  props: {},
  data() {
    return {
      msg: ""
    };
  },
  computed: {
    ...mapGetters(["chat"])
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    async send() {
      if (this.msg == "") return false;
      const res = await SendMessage({
        type: "text",
        msg: this.msg,
        to: this.chat._id
      });
      if (res.code == 200) {
        this.msg = "";
      }
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
    .iconfont {
      margin-right: 15px;
    }
  }
  .main {
    padding: 3px;
    ::v-deep.el-textarea__inner {
      border: none;
      resize: none;
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
</style>
