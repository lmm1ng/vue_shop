import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import { MOCK } from "../main";
import * as MOCK_API from "../../db.json";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map((el) => {
          if (el.article === product.article) {
            isProductExists = true;
            el.quantity++;
          }
        });
        if (!isProductExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
    INCREASE_PRODUCT_QUANTITY: (state) => {
      state.cart.map((el) => {
        el.quantity++;
      });
    },
    REDUCE_PRODUCT_QUANTITY: (state) => {
      state.cart.map((el, index) => {
        if (el.quantity > 0) {
          el.quantity--;
        } else {
          state.cart.splice(index, 1);
        }
      });
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return MOCK
        ? commit("SET_PRODUCTS_TO_STATE", MOCK_API.products)
        : axios
            .get("http://localhost:3000/products")
            .then((products) => {
              commit("SET_PRODUCTS_TO_STATE", products.data);
              return products;
            })
            .catch((e) => e);
    },
    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
    INCREASE_QUANTITY({ commit }) {
      commit("INCREASE_PRODUCT_QUANTITY");
    },
    REDUCE_QUANTITY({ commit }) {
      commit("REDUCE_PRODUCT_QUANTITY");
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
});

export default store;
