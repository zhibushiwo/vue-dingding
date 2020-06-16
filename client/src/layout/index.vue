<template>
  <div class="layout">
    <DingSideBar />
    <DingHead />
    <DingContent class="content" />
    <GroupAdd />
  </div>
</template>

<script>
import DingHead from "./components/ding-head";
import DingSideBar from "./components/ding-sidebar";
import DingContent from "./components/ding-content";
import GroupAdd from "@/components/group-add";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Layout",
  data() {
    return {};
  },
  async mounted() {
    if (!this.isLogin) {
      await this.authorization();
      this.$socket.emit("joinroom", this.user._id);
      //await this.authorization();
      // if (!this.isLogin) {
      //   this.$router.push("/login");
      // }
    }
  },
  methods: {
    ...mapActions(["authorization"]),
    ...mapMutations(["addUnRead", "removeUnRead"])
  },
  sockets: {
    getmsg(msgData) {
      if (!this.CurrentChat || this.CurrentChat._id != msgData.from) {
        this.addUnRead(msgData);
      }
    }
  },
  computed: {
    ...mapGetters(["isLogin", "CurrentChat", "user"])
  },
  watch: {
    "CurrentChat._id": function(val) {
      console.log(val);
      this.removeUnRead(val);
    }
  },
  components: {
    DingHead,
    DingSideBar,
    DingContent,
    GroupAdd
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
