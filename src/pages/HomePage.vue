<template>
  <div class="container">
    <div class="product-grid">
      <div
        to="/pd"
        class="product-thumbnail"
        v-for="prod in products"
        :key="prod.slug"
      >
        <router-link :to="`/pd/${prod.slug}`">
          <img :src="prod.variants[0].images[0]" alt />
        </router-link>
        <div class="product-text">
          <router-link class="product-title" :to="`/pd/${prod.slug}`">
            <h3>{{ prod.name }}</h3>
          </router-link>
          <span class="product-price">${{ prod.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api.js";
export default {
  async created() {
    const data = await api.getProducts();
    this.products = data;
    const msg = this.$store.state.message;
  },
  data() {
    return {
      products: []
    };
  }
};
</script>

<style lang="scss" scoped>
.product-grid {
  display: grid;
  column-gap: 10px;
  row-gap: 30px;
  margin: 40px 0;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: space-evenly;
}

.product-thumbnail {
  transition: all 0.3s;
  border-radius: 8px;
  overflow: hidden;
  &:hover {
    box-shadow: 2px 2px 18px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
  }

  .product-text {
    padding: 20px 16px;
    .product-title {
      font-size: 15px;
      color: #333;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
    .product-price {
      margin-top: 8px;
      display: block;
      color: green;
    }
  }
}

@media screen and (max-width: 700px) {
  .product-grid {
    column-gap: 5px;
    row-gap: 20px;
    margin: 40px 0;
    grid-template-columns: repeat(auto-fill, 170px);
  }
}
</style>
