<template>
  <div>
    <router-link :to="{name: 'catalog'}">
      <div class="cart__link_to_catalog">Back to catalog</div>
    </router-link>  
    <div class="cart">
      <h1>Корзина</h1>
      <h1 v-if="!cart_data.length">В корзине нет товаров</h1>
      <cart-item
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
      />
      <div class="cart__total-cost">Итого: {{totalCost}}</div>
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
  computed: {
    totalCost() {
      let res = 0;
      for (let item of this.cart_data) {
        res += item.quantity * item.price;
      }
      return res;
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  position: relative;
  &__link_to_catalog {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 16px;
    border: solid 1px #aeaaaa;
  }
  &__total-cost {
    position: absolute;
    bottom: -100px;
    right: 0;
    font-size: 40px;
  }
}
</style>