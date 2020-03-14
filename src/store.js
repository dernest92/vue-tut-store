import vuex from "vuex";
import Vue from "vue";
Vue.use(vuex);

export default new vuex.Store({
  state: {
    cart: []
  },
  getters: {
    cartTotal(state) {
      const total = state.cart
        .map(itm => itm.price)
        .reduce((prev, curr) => prev + curr, 0);
      return total.toFixed(2);
    }
  },
  actions: {
    addCartItem({ commit, state }, item) {
      const cart = [...state.cart, item];
      commit("SET_CART", cart);
    },
    removeCartItem({ commit, state }, itemId) {
      const cart = state.cart.filter(itm => itm.id !== itemId);
      commit("SET_CART", cart);
    }
  },
  mutations: {
    SET_CART(state, cart) {
      state.cart = cart;
    }
  }
});
