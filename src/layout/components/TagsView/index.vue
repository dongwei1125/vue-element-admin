<template>
  <div class="tags-view">
    <scrollbar ref="scrollbar" @scroll="closeContextMenu">
      <tags-view-item
        v-for="tag in views"
        ref="tag"
        :key="tag.path"
        :item="tag"
        @close="closeTag"
        @contextmenu="openContextMenu"
      />
    </scrollbar>

    <context-menu :visible.sync="visible" :left="left" :top="top">
      <li @click="refreshTag(selectedTag)">刷新</li>
      <li v-if="!isAffix(selectedTag)" @click="closeTag(selectedTag)">关闭</li>
      <li @click="closeOtherTags(selectedTag)">关闭其它</li>
      <li @click="closeAllTags">关闭所有</li>
    </context-menu>
  </div>
</template>

<script>
import Scrollbar from './Scrollbar.vue'
import TagsViewItem from './TagsViewItem.vue'
import ContextMenu from './ContextMenu.vue'

import tag from './mixins/tag'

export default {
  name: 'TagsView',
  components: { Scrollbar, TagsViewItem, ContextMenu },
  mixins: [tag],
  data() {
    return {
      visible: false,
      left: 0,
      top: 0,
      selectedTag: null,
    }
  },
  computed: {
    routes() {
      return this.$store.getters.routes
    },
  },
  watch: {
    $route() {
      if (this.$route.path.startsWith('/redirect/')) return

      this.addTag(this.$route)
      this.moveToTag(this.$route)
    },
  },
  mounted() {
    this.initTags(this.routes)
    this.addTag(this.$route)
  },
  methods: {
    closeContextMenu() {
      this.visible = false
    },

    openContextMenu(event, tag) {
      this.setContextMenuPosition(event)

      this.visible = true
      this.selectedTag = tag
    },

    setContextMenuPosition(event) {
      const X = event.clientX
      const Y = event.clientY

      const contextMenuWidth = 80 + 15
      const rightOffset = 15

      const rect = this.$el.getBoundingClientRect()
      const offsetLeft = rect.left
      const offsetTop = rect.top
      const offsetWidth = this.$el.offsetWidth
      const maxLeft = offsetWidth - contextMenuWidth
      const left = X - offsetLeft + rightOffset

      this.left = left > maxLeft ? maxLeft : left
      this.top = Y - offsetTop
    },
  },
}
</script>

<style lang="scss" scoped>
.tags-view {
  height: 34px;
  border-bottom: 1px solid #d8dce5;
  position: relative;
}
</style>
