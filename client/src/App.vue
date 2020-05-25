<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import Layout from "@/layout";
export default {
  name: "App",
  components: {
    Layout
  }
};
</script>
<style lang="scss">
#app {
  height: 100%;
  font-size: $font-size;
}
</style>
