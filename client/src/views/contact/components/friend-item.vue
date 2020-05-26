<template>
  <div class="friend-item">
    <div class="userInfo">
      <div class="avatar-wrap">
        <img :src="avatarUrl" />
      </div>
      <div class="content-wrap">
        <div class="name">{{name}}</div>
        <div v-if="info" class="info">{{info}}</div>
      </div>
    </div>
    <div class="operator">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatarUrl: {
      type: String
    },
    name: {
      type: String
    },
    info: {
      type: String
    }
  },
  data() {
    return {};
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
.friend-item {
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
  .userInfo {
    display: flex;
    justify-content: flex-start;
    .avatar-wrap {
      img {
        @include round(40px);
      }
    }
    .content-wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding-left: 10px;
      height: 40px;
      .name {
        font-size: $font-size-lg;
      }
      .info {
        color: #888;
      }
    }
  }
  .operator {
    padding-right: 20px;
  }
}
</style>
