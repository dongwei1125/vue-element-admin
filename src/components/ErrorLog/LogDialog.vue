<template>
  <el-dialog :visible.sync="show" width="80%" append-to-body>
    <div slot="title">
      <span class="error-log-title">{{ $t('errorLog.title') }}</span>
      <el-button size="mini" type="primary" icon="el-icon-delete" @click="handleClear">
        {{ $t('errorLog.clearAll') }}
      </el-button>
    </div>

    <el-table :data="tableData" border>
      <el-table-column :label="$t('errorLog.message')">
        <template slot-scope="{ row }">
          <div>
            <span class="error-log-label">MSG: </span>
            <el-tag type="danger">{{ row.err.message }}</el-tag>
          </div>

          <br />

          <div>
            <span class="error-log-label">INFO: </span>
            <el-tag type="warning">{{ row.vm.$vnode.tag }} error in {{ row.info }}</el-tag>
          </div>

          <br />

          <div>
            <span class="error-log-label">URL: </span>
            <el-tag type="success">{{ row.url }}</el-tag>
          </div>
        </template>
      </el-table-column>

      <el-table-column :label="$t('errorLog.stack')">
        <template slot-scope="scope">
          <span class="error-log-stack">{{ scope.row.err.stack }}</span>
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>
</template>

<script>
import lang from './lang'

export default {
  name: 'LogDialog',
  mixins: [lang],
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
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
    tableData() {
      return this.$store.state.errorLog.logs
    },
  },
  methods: {
    handleClear() {
      this.$store.dispatch('errorLog/clearErrorLog')
    },
  },
}
</script>

<style>
.error-log-title {
  margin-right: 10px;
}

.error-log-label {
  color: #333;
  font-size: 16px;
  font-weight: bold;
  padding-right: 8px;
}

.error-log-stack {
  white-space: pre-wrap;
}
</style>
