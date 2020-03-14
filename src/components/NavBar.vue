<template>
  <nav class="nav-bar">
    <div class="nav-content">
      <router-link class="nav-logo" to="/">
        <h1>NB</h1>
      </router-link>
      <router-link to="/cart" class="cart-link"
        >CART: <span class="cart-total">${{ cartTotal }}</span></router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    cartTotal() {
      return this.$store.getters.cartTotal;
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  color: #444;
  font-weight: bold;
  text-decoration: none;
}

.nav-bar {
  padding: 16px 10px;
  margin-bottom: 40px;
  border-bottom: 2px #ddd solid;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  color: red;
  text-decoration: none;
  font-weight: bold;
  font-style: italic;
  width: fit-content;
  h1 {
    width: fit-content;
    display: inline-block;
    margin: 0;
  }
}

.cart-link {
  text-decoration: none;

  .cart-total {
    color: white;
    background: red;
    padding: 4px 8px;
    border-radius: 10px;
  }
}
</style>
