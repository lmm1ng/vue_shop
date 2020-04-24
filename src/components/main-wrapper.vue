<template>
  <div class="main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "main-wrapper",
  props: {},
  data() {
    return {
      title: "Catalog"
    };
  },
  methods: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>