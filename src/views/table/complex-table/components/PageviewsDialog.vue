<template>
  <el-dialog :visible.sync="show" :title="$t('complexTable.statistics')">
    <el-table :data="tableData" border highlight-current-row>
      <el-table-column prop="system" :label="$t('complexTable.system')" />
      <el-table-column prop="pageviews" :label="$t('complexTable.pageviews')" />
    </el-table>

    <template slot="footer">
      <el-button type="primary" @click="show = false">{{ $t('complexTable.submit') }}</el-button>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'PageviewsDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tableData: [
        { system: 'PC', pageviews: 1021 },
        { system: 'Mobile', pageviews: 1022 },
        { system: 'Ios', pageviews: 1023 },
        { system: 'Android', pageviews: 1024 },
      ],
    }
  },
  computed: {
    show: {
      get() {
        return this.visible
      },
      set(value) {
        this.$emit('update:visible', value)
      },
    },
  },
}
</script>
