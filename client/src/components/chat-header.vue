<template>
  <div class="chat-header">
    <div class="userWrap">
      <div class="avatar">
        <img :src="avatar" />
      </div>
      <div class="userInfo">
        <div class="userName">{{userName}}</div>
        <div class="userDetail">{{userDetail}}</div>
      </div>
    </div>
    <div class="toolbar">
      <el-tooltip class="item" effect="dark" content="新建聊天" placement="right">
        <Icon type="addperson" class="icon" />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="聊天记录" placement="right">
        <Icon type="cloud_history" class="icon" />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="文件" placement="right">
        <Icon type="workfile_line" class="icon" />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="聊天设置" placement="right">
        <Icon type="more" class="icon" />
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  props: ["avatar", "userName", "userDetail"],
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.chat-header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  .userWrap {
    display: flex;
    .avatar {
      margin-right: 10px;
      img {
        @include round(40px);
      }
    }
    .userInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .userName {
        font-size: 20px;
      }
      .userDetail {
        color: #bbb;
      }
    }
  }
  .toolbar {
    .icon {
      font-size: 25px;
      margin: 15px;
    }
  }
}
</style>
