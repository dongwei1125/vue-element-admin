<template>
  <div class="pan-button" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PanButton',
  props: {
    backgroundColor: {
      type: String,
      required: true,
    },
  },
  computed: {
    style() {
      return { '--color': this.backgroundColor }
    },
  },
}
</script>

<style lang="scss" scoped>
$color: var(--color);

.pan-button {
  display: inline-block;
  padding: 14px 36px;
  border-radius: 8px;
  font-size: 14px;
  color: #fff;
  background-color: $color;
  transition: all 0.6s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    color: $color;
    background-color: #fff;

    &:before,
    &:after {
      width: 100%;
      background-color: $color;
      transition: all 0.6s ease;
    }
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 0;
    transition: all 0.4s ease;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    right: 0;
    bottom: 0;
  }
}
</style>
