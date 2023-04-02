<template>
  <div v-if="!item.meta?.hidden">
    <el-submenu
      v-if="item.children && item.children.length"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template slot="title">
        <item :title="item.meta?.title" :icon="item.meta?.icon" />
      </template>

      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(item.path)"
      />
    </el-submenu>

    <item-link v-else :to="resolvePath(item.path)">
      <el-menu-item :index="resolvePath(item.path)">
        <item :title="item.meta?.title" :icon="item.meta?.icon" />
      </el-menu-item>
    </item-link>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils'

import Item from './Item.vue'
import ItemLink from './ItemLink.vue'

export default {
  name: 'SidebarItem',
  components: { Item, ItemLink },
  props: {
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: '',
    },
  },
  methods: {
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }

      return path.resolve(this.basePath, routePath)
    },
  },
}
</script>
