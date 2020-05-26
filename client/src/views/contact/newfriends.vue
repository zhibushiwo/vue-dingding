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
        <el-button type="primary" v-if="item.state ==0">接受</el-button>
        <span class="addinfo" v-else>已添加</span>
      </FriendItem>
    </div>
  </div>
</template>

<script>
import FriendItem from "./components/friend-item";
import ContactNav from "./components/contact-nav";
import imgUrl from "@/assets/avatar.jpg";
export default {
  props: {},
  data() {
    return {
      navs: {
        iconType: "icon-icon_newapplication_",
        iconColor: "green",
        title: "新的好友"
      },
      friends: [
        {
          avatar: imgUrl,
          name: "河马3",
          state: 0
        },
        {
          avatar: imgUrl,
          name: "河马4",
          state: 0
        },
        {
          avatar: imgUrl,
          name: "河马",
          state: 1
        },
        {
          avatar: imgUrl,
          name: "河马",
          state: 1
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
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
    .showAll{
      color: $theme-color;
      font-size: 18px;
    }
  }
  .friendlist {
    padding-left: 20px;
    .addinfo {
      color: #ccc;
      margin-right:10px;
    }
  }
}
</style>
