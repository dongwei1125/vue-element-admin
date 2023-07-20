<template>
  <div class="transaction-table">
    <el-table :data="tableData">
      <el-table-column :label="$t('dashboardPage.order')">
        <template slot-scope="{ row }">{{ row.orderNo | substring(0, 30) }}</template>
      </el-table-column>
      <el-table-column :label="$t('dashboardPage.price')" align="center">
        <template slot-scope="{ row }">¥{{ row.price | addThousandSeparator }}</template>
      </el-table-column>
      <el-table-column :label="$t('dashboardPage.state')" align="center">
        <template slot-scope="{ row }">
          <el-tag :type="row.status === 'success' ? 'success' : 'danger'">{{ row.status }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { addThousandSeparator, substring } from '@/utils/formatter'

export default {
  name: 'TransactionTable',
  filters: { addThousandSeparator, substring },
  data() {
    return {
      tableData: [],
    }
  },
}
</script>

<style scoped>
.transaction-table {
  padding-top: 15px;
}
</style>
