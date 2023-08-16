<template>
  <el-scrollbar>
    <tree-select v-model="keys" node-key="key" :data="menus" :props="{ label: 'name' }" />
  </el-scrollbar>
</template>

<script>
import getMenus from './menus'

import TreeSelect from '@/components/TreeSelect'

export default {
  name: 'MenuTree',
  components: { TreeSelect },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      menus: [],
    }
  },
  computed: {
    keys: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('change', value)
      },
    },
    language() {
      return this.$store.state.app.language
    },
  },
  watch: {
    language: {
      handler() {
        this.getMenus()
      },
      immediate: true,
    },
  },
  methods: {
    getMenus() {
      this.menus = getMenus()
    },
  },
}
</script>

<style scoped>
.el-tree {
  height: 300px;
}
</style>
