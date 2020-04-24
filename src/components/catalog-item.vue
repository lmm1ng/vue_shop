<template>
  <div class="catalog-item">
    <img
      class="catalog-item__image"
      :src="require('../assets/images/' + product_data.image) "
      :alt="product_data.image"
    />
    <p class="catalog-item__name">{{product_data.name}}</p>
    <p class="catalog-item__price">{{product_data.price}}</p>
    <button
      class="catalog-item__add_to_cart_bnt btn"
      :disabled="!product_data.avaliable"
      @click="addToCart"
    >Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    }
  }
};
</script>

<style lang="scss" scoped>
.catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__image {
    width: 200px;
    height: 200px;
  }
}
</style>