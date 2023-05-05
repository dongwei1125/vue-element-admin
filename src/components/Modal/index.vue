<template>
  <transition name="fade">
    <div v-show="visible" class="modal" @click="emitClick" />
  </transition>
</template>

<script>
import { hasClass, addClass, removeClass } from '@/utils/dom'

const HiddenScrollClassName = 'el-popup-parent--hidden'

export default {
  name: 'Modal',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    visible(value) {
      if (value) {
        this.open()
      } else {
        this.close()
      }
    },
  },
  methods: {
    open() {
      const withoutHiddenScrollClassName = !hasClass(document.body, HiddenScrollClassName)

      if (withoutHiddenScrollClassName) {
        addClass(document.body, HiddenScrollClassName)
      }
    },

    close() {
      removeClass(document.body, HiddenScrollClassName)
    },

    emitClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0.3;
}

// transition
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.28s;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}
</style>
