<template>
  <div class="message">
    <LinkMan class="linkman" />
    <Main class="main" />
  </div>
</template>

<script>
import Main from "./components/main";
import LinkMan from "./components/linkman";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    Main,
    LinkMan
  }
};
</script>

<style scoped lang="scss">
.message {
  height: 100%;
  display: flex;
  .linkman {
    width: $aside-width;
    overflow: auto;
    height: 100%;
  }
  .main {
    flex: 1;
    background-color: $main-bg-color;
    height: 100%;
  }
}
</style>
