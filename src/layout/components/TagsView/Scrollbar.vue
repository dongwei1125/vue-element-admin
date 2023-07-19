<template>
  <el-scrollbar ref="scrollbar" :vertical="false" @wheel.prevent.native="scroll">
    <slot />
  </el-scrollbar>
</template>

<script>
const TAG_AND_TAG_SPACING = 5

export default {
  name: 'Scrollbar',
  computed: {
    $scrollWrapper() {
      return this.$refs.scrollbar?.$refs.wrap
    },
  },
  mounted() {
    this.$scrollWrapper.addEventListener('scroll', this.emitScroll)
  },
  beforeDestroy() {
    this.$scrollWrapper.removeEventListener('scroll', this.emitScroll)
  },
  methods: {
    scroll(event) {
      const deltaY = event.deltaY
      const factor = 5

      this.$scrollWrapper.scrollLeft += deltaY / factor
    },

    emitScroll() {
      this.$emit('scroll')
    },

    moveToTag(view) {
      const $scrollbar = this.$refs.scrollbar.$el
      const $scrollWrapper = this.$scrollWrapper
      const scrollbarWidth = $scrollbar.offsetWidth
      const scrollWrapperWidth = $scrollWrapper.scrollWidth

      const tags = this.$parent.$refs.tag
      const [firstTag] = tags
      const [lastTag] = tags.slice(-1)

      if (view.fullPath === firstTag.item.fullPath) {
        $scrollWrapper.scrollLeft = 0
      } else if (view.fullPath === lastTag.item.fullPath) {
        $scrollWrapper.scrollLeft = scrollWrapperWidth - scrollbarWidth
      } else {
        const viewindex = tags.findIndex(tag => tag.item.fullPath === view.fullPath)
        const preTag = tags[viewindex - 1]
        const nextTag = tags[viewindex + 1]
        const $preTag = preTag.$el
        const $nextTag = nextTag.$el

        this.displayPreOrNextTagElement($preTag, $nextTag)
      }
    },

    /**
     * @param {HTMLElement} preElement
     * @param {HTMLElement} nextElement
     */
    displayPreOrNextTagElement(preElement, nextElement) {
      const $scrollbar = this.$refs.scrollbar.$el
      const $scrollWrapper = this.$scrollWrapper
      const scrollbarWidth = $scrollbar.offsetWidth

      const isCoverNextTagElementAfterScrollbar =
        nextElement.offsetLeft + nextElement.offsetWidth + TAG_AND_TAG_SPACING >
        $scrollWrapper.scrollLeft + scrollbarWidth
      const isCoverPreTagElementBeforeScrollbar =
        preElement.offsetLeft - TAG_AND_TAG_SPACING < $scrollWrapper.scrollLeft

      if (isCoverNextTagElementAfterScrollbar) {
        $scrollWrapper.scrollLeft =
          nextElement.offsetLeft + nextElement.offsetWidth + TAG_AND_TAG_SPACING - scrollbarWidth
      } else if (isCoverPreTagElementBeforeScrollbar) {
        $scrollWrapper.scrollLeft = preElement.offsetLeft - TAG_AND_TAG_SPACING
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.el-scrollbar {
  white-space: nowrap;
  width: 100%;

  ::v-deep {
    .is-horizontal {
      bottom: 0;
    }

    .is-vertical {
      display: none;
    }

    .el-scrollbar__wrap {
      height: 49px;
    }
  }
}
</style>
