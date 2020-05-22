<template>
  <div class="sidebar">
    <div class="avatar-wrap">
      <img src="../../assets/avatar.jpg" alt class="avatar" />
    </div>
    <ul class="iconMain">
      <router-link
        v-for="(item,index) in menuRoutes"
        :key="index"
        class="link"
        tag="li"
        :to="item.path"
        active-class="lint-active"
      >
        <Icon :type="item.meta.icon" class="icon" />
        <span>{{item.meta.title}}</span>
      </router-link>
    </ul>
    <div class="iconSub">
      <Icon type="message" class="icon" />
      <Icon type="synergy" class="icon" />
      <Icon type="dingtalk_line" class="icon" />
      <Icon type="namecard" class="icon" />
    </div>
  </div>
</template>

<script>
import { menuRoutes } from "@/router/";
export default {
  props: {},
  data() {
    return {
      menuRoutes
    };
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
.sidebar {
  width: $side-bar-width;
  height: 100%;
  background: $theme-color;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  .avatar {
    @include round(60px);
    border: 2px solid #fff;
  }
  .link {
    color: #78c2ff;
    &-active {
      color: #fff;
    }
  }
  .iconMain {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    .link {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 15px;
      &:hover {
        color: #fff;
      }
      .icon {
        font-size: 30px;
      }
    }
  }
  .iconSub {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #78c2ff;
    font-size: 26px;
    .icon {
      font-size: 25px;
      margin-bottom: 10px;
    }
  }
}
</style>
