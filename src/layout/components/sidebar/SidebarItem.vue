<template>
  <div>
    <el-submenu v-if="item.children && item.children.length" :index="resolvePath(item.path)">
      <template slot="title">
        <item :title="item.title" :icon="item.icon" />
      </template>

      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(item.path)"
      />
    </el-submenu>

    <el-menu-item v-else :index="resolvePath(item.path)">
      <item :title="item.title" :icon="item.icon" />
    </el-menu-item>
  </div>
</template>

<script>
import path from 'path'

import Item from './Item.vue'

export default {
  name: 'SidebarItem',
  components: { Item },
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
      return path.resolve(this.basePath, routePath)
    },
  },
}
</script>
