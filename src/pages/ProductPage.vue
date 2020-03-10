<template>
  <div class="container">
    <div v-if="this.loading">loading</div>
    <div v-else class="product-container">
      <div class="images">
        <div class="img-prev">
          <img
            v-for="(image, index) in variantImages"
            :src="`../../${image}`"
            alt=""
            :key="image"
            :class="activeImage === index ? 'active' : null"
            @mouseover="changeMainImg(index)"
          />
        </div>
        <img class="main-img" :src="`../../${activeImgString}`" alt="shoe" />
      </div>
      <div class="about">
        <h2>{{ product.name }}</h2>
        <p>${{ product.price }}</p>
        <p>Color: {{ product.variants[activeVariant].color }}</p>
        <p>{{ product.description }}</p>
        <div class="variants">
          <img
            v-for="(variant, index) in product.variants"
            @click="changeVariant(index)"
            :class="activeVariant === index ? 'active' : null"
            :src="`../../${variant.images[0]}`"
            alt=""
            :key="variant.color"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api.js";
export default {
  async created() {
    const product = await api.getProductBySlug(this.$route.params.slug);
    this.product = product;
    this.loading = false;
  },
  data() {
    return {
      loading: true,
      product: {},
      activeVariant: 0,
      activeImage: 0
    };
  },
  computed: {
    activeImgString() {
      const { product, activeVariant, activeImage } = this;
      return product.variants[activeVariant].images[activeImage];
    },
    variantImages() {
      const { product, activeVariant } = this;
      return product.variants[activeVariant].images;
    }
  },
  methods: {
    changeMainImg(index) {
      this.activeImage = index;
    },
    changeVariant(index) {
      this.activeVariant = index;
      this.activeImage = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.product-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
}
.main-img {
  width: 400px;
}

.images {
  display: grid;
  column-gap: 10px;
  grid-template-columns: 100px auto;
}

.img-prev {
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    margin-bottom: 5px;
    opacity: 0.3;
    &.active {
      opacity: 1;
    }
  }
}

.variants {
  img {
    cursor: pointer;
    width: 80px;
    margin-right: 5px;
    border: 2px #ccc solid;
    transition: all 0.2s;
    border-radius: 8px;

    &.active {
      border: 2px #444 solid;
    }
  }
}
</style>
