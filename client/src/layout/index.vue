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
export default {
  name: "Layout",
  data() {
    return {};
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
