<template>
  <div class="cart-item">
    <img
      class="cart-item__image"
      :src="require('../assets/images/' + cart_item_data.image) "
      :alt="cart_item_data.image"
    />
    <div class="cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="cart-item__quantity">
      <div>Количество:</div>
      <div class="cart-item__quantity__manage">
        <div class="cart-item__quantity__manage__reduce" v-on:click="reduceQuantity">-</div>
        {{cart_item_data.quantity}}
        <div class="cart-item__quantity__manage__increase" v-on:click="increaseQuantity">+</div>
      </div>
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    ...mapActions(["INCREASE_QUANTITY", "REDUCE_QUANTITY"]),
    increaseQuantity() {
      this.INCREASE_QUANTITY();
    },
    reduceQuantity() {
      this.REDUCE_QUANTITY();
    },
    deleteFromCart() {
      this.$emit("deleteFromCart");
    }
  },
  mounted() {
    this.$set(this.cart_item_data, "quantity", "1");
  }
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  margin-bottom: $margin * 4;
  margin-top: $margin * 4;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding-left: $padding * 4;
  padding-right: $padding * 4;
  &__image {
    width: 50px;
    height: 50px;
  }
  &__quantity {
    &__manage {
      display: flex;
      justify-content: space-around;
      align-items: center;
      &__reduce,
      &__increase {
        display: block;
        margin: 1px;
        cursor: pointer;
        font-size: 30px;
      }
    }
  }
}
</style>