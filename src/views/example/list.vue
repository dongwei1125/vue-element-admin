<template>
  <div class="article-list">
    <el-table :data="tableData" border highlight-current-row>
      <el-table-column :label="$t('articleList.index')" prop="index" align="center" width="80px" />
      <el-table-column :label="$t('articleList.datetime')" prop="datetime" align="center" width="200px" />

      <el-table-column :label="$t('articleList.author')" prop="author" align="center" width="140px" />
      <el-table-column :label="$t('articleList.importance')" width="140px">
        <template slot-scope="{ row }">
          <rate :value="row.importance" />
        </template>
      </el-table-column>
      <el-table-column :label="$t('articleList.status')" align="center" width="110px">
        <template slot-scope="{ row }">
          <el-tag v-if="row.status === 'published'" type="success">{{ $t('articleList.published') }}</el-tag>
          <el-tag v-else type="info">{{ $t('articleList.draft') }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column :label="$t('articleList.title')" prop="title" min-width="300px" />
      <el-table-column :label="$t('articleList.action')" align="center" width="100px">
        <template slot-scope="{ row }">
          <el-button type="primary" size="small" icon="el-icon-edit" @click="handleEdit(row)">
            {{ $t('articleList.edit') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="article-list-footer">
      <el-pagination
        background
        :current-page="pagination.pageNo"
        :page-size="pagination.pageSize"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleNoChange"
      />
    </div>
  </div>
</template>

<script>
import { list } from '@/api/article'

import Rate from '@/components/Rate'

export default {
  name: 'ArticleList',
  components: { Rate },
  data() {
    return {
      pagination: {
        pageNo: 1,
        pageSize: 10,
      },
      tableData: [],
      total: 100,
    }
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    getTableData() {
      list().then(({ data }) => {
        this.tableData = data?.list || []
        this.total = data?.total || 0
      })
    },

    handleEdit({ id }) {
      this.$router.push({
        path: `/example/edit/${id}`,
      })
    },

    handleNoChange(pageNo) {
      this.pagination.pageNo = pageNo

      this.getTableData()
    },

    handleSizeChange(pageSize) {
      this.pagination.pageSize = pageSize

      this.getTableData()
    },
  },
}
</script>

<style scoped>
.article-list {
  padding: 20px;
}

.article-list-footer {
  padding: 32px 16px;
  margin-top: 30px;
}
</style>
