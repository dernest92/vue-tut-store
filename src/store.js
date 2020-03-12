import vuex from "vuex";
import Vue from "vue";
Vue.use(vuex);

export default new vuex.Store({
  state: {
    cart: []
  },
  getters: {
    cartTotal(state) {
      return state.cart
        .map(itm => itm.price)
        .reduce((prev, curr) => prev + curr, 0);
    }
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
