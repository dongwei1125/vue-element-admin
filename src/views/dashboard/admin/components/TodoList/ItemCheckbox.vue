<template>
  <div class="item-checkbox">
    <input v-model="checked" type="checkbox" />

    <label />
  </div>
</template>

<script>
export default {
  name: 'ItemCheckbox',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    checked: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('change', value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
$uncheckedIcon: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E';
$checkedIcon: 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E';

.item-checkbox {
  width: 40px;
  height: 40px;
  display: inline-block;
  position: relative;

  input {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    cursor: pointer;

    + label {
      background-image: url($uncheckedIcon);
    }

    &:checked + label {
      background-image: url($checkedIcon);
    }
  }

  label {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-position: center left;
    background-size: 36px;
  }
}
</style>
