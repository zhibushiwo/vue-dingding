<template>
  <div class="newfriends">
    <div class="title">
      <ContactNav
        class="nav"
        :iconType="navs.iconType"
        :iconColor="navs.iconColor"
        :title="navs.title"
      />
      <div class="showAll">查看全部 ></div>
    </div>
    <div class="friendlist">
      <FriendItem
        v-for="(item,index) in friends"
        :key="index"
        :avatarUrl="item.avatar"
        :name="item.name"
        class="friend"
      >
        <el-button type="primary" v-if="item.state ==0" @click="accept(item)">接受</el-button>
        <span class="addinfo" v-else>已添加</span>
      </FriendItem>
    </div>
  </div>
</template>

<script>
import FriendItem from "./components/friend-item";
import ContactNav from "./components/contact-nav";
import imgUrl from "@/assets/avatar.jpg";
import { GetNewFriends, AcceptFriend } from "@/api/friend";
export default {
  props: {},
  data() {
    return {
      navs: {
        iconType: "icon-icon_newapplication_",
        iconColor: "green",
        title: "新的好友"
      },
      friends: []
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.getData();
  },
  watch: {},
  methods: {
    async getData() {
      const res = await GetNewFriends();
      if (res.code == 200) {
        this.friends = res.data.map(({ name, _id, state }) => {
          return {
            avatar: imgUrl,
            name,
            state,
            _id
          };
        });
      }
    },
    async accept(friend) {
      console.log(friend);
      const res = await AcceptFriend({
        fid: friend._id
      });
      if (res.code == 200) {
        this.$message({
          message: "添加成功",
          type: "success"
        });
        this.getData();
      }
    }
  },
  components: {
    FriendItem,
    ContactNav
  }
};
</script>

<style scoped lang="scss">
.newfriends {
  .title {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $border-color-light;
    padding-left: 5px;
    padding-right: 20px;
    align-items: center;
    .nav {
      border-bottom: 0;
    }
    .showAll {
      color: $theme-color;
      font-size: 18px;
    }
  }
  .friendlist {
    padding-left: 20px;
    .addinfo {
      color: #ccc;
      margin-right: 10px;
    }
  }
}
</style>
