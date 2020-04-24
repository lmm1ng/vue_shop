<template>
  <div>
    <div class="cart">
      <h1>Корзина</h1>
      <cart-item
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
      />
    </div>
  </div>
</template>

<script>
import cartItem from "./cart-item";
import { mapActions } from "vuex";
export default {
  name: "cart",
  components: { cartItem },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
</style>