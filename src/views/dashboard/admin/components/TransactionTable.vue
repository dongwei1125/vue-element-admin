<template>
  <div class="transaction-table">
    <el-table :data="tableData">
      <el-table-column :label="$t('dashboardPage.order')" min-width="200">
        <template slot-scope="{ row }">{{ row.orderNo | substring(0, 30) }}</template>
      </el-table-column>
      <el-table-column :label="$t('dashboardPage.price')">
        <template slot-scope="{ row }">¥{{ row.price | addThousandSeparator }}</template>
      </el-table-column>
      <el-table-column :label="$t('dashboardPage.state')">
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
      tableData: [
        {
          orderNo: '22b8567e-5b0c-4426-a5b6-ef1b6c470252',
          username: 'James Jackson',
          price: 5864,
          status: 'success',
        },
        {
          orderNo: '2e7de749-a3fc-401c-868c-24869f72e871',
          username: 'Karen Gonzalez',
          price: 11250.93,
          status: 'pending',
        },
        {
          orderNo: '72470181-6bca-4dae-981d-1eb2b17763fa',
          username: 'Elizabeth Thomas',
          price: 5034.96,
          status: 'success',
        },
        {
          orderNo: '80c25350-e0c4-4f5e-9898-4d7c977d4706',
          username: 'Kenneth Robinson',
          price: 13826.6,
          status: 'pending',
        },
        {
          orderNo: '2bead3c3-df68-4051-9f8e-a7aa8641f777',
          username: 'Shirley Hall',
          price: 12085,
          status: 'pending',
        },
        {
          orderNo: 'ca342d86-0907-4f6d-879c-7699d2c61718',
          username: 'Sarah Young',
          price: 12248.5,
          status: 'pending',
        },
        {
          orderNo: 'ef692720-5df3-4651-9ada-87d21e841a40',
          username: 'Joseph Walker',
          price: 11135.7,
          status: 'pending',
        },
        {
          orderNo: '602b3ee1-a2a4-4ac5-9256-220cdf9aa750',
          username: 'Elizabeth Gonzalez',
          price: 11265.88,
          status: 'success',
        },
      ],
    }
  },
}
</script>

<style scoped>
.transaction-table {
  padding-top: 15px;
}
</style>
