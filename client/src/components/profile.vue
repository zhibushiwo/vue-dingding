<template>
  <div class="profile" @mousedown.stop="mousedown" ref="profile">
    <div class="header">
      <div class="intro">
        <h1>{{profile.name}}</h1>
        <p>GitHub软件有限公司</p>
      </div>
      <div class="avatar">
        <img :src="avatar" alt />
      </div>
    </div>
    <div class="detail">
      <p class="componey">GitHub软件有限公司</p>
      <p>
        <span>姓名</span>
        {{profile.name}}
      </p>
      <p>
        <span>电话</span>
        +86-11111111111
      </p>
      <p>
        <span>邮箱</span>
        culler@qq.com
      </p>
      <p>
        <span>部门</span>
        加油部-FGNB组
      </p>
      <el-divider></el-divider>
      <el-button size="small" type="primary" class="btn" @click="addFriend">加好友</el-button>
    </div>
  </div>
</template>

<script>
import avatar from "@/assets/avatar.jpg";
import { AddFriend } from "@/api/friend";
export default {
  props: {
    profile: {
      type: Object
    }
  },
  data() {
    return {
      avatar,
      selectElement
    };
  },
  computed: {},
  created() {},
  mounted() {
    console.log(this.profile);
  },
  watch: {},
  methods: {
    mousedown(event) {
      event.preventDefault();
      console.log(event.target);
      this.selectElement = this.$refs.profile;
      var div1 = this.selectElement;
      this.selectElement.style.cursor = "move";
      var distanceX = event.clientX - this.selectElement.offsetLeft;
      var distanceY = event.clientY - this.selectElement.offsetTop;
      document.onmousemove = ev => {
        var oevent = ev || event;
        if (oevent.clientX + div1.offsetWidth / 2 - distanceX < 0) {
          return false;
        }
        if (oevent.clientY + div1.offsetHeight / 2 - distanceY < 0) {
          return false;
        }
        console.log(
          event.clientX,
          this.selectElement.offsetLeft,
          oevent.clientX
        );
        div1.style.left = oevent.clientX - distanceX + "px";
        div1.style.top = oevent.clientY - distanceY + "px";
      };

      document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
        div1.style.cursor = "default";
      };
    },
    async addFriend() {
      const res = await AddFriend({
        fid: this.profile._id
      });
      if (res.code == 200) {
        this.$message({
          message: "恭喜你们已结为好友",
          type: "success"
        });
        this.$emit("close");
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
.profile {
  width: 280px;
  font-size: 13px;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 7px #999;
  .header {
    padding: 20px 15px;
    background: #ebeef3;
    display: flex;
    .intro {
      width: 75%;
      h1 {
        font-size: 30px;
      }
      p {
        font-weight: 550;
      }
    }
    .avatar {
      width: 25%;
      img {
        @include round(50px);
      }
    }
  }
  .detail {
    padding: 10px 15px;
    background: #fff;
    p {
      margin-bottom: 14px;
      span {
        color: #ccc;
        margin-right: 3em;
      }
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
