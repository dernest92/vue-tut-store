<template>
  <div class="group">
    <input class="form-input" v-model="dataValue" />
    <label
      :class="dataValue.length === 0 ? null : 'shrink'"
      class="form-input-label"
      >{{ label }}</label
    >
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    label: String
  },
  computed: {
    dataValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$sub-color: grey;
$main-color: black;

@mixin shrinkLabel {
  top: -20px;
  font-size: 14px;
  color: $main-color;
}

.group {
  position: relative;
  margin: 28px 0;

  textarea {
    height: 150px;
    resize: none;
    width: 100%;
  }

  .form-input {
    background: #eee;
    color: #333;
    font-size: 16px;
    padding: 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 5px;
    margin: 10px 0;
    border: #eee 2px solid;
    transition: all 0.2s;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:focus {
      outline: none;
      border: cornflowerblue 2px solid;
    }

    &:focus ~ .form-input-label {
      @include shrinkLabel();
    }
  }

  .form-input-label {
    color: $sub-color;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 8px;
    top: 6px;
    transition: 200ms ease all;

    &.shrink {
      @include shrinkLabel();
    }
  }
}
</style>
