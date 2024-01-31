<template>
  <div class="sticky" :style="{ height: `${height}px`, zIndex }">
    <div :class="className" :style="styles">
      <slot />
    </div>
  </div>
</template>

<script>
import resize from './mixins/resize'
import scroll from './mixins/scroll'

export default {
  name: 'Sticky',
  mixins: [resize, scroll],
  props: {
    stickyTop: {
      type: Number,
      default: 0,
    },
    zIndex: {
      type: Number,
      default: 1,
    },
    className: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      width: undefined,
      height: undefined,
      isSticky: false,
    }
  },
  computed: {
    styles() {
      return {
        width: this.isSticky ? `${this.width}px` : 'auto',
        position: this.isSticky ? 'fixed' : undefined,
        top: this.isSticky ? `${this.stickyTop}px` : undefined,
        zIndex: this.zIndex,
      }
    },
  },
  mounted() {
    this.setHeight()
  },
  methods: {
    setHeight() {
      this.height = this.$el.getBoundingClientRect().height
    },

    setWidth() {
      this.width = this.$el.getBoundingClientRect().width
    },

    scroll() {
      const { top } = this.$el.getBoundingClientRect()

      this.isSticky = top < this.stickyTop

      this.setWidth()
    },

    resize() {
      if (this.isSticky) {
        this.setWidth()
      }
    },
  },
}
</script>
