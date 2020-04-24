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
    <div class="quantity">{{cart_item_data.quantity}}</div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
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
      deleteFromCart() {
          this.$emit('deleteFromCart');
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
}
</style>