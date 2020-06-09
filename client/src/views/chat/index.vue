<template>
  <div class="message">
    <LinkMan class="linkman" />
    <Main class="main" v-if="CurrentChat" />
    <Empty class="empty" v-else />
  </div>
</template>

<script>
import Main from "./components/main";
import LinkMan from "./components/linkman";
import Empty from "./components/empty";
import { mapGetters } from "vuex";

export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CurrentChat"])
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    Main,
    Empty,
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
  .empty {
    flex: 1;
    height: 100%;
  }
}
</style>
