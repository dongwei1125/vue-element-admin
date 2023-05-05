<template>
  <ul v-show="visible" class="tags-view-contextmenu" :style="styles">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'ContextMenu',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Number,
      default: 0,
    },
    top: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    styles() {
      return {
        left: this.left + 'px',
        top: this.top + 'px',
      }
    },
  },
  watch: {
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.close)
      } else {
        document.body.removeEventListener('click', this.close)
      }
    },
  },
  methods: {
    close() {
      this.$emit('update:visible', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.tags-view-contextmenu {
  position: absolute;
  padding: 5px 0;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  z-index: 3;

  li {
    font-size: 12px;
    color: #333;
    padding: 7px 16px;
    cursor: pointer;
    transition: background-color 0.28s;

    &:hover {
      background-color: #eee;
    }
  }
}
</style>
