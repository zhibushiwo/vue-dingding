<template>
  <div class="welcome">
    <!-- <img :src="welcome" alt srcset /> -->
    <!-- TODO: 首页图 -->
    <p>妮好世界</p>
  </div>
</template>

<script>
import welcome from "@/assets/Homura.png";
export default {
  props: {},
  data() {
    return {
      welcome
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
.welcome {
  height: 100%;
  width: 100%;
  @include flex-center(column);
}
</style>
