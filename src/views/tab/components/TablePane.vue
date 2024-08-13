<template>
  <el-table :data="tableData" border highlight-current-row>
    <el-table-column :label="$t('tab.index')" />
    <el-table-column :label="$t('tab.datetime')" />
    <el-table-column :label="$t('tab.title')" />
    <el-table-column :label="$t('tab.author')" />
    <el-table-column :label="$t('tab.importance')" />
    <el-table-column :label="$t('tab.pageviews')" />
    <el-table-column :label="$t('tab.status')" />
  </el-table>
</template>

<script>
export default {
  name: 'TablePane',
  data() {
    return {
      tableData: [],
    }
  },
}
</script>
