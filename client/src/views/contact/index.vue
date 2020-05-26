<template>
  <div class="contact">
    <div class="navBar">
      <ContactNav
        v-for="(item,index) in navs"
        :key="index"
        :iconType="item.iconType"
        :iconColor="item.iconColor"
        :title="item.title"
        :to="item.to"
      />
    </div>
    <div class="router-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ContactNav from "./components/contact-nav";
export default {
  props: {},
  data() {
    return {
      navs: [
        {
          iconType: "meeting_fill",
          iconColor: "skyblue",
          title: "我的好友",
          to: "/contact/friends"
        },
        {
          iconType: "newapplication_",
          iconColor: "green",
          title: "新的好友",
          to: "/contact/newfriends"
        },
        {
          iconType: "meeting_fill",
          iconColor: "crimson",
          title: "我的群组",
          to: "/contact/groups"
        },
        {
          iconType: "boss_fill",
          iconColor: "orange",
          title: "特别关注",
          to: "/contact/speical"
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
    ContactNav
  }
};
</script>

<style scoped lang="scss">
.contact {
  display: flex;
  .navBar {
    width: $aside-width;
    border-right: 1px solid #ddd;
  }
  .router-content {
    flex: 1;
  }
}
</style>
