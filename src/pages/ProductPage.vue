<template>
  <div class="container">
    <Modal v-if="showModal" @close-modal="closeModal">
      <template v-slot:title>
        Success!
      </template>
      <template v-slot:message>
        Your shoes have been added to your cart.
      </template>
      <template v-slot:buttons>
        <router-link class="btn" to="/cart">View Cart</router-link>
        <button class="btn btn-flat" @click="closeModal">Keep Shopping</button>
      </template>
    </Modal>
    <div v-if="this.loading">loading</div>
    <div v-else class="product-container">
      <div class="images">
        <div class="img-prev">
          <img
            v-for="(image, index) in variantImages"
            :src="image"
            alt
            :key="image"
            :class="activeImage === index ? 'active' : null"
            @mouseover="changeMainImg(index)"
          />
        </div>
        <img class="main-img" :src="activeImgString" alt="shoe" />
      </div>
      <div class="about">
        <h2>{{ product.name }}</h2>
        <p>${{ product.price }}</p>
        <p>Color: {{ product.variants[selectedVariant].color }}</p>
        <div class="variants">
          <img
            v-for="(variant, index) in product.variants"
            @click="changeVariant(index)"
            :class="selectedVariant === index ? 'active' : null"
            :src="variant.images[0]"
            alt
            :key="variant.color"
          />
        </div>
        <p>
          <span>Size: </span>
          <span v-if="sizeError" class="error">Pick a size</span>
          <span>{{ selectedSize }}</span>
        </p>
        <div class="sizes">
          <div
            @click="setSize(size)"
            class="size"
            :class="selectedSize === size ? 'selected' : null"
            v-for="size in product.sizes"
            :key="size"
          >
            {{ size }}
          </div>
        </div>
        <button @click="addToCart" class="btn">Add to Cart</button>
        <h4>Product Description</h4>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api.js";
import Modal from "@/components/Modal";
export default {
  components: {
    Modal
  },
  async created() {
    const product = await api.getProductBySlug(this.$route.params.slug);
    this.product = product;
    this.loading = false;
  },
  data() {
    return {
      loading: true,
      product: {},
      selectedVariant: 0,
      activeImage: 0,
      selectedSize: null,
      sizeError: false,
      showModal: false
    };
  },
  computed: {
    activeImgString() {
      const { product, selectedVariant, activeImage } = this;
      return product.variants[selectedVariant].images[activeImage];
    },
    variantImages() {
      const { product, selectedVariant } = this;
      return product.variants[selectedVariant].images;
    }
  },
  methods: {
    addToCart() {
      const { product, selectedSize, selectedVariant } = this;
      const { name, price } = product;

      const { color, images } = product.variants[selectedVariant];
      const img = images[0];
      const size = selectedSize;
      if (!size) {
        this.sizeError = true;
        return;
      }
      const id = Date.now();
      this.$store.dispatch("addCartItem", {
        id,
        name,
        color,
        size,
        price,
        img
      });
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    changeMainImg(index) {
      this.activeImage = index;
    },
    changeVariant(index) {
      this.selectedVariant = index;
      this.activeImage = 0;
    },
    setSize(size) {
      this.sizeError = false;
      this.selectedSize = size;
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  background: red;
  color: white;
  display: inline-block;
  padding: 5px 10px;
}

.product-container {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 40px;
  padding: 0 20px;
  margin: 10px auto;
}
.main-img {
  width: 100%;
}

.images {
  display: grid;
  column-gap: 10px;
  grid-template-columns: 1fr 4fr;
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

.sizes {
  display: grid;
  row-gap: 10px;
  column-gap: 10px;
  grid-template-columns: repeat(auto-fill, 40px);
  justify-content: space-evenly;
  margin: 20px 0;

  .size {
    display: grid;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    background: #f4f4f4;
    opacity: 0.5;
    border-radius: 5px;
    border: 2px #f4f4f4 solid;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      border: 2px #ccc solid;
      opacity: 0.75;
    }
    &.selected {
      opacity: 1;
      border: 2px #333 solid;
    }
  }
}

@media screen and (max-width: 750px) {
  .product-container {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    row-gap: 20px;
    max-width: 600px;
    padding: 0 10px;
  }

  .btn {
    width: 100%;
  }
}
</style>
