<template>
  <div class="modal">
    <div class="card">
      <h2 class="modal-title"><slot name="title"></slot></h2>
      <p>
        <slot name="message"></slot>
      </p>
      <div class="btn-container">
        <slot name="buttons"></slot>
      </div>
    </div>
    <div class="overlay" @click="closeModal"></div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close-modal");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  display: grid;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
}

.modal-title {
  margin-top: 0;
}

.overlay {
  z-index: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
}

.card {
  z-index: 10;
  background: #fff;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.btn-container {
  display: flex;
  justify-content: space-between;
}
</style>
