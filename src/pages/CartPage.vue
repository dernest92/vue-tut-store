<template>
  <div class="container ">
    <div v-if="cart.length === 0">
      <h2>Your cart is empty!</h2>
      Back to <router-link to="/">products</router-link>
    </div>
    <div v-else class="cart-layout">
      <div class="cart-list">
        <CartItem v-for="item in cart" :key="item.id" :item="item" />
      </div>
      <div class="cart-summary">
        <h2>Shipping Info:</h2>
        <CustomInput v-model="name" label="Name" />
        <CustomInput v-model="address" label="Street" />
        <CustomInput v-model="state" label="State" />
        <CustomInput v-model="city" label="City" />
        <CustomButton>Checkout: ${{ cartTotal }}</CustomButton>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem";
export default {
  components: {
    CartItem
  },

  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    }
  },
  data() {
    return {
      name: "",
      address: "",
      city: "",
      state: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.cart-layout {
  padding: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 40px;
}

@media screen and (max-width: 750px) {
  .cart-layout {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    row-gap: 20px;
  }
}
</style>
