<template>
  <button class="btn" :class="flat ? 'btn-flat' : null" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    flat: Boolean
  }
};
</script>

<style lang="scss" scoped>
.btn {
  background: rgb(231, 65, 15);
  text-decoration: none;
  outline: none;
  padding: 10px 20px;
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 5px;
  font-weight: bold;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  &.btn-flat {
    box-shadow: none;
    background: none;
    color: #333;
    border: none;
    &:hover {
      box-shadow: none;
      background: rgba(0, 0, 0, 0.1);
    }
  }

  &:hover {
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  }
}
</style>
