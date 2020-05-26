<template>
  <div class="nav" @click="toNav">
    <div class="icon">
      <Icon :type="iconType" :style="{color:iconColor}" />
    </div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  props: ["iconType", "iconColor", "title", "to"],
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    toNav() {
      if (!this.to) return false;
      if (this.$route.path !== this.to) this.$router.push({ path: this.to });
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.nav {
  height: 75px;
  display: flex;
  align-items: center;
  font-size: $font-size-lg;
  border-bottom: 1px solid $border-color-light;
  padding: 0 15px;
  cursor: pointer;
  .icon {
    margin-right: 15px;
    .iconfont {
      font-size: 40px;
    }
  }
}
</style>
