<template>
  <div>
    <div class="loginForm">
      <div class="title">
        <p>欢迎来到钉钉</p>
        <p>只需两步完成注册</p>
      </div>
      <el-input v-model="userName" placeholder="请输入用户名"></el-input>
      <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
      <el-input type="password" v-model="checkpassword" placeholder="请重复密码"></el-input>
      <el-button class="btn-register" type="primary" @click="handleSubmit">注册</el-button>
    </div>
  </div>
</template>

<script>
import { Register } from "@/api/user";
export default {
  props: {},
  data() {
    return {
      userName: "",
      password: "",
      checkpassword: ""
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    async handleSubmit() {
      const res = await Register({
        name: this.userName,
        password: this.password
      });
      if (res.code == 200) {
        this.$message({
          message: "恭喜你，注册成功",
          type: "success"
        });
        this.$emit("toLogin")
      } else {
        this.$message({
          message: res.msg,
          type: "warning"
        });
      }
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.loginForm {
  height: 300px;
  overflow: hidden;
  text-align: center;
  .title {
    margin: 15px;
    text-align: center;
    font-size: 25px;
  }
  ::v-deep.el-input__inner {
    border: none;
    border-bottom: 1px solid #ccc;
  }
  .btn-register {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
