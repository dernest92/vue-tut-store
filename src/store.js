import vuex from "vuex";
import Vue from "vue";
Vue.use(vuex);

export default new vuex.Store({
  state: {
    cart: []
  },
  actions: {
    addCartItem({ commit, state }, item) {
      const cart = [...state.cart, item];
      commit("SET_CART", cart);
    }
  },
  mutations: {
    SET_CART(state, cart) {
      state.cart = cart;
    }
  }
});
