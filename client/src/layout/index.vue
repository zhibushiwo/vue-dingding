<template>
  <div class="layout">
    <DingSideBar />
    <DingHead />
    <DingContent class="content" />
  </div>
</template>

<script>
import DingHead from "./components/ding-head";
import DingSideBar from "./components/ding-sidebar";
import DingContent from "./components/ding-content";
import { mapGetters } from "vuex";
export default {
  name: "Layout",
  data() {
    return {};
  },
  mounted() {
    console.log(this.isLogin);
    if (!this.isLogin) {
      this.$router.push("/login");
    }
  },
  computed: {
    ...mapGetters(["isLogin"])
  },
  components: {
    DingHead,
    DingSideBar,
    DingContent
  }
};
</script>

<style scoped lang="scss">
.layout {
  height: 100%;
  display: flex;
  .content {
    margin-top: $layout-head-height;
    flex: 1;
  }
}
</style>
