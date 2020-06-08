<template>
  <div class="searchbar">
    <el-input v-model="input" placeholder="搜索" prefix-icon="el-icon-search"></el-input>
    <el-button icon="el-icon-plus" circle size="mini" class="btn_add" @click="dialogVisible = true"></el-button>
    <Profile @close="showProfile=false" class="profile" :profile="result" v-if="showProfile" />
    <el-dialog
      title="寻找用户"
      :visible.sync="dialogVisible"
      width="30%"
      :destroy-on-close="true"
      :close-on-click-modal="false"
    >
      <el-input
        v-model="user"
        placeholder="搜索"
        prefix-icon="el-icon-search"
        @keydown.enter.native="searchUser"
      ></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { GetSearchUser } from "@/api/user";

import Profile from "./profile";
export default {
  props: {},
  data() {
    return {
      input: "",
      dialogVisible: false,
      user: "",
      result: null,
      showProfile: false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    async searchUser() {
      const res = await GetSearchUser({
        name: this.user
      });
      if (res.code != 200) {
        this.$message({
          message: res.msg,
          type: "warning"
        });
        return;
      }
      this.input = "";
      this.result = res.data;
      this.dialogVisible = false;
      this.showProfile = true;
    }
  },
  components: {
    Profile
  }
};
</script>

<style scoped lang="scss">
.searchbar {
  height: 100%;
  padding: 0 15px;
  @include flex-center();

  .btn_add {
    margin-left: 15px;
  }
  .profile {
    position: fixed;
    z-index: 10;
    top: 10px;
    right: 10px;
  }
}
</style>
