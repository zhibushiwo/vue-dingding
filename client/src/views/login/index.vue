<template>
  <div>
    <div class="login">
      <div class="loginBox">
        <div class="boxHead">
          <Icon v-if="isRegister" type="left" @click="isRegister=false" />钉钉
        </div>
        <div class="loginBody">
          <div class="loginForm" v-if="!isRegister">
            <el-tabs v-model="loginType">
              <el-tab-pane label="密码登录" name="psw">
                <div class="avatar">
                  <img :src="avatar" />
                  <el-input v-model="userName" placeholder="请输入用户名"></el-input>
                  <el-input
                    v-model="password"
                    placeholder="请输入密码"
                    type="password"
                    @keydown.enter.native="handleSubmit"
                  ></el-input>
                </div>
              </el-tab-pane>
              <el-tab-pane label="扫描登陆" name="bar"></el-tab-pane>
            </el-tabs>
          </div>
          <Register v-else @toLogin="toLogin" />
          <div class="loginTool">
            <div>自动登陆</div>
            <div class="register" @click="toRegister">新用户注册</div>
          </div>
        </div>
        <div class="loginFoot" v-show="!isRegister">钉钉登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import avatar from "@/assets/avatar.jpg";
import Register from "./register";
import { mapActions } from "vuex";
export default {
  props: {},
  data() {
    return {
      loginType: "psw",
      avatar,
      userName: "",
      password: "",
      isRegister: false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    async handleSubmit() {
      const isLogin = await this.login({
        name: this.userName,
        password: this.password
      });
      if (isLogin) {
        this.$router.push("./chat");
      }
    },
    toRegister() {
      this.isRegister = true;
    },
    toLogin() {
      this.isRegister = false;
    },
    ...mapActions(["login"])
  },
  components: {
    Register
  }
};
</script>

<style scoped lang="scss">
.login {
  height: 100%;
  @include flex-center();
  .loginBox {
    width: 300px;
    height: 440px;
    border: 1px solid #ccc;
    box-shadow: -2px 0 64px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    .boxHead {
      height: 40px;
      line-height: 40px;
      padding-left: 5px;
      font-size: $font-size-lg;
      background: $theme-color;
      color: #fff;
    }
    .loginFoot {
      height: 50px;
      line-height: 50px;
      background: #eee;
      text-align: center;
      color: #bbb;
    }
    .loginBody {
      flex: 1;
      padding: 15px 25px;

      .loginForm {
        height: 300px;
        overflow: hidden;
        text-align: center;
        .avatar {
          img {
            @include round(100px);
          }
        }
        ::v-deep.el-input__inner {
          border: none;
          border-bottom: 1px solid #ccc;
        }
      }
    }
    .loginTool {
      display: flex;
      justify-content: space-between;
      color: #ddd;
      font-size: $font-size-sm;
      .register {
        cursor: pointer;
      }
    }
  }
}
</style>
