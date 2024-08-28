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

    <context-menu ref="contextMenu" :visible.sync="visible" :left="left" :top="top">
      <li @click="refreshTag(selectedTag)">{{ $t('tagsView.refresh') }}</li>
      <li v-if="!isAffix(selectedTag)" @click="closeTag(selectedTag)">{{ $t('tagsView.close') }}</li>
      <li @click="closeOtherTags(selectedTag)">{{ $t('tagsView.closeOthers') }}</li>
      <li @click="closeAllTags">{{ $t('tagsView.closeAll') }}</li>
    </context-menu>
  </div>
</template>

<script>
import tag from './tag'

import Scrollbar from './Scrollbar.vue'
import TagsViewItem from './TagsViewItem.vue'
import ContextMenu from './ContextMenu.vue'

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
    views() {
      return this.$store.state.tagsView.views
    },
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
      this.visible = true
      this.selectedTag = tag

      this.$nextTick(() => {
        this.setContextMenuPosition(event)
      })
    },

    setContextMenuPosition(event) {
      const X = event.clientX
      const Y = event.clientY

      const $contextMenu = this.$refs.contextMenu.$el
      const contextMenuWidth = $contextMenu.offsetWidth
      const rightOffset = 15

      const rect = this.$el.getBoundingClientRect()
      const offsetLeft = rect.left
      const offsetTop = rect.top
      const offsetWidth = this.$el.offsetWidth
      const maxLeft = offsetWidth - contextMenuWidth - rightOffset
      const left = X - offsetLeft + rightOffset

      this.left = left > maxLeft ? maxLeft : left
      this.top = Y - offsetTop
    },
  },
}
</script>

<style scoped>
.tags-view {
  height: 34px;
  border-bottom: 1px solid #d8dce5;
  position: relative;
}
</style>
