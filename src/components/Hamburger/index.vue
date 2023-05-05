<template>
  <div class="hamburger" :class="{ 'is-active': isActive }" @click="toggle">
    <svg-icon icon-class="hamburger" />
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle() {
      this.$emit('toggle')
    },
  },
}
</script>

<style lang="scss" scoped>
.hamburger {
  display: inline-block;

  svg {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  &.is-active svg {
    transform: rotate(180deg);
  }
}
</style>
