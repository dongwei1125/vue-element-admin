<template>
  <div class="rate">
    <svg-icon v-for="i in value" :key="i" icon-class="star" />
  </div>
</template>

<script>
export default {
  name: 'Rate',
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.svg-icon {
  margin-right: 4px;

  &:last-child {
    margin-right: 0;
  }
}
</style>
