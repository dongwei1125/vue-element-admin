<template>
  <el-table-column v-bind="column">
    <template v-for="(header, index) in column.children">
      <el-table-columns v-if="header.children?.length" :key="index" :column="header" />

      <el-table-column v-else :key="index" v-bind="header" />
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'ElTableColumns',
  props: {
    column: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
