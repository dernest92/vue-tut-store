<template>
  <div class="cart-item">
    <img :src="item.img" />
    <div class="details">
      <h3 class="shoe-name">{{ item.name }}</h3>
      <span class="shoe-color">{{ item.color }}</span>
      <div class="detail price">${{ item.price }}</div>
      <div class="detail">Size {{ item.size }}</div>
      <button class="remove-btn" @click="removeFromCart">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    removeFromCart() {
      console.log("remove from cart");
      this.$store.dispatch("removeCartItem", this.item.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: grid;
  grid-template-columns: 2fr 5fr;
  margin-bottom: 40px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1), 5px 5px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
  }
}

.details {
  padding: 10px;
}

.detail {
  font-size: 14px;
  &.price {
    color: green;
    font-weight: bold;
  }
}

.remove-btn {
  position: absolute;
  right: 10px;
  bottom: 10px;
  background: none;
  outline: none;
  text-decoration: underline;
  color: red;
  border: none;
  font-size: 16px;
  cursor: pointer;
}

.shoe-name {
  font-size: 16px;
  margin-bottom: 0;
  line-height: 1;
}

.shoe-color {
  font-size: 10px;
  color: #444;
  line-height: 1;
}
</style>
