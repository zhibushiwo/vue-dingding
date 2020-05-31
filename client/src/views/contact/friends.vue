<template>
  <div class="friends">
    <div class="title">
      <ContactNav
        class="nav"
        :iconType="navs.iconType"
        :iconColor="navs.iconColor"
        :title="navs.title"
      />
      <Icon type="add" class="icon" />
    </div>
    <div class="friendlist">
      <FriendItem
        v-for="(item,index) in friends"
        :key="index"
        :avatarUrl="item.avatar"
        :name="item.name"
        class="friend"
      />
    </div>
  </div>
</template>

<script>
import { GetMyFriends } from "@/api/friend";
import FriendItem from "./components/friend-item";
import ContactNav from "./components/contact-nav";
import imgUrl from "@/assets/avatar.jpg";
export default {
  props: {},
  data() {
    return {
      navs: {
        iconType: "fill",
        iconColor: "skyblue",
        title: "我的好友",
        to: "/contact/friends"
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
      const res = await GetMyFriends();
      if (res.code == 200) {
        this.friends = res.data.map(({ name, _id }) => {
          return {
            avatar: imgUrl,
            name,
            id: _id
          };
        });
      }
      console.log(res);
    }
  },
  components: {
    FriendItem,
    ContactNav
  }
};
</script>

<style scoped lang="scss">
.friends {
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
    .icon {
      font-size: 25px;
      color: #ccc;
    }
  }
  .friendlist {
    padding-left: 20px;
  }
}
</style>
