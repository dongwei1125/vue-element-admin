<template>
  <div class="tags-view">
    <el-scrollbar :vertical="false">
      <ul>
        <router-link
          v-for="tag in views"
          :key="tag.path"
          :to="tag.path"
          tag="li"
          class="tags-view-item"
          :class="{ 'is-active': isActive(tag) }"
          @contextmenu.prevent.native="openContextMenu($event, tag)"
        >
          <span>{{ tag.meta.title }}</span>
          <span v-if="!isAffix(tag)" class="el-icon-close" @click.prevent="closeSelectedTag(tag)" />
        </router-link>
      </ul>
    </el-scrollbar>

    <ul v-show="visible" ref="contextmenu" class="tags-view-contextmenu" :style="styles">
      <li>刷新</li>
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">关闭</li>
      <li @click="closeOtherTags(selectedTag)">关闭其它</li>
      <li @click="closeAllTags">关闭所有</li>
    </ul>
  </div>
</template>

<script>
import { resolvePath } from '@/utils'

export default {
  name: 'TagsView',
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
    styles() {
      return {
        left: this.left + 'px',
        top: this.top + 'px',
      }
    },
  },
  watch: {
    $route() {
      this.addTag()
    },
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeContextMenu)
      } else {
        document.body.removeEventListener('click', this.closeContextMenu)
      }
    },
  },
  mounted() {
    this.initTags()
    this.addTag()
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path
    },

    isAffix(tag) {
      return tag?.meta?.affix
    },

    filterAffixTags(routes, basePath = '/') {
      const tags = []

      routes.forEach(route => {
        if (route.meta?.affix) {
          tags.push({
            path: resolvePath(basePath, route.path),
            meta: { ...route.meta },
          })
        }

        if (route.children?.length) {
          const childrenTags = this.filterAffixTags(route.children, route.path)

          if (childrenTags?.length) {
            tags.push(...childrenTags)
          }
        }
      })

      return tags
    },

    initTags() {
      const tags = this.filterAffixTags(this.routes)

      tags.forEach(tag => {
        this.$store.dispatch('tagsView/addView', tag)
      })
    },

    addTag() {
      this.$store.dispatch('tagsView/addView', this.$route)
    },

    closeSelectedTag(tag) {
      this.$store.dispatch('tagsView/removeView', tag).then(() => {
        if (this.isActive(tag)) {
          this.toLastView()
        }
      })
    },

    closeOtherTags(tag) {
      this.$router.push(tag)
      this.$store.dispatch('tagsView/removeOtherViews', tag)
    },

    closeAllTags() {
      this.$store.dispatch('tagsView/removeAllViews').then(() => {
        this.toLastView()
      })
    },

    toLastView() {
      const [lastView] = this.views.slice(-1)

      if (lastView) {
        this.$router.push(lastView)
      }
    },

    closeContextMenu() {
      this.visible = false
    },

    openContextMenu(event, tag) {
      const X = event.clientX
      const Y = event.clientY

      const contextMenuWidth = 80 + 15
      const offset = 15

      const rect = this.$el.getBoundingClientRect()
      const offsetLeft = rect.left
      const offsetTop = rect.top
      const offsetWidth = this.$el.offsetWidth
      const maxLeft = offsetWidth - contextMenuWidth
      const left = X - offsetLeft + offset

      this.left = left > maxLeft ? maxLeft : left
      this.top = Y - offsetTop
      this.visible = true
      this.selectedTag = tag
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

.tags-view-item {
  display: inline-block;
  height: 26px;
  line-height: 26px;
  border: 1px solid #d8dce5;
  color: #495060;
  background-color: #fff;
  padding: 0 8px;
  font-size: 12px;
  margin-top: 4px;
  margin-right: 5px;
  cursor: pointer;
  position: relative;

  &.is-active {
    color: #fff;
    background-color: #42b983;
    border-color: #42b983;

    &::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #fff;
      margin-right: 2px;
    }
  }

  &:first-of-type {
    margin-left: 15px;
  }

  &:last-of-type {
    margin-right: 15px;
  }
}

.el-icon-close {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  text-align: center;
  margin-left: 2px;
  vertical-align: 2px;
  transition: all 0.28s;

  &:before {
    display: inline-block;
    transform: scale(0.7);
    vertical-align: -2px;
  }

  &:hover {
    color: #fff;
    background-color: #b4bccc;
  }
}

.el-scrollbar {
  width: 100%;

  ul {
    white-space: nowrap;
  }

  ::v-deep {
    .is-horizontal {
      bottom: 0;
    }

    .el-scrollbar__wrap {
      height: 49px;
    }
  }
}

.tags-view-contextmenu {
  position: absolute;
  padding: 5px 0;
  border-radius: 4px;
  background: #fff;
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
