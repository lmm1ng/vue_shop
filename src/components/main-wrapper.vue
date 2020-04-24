<template>
  <div class="main-wrapper">
    <div class="main-wrapper__title">{{title}}</div>
    <catalog />
    <cart v-if="CART.length" :cart_data="CART" />
  </div>
</template>

<script>
import catalog from "./catalog";
import cart from "./cart";
import { mapGetters } from "vuex";

export default {
  name: "main-wrapper",
  components: { catalog, cart },
  props: {},
  data() {
    return {
      title: "Catalog"
    };
  },
  computed: {
    ...mapGetters(["CART"])
  },
  methods: {},
  watch: {},
  mounted() {
    console.log("I am alive!");
  }
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  max-width: 900px;
  margin: 0 auto;
  &__title {
    font-size: 2em;
    display: block;
    margin-bottom: $margin * 5;
  }
}
</style>