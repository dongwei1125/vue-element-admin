<template>
  <div v-show="visible" class="sidebar-modal" @click="closeSideBar" />
</template>

<script>
import { hasClass, addClass, removeClass } from 'element-ui/lib/utils/dom'

export default {
  name: 'Modal',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    visible(val) {
      if (val) {
        this.open()
      } else {
        this.close()
      }
    },
  },
  methods: {
    open() {
      const withoutHiddenClass = !hasClass(document.body, 'el-popup-parent--hidden')

      if (withoutHiddenClass) {
        addClass(document.body, 'el-popup-parent--hidden')
      }
    },

    close() {
      removeClass(document.body, 'el-popup-parent--hidden')
    },

    closeSideBar() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar-modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0.3;
}
</style>
