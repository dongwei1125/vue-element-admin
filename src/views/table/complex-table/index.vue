<template>
  <div class="complex-table">
    <div class="complex-table-header">
      <el-input
        v-model="params.title"
        :placeholder="$t('complexTable.title')"
        clearable
        @keyup.enter.native="getTableData"
        @clear="getTableData"
      />
      <el-select v-model="params.importance" :placeholder="$t('complexTable.importance')" clearable>
        <el-option v-for="item in 5" :key="item" :label="item" :value="item" />
      </el-select>

      <el-button type="primary" icon="el-icon-search" @click="getTableData">
        {{ $t('complexTable.search') }}
      </el-button>
      <el-button type="primary" icon="el-icon-plus" @click="handleAdd">
        {{ $t('complexTable.add') }}
      </el-button>
      <el-button type="primary" icon="el-icon-download" @click="handleExport">
        {{ $t('complexTable.export') }}
      </el-button>

      <el-checkbox v-model="showAuthor" @change="key++">
        {{ $t('complexTable.author') }}
      </el-checkbox>
    </div>

    <div class="complex-table-content">
      <el-table ref="table" :key="key" v-loading="loading" :data="tableData" border highlight-current-row>
        <el-table-column :label="$t('complexTable.title')" prop="title" min-width="300px" />
        <el-table-column :label="$t('complexTable.datetime')" prop="datetime" align="center" width="200px" />
        <el-table-column
          v-if="showAuthor"
          :label="$t('complexTable.author')"
          prop="author"
          align="center"
          width="140px"
        />
        <el-table-column :label="$t('complexTable.importance')" width="140px">
          <template slot-scope="{ row }">
            <rate :value="row.importance" />
          </template>
        </el-table-column>
        <el-table-column :label="$t('complexTable.pageviews')" prop="pageviews" align="center" width="120px">
          <template slot-scope="{ row }">
            <el-button type="text" size="mini" @click="handlePageviews">{{ row.pageviews }}</el-button>
          </template>
        </el-table-column>
        <el-table-column :label="$t('complexTable.status')" align="center" width="110px">
          <template slot-scope="{ row }">
            <el-tag v-if="row.status === 'published'" type="success">
              {{ $t('complexTable.published') }}
            </el-tag>
            <el-tag v-else type="info">{{ $t('complexTable.draft') }}</el-tag>
          </template>
        </el-table-column>

        <el-table-column :label="$t('complexTable.action')" align="center" width="240px">
          <template slot-scope="{ row }">
            <el-button type="primary" size="mini" @click="handleEdit(row)">
              {{ $t('complexTable.edit') }}
            </el-button>

            <el-button v-if="row.status === 'published'" size="mini" @click="handleDraft(row)">
              {{ $t('complexTable.draft') }}
            </el-button>
            <el-button v-else type="success" size="mini" @click="handlePublish(row)">
              {{ $t('complexTable.publish') }}
            </el-button>

            <el-button type="danger" size="mini" @click="handleDelete(row)">
              {{ $t('complexTable.delete') }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="complex-table-footer">
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

    <article-dialog
      :visible.sync="articleVisible"
      :row="currentRow"
      :is-edit="isEdit"
      @add="addArticle"
      @edit="editArticle"
    />

    <pageviews-dialog :visible.sync="pageviewsVisible" />
  </div>
</template>

<script>
import { listToExcel } from '@/utils/export2excel'

import Rate from '@/components/Rate'
import ArticleDialog from './components/ArticleDialog.vue'
import PageviewsDialog from './components/PageviewsDialog.vue'

export default {
  name: 'ComplexTable',
  components: { Rate, ArticleDialog, PageviewsDialog },
  data() {
    return {
      key: 1,
      pagination: {
        pageNo: 1,
        pageSize: 10,
      },
      params: {
        title: '',
        importance: '',
      },
      tableData: [],
      total: 100,
      loading: false,
      showAuthor: false,
      articleVisible: false,
      pageviewsVisible: false,
      isEdit: false,
      currentRow: null,
    }
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    getTableData() {
      this.loading = true
      const tableData = [
        {
          id: '5cb8779d-5a82-4832-a971-033a0f4513ca',
          datetime: '1991/03/31 12:03',
          author: 'Brian',
          title: 'Mjlvegh Erditenbh Osvxfwiadl Delxhds Saw Pthghtxg Yfrhenryu Dthy',
          importance: 2,
          status: 'published',
          pageviews: 2454,
        },
        {
          id: '7d916fed-e0da-4834-84d3-65ef5260494f',
          datetime: '2005/05/09 02:21',
          author: 'Ronald',
          title: 'Qaioqiy Hobv Jevpljvkx Ils Njwtdgr Uphl Ymkowyzit Rkupe Esvikycjtw Flg',
          importance: 2,
          status: 'draft',
          pageviews: 2372,
        },
        {
          id: 'd4754d26-40d7-468b-afe7-ee27c4647eca',
          datetime: '1979/04/11 06:23',
          author: 'Jose',
          title: 'Obvnjsdf Jianc Oixlserby Rimuvon Dbqesdro Vjavmwcv Ylofk',
          importance: 2,
          status: 'draft',
          pageviews: 4729,
        },
        {
          id: 'd4c3fc77-1073-4cf3-b0b1-a5cdd4928135',
          datetime: '2023/04/22 15:05',
          author: 'Jeffrey',
          title: 'Dqlsqtvrj Krctfhcn Plje Duwrlixmq Dbrtmvpu Ggtyixvsbx Dqec Upcbgjprp',
          importance: 3,
          status: 'draft',
          pageviews: 1158,
        },
        {
          id: '044081a0-d435-4f18-84c0-f688bfaf4685',
          datetime: '2018/03/03 15:37',
          author: 'John',
          title: 'Cxt Hpywpj Vvjrl Esmqnd Grxyadnp Jursycoww',
          importance: 3,
          status: 'published',
          pageviews: 4319,
        },
        {
          id: '98de4225-e84f-4063-990a-180d15df4b20',
          datetime: '2007/06/03 10:49',
          author: 'Joseph',
          title: 'Ilxwgmhse Lppbrbp Qoxdqn Fvhoo Vkghs Ugiugfxv',
          importance: 2,
          status: 'draft',
          pageviews: 2710,
        },
        {
          id: 'd68e72e1-56cb-48a7-a92a-d81b878d75f4',
          datetime: '2023/12/12 21:07',
          author: 'Michelle',
          title: 'Hixbsb Axesvvr Dxbgdkzt Pgkll Rgsefmbxz Kesu',
          importance: 2,
          status: 'published',
          pageviews: 2815,
        },
        {
          id: '30bed7df-9305-464d-a413-f8a509c5dad1',
          datetime: '2000/12/26 07:51',
          author: 'Jessica',
          title: 'Ppj Nhezqv Nbpb Ucwhvbdm Ofe Xsu',
          importance: 3,
          status: 'published',
          pageviews: 2039,
        },
        {
          id: '22f8e94b-cf12-4c08-bf63-21f13572daca',
          datetime: '1972/02/08 17:43',
          author: 'Richard',
          title: 'Yfbmtr Odwkjjpde Zmmxxlpwr Fwet Hthmm Cduy Exdupjtoj Kwblf Vwvc',
          importance: 2,
          status: 'draft',
          pageviews: 538,
        },
        {
          id: 'b1b1af52-83be-44c7-bc10-d63ccd6a9585',
          datetime: '2007/02/11 04:56',
          author: 'John',
          title: 'Fdxmk Ljxaax Ofnykssh Ffpjtoogx Qhokt Mkdayllpe Diyjcssmn Ksixf Giqnmbnl Hkdsgnh',
          importance: 3,
          status: 'published',
          pageviews: 4814,
        },
      ]

      setTimeout(() => {
        this.tableData = tableData
        this.loading = false
      }, 50)
    },

    handleExport() {
      const author = [
        {
          label: this.$t('complexTable.author'),
          prop: 'author',
        },
      ]
      const header = [
        {
          label: this.$t('complexTable.title'),
          prop: 'title',
        },
        {
          label: this.$t('complexTable.datetime'),
          prop: 'datetime',
        },
        ...(this.showAuthor ? author : []),
        {
          label: this.$t('complexTable.importance'),
          prop: 'importance',
        },
        {
          label: this.$t('complexTable.pageviews'),
          prop: 'pageviews',
        },
        {
          label: this.$t('complexTable.status'),
          prop: 'status',
        },
      ]

      listToExcel({
        header,
        data: this.formatter(this.tableData),
      })
    },

    formatter(list = []) {
      return list.map(row => {
        const status =
          row.status === 'published' ? this.$t('complexTable.published') : this.$t('complexTable.draft')

        return { ...row, status }
      })
    },

    handleAdd() {
      this.articleVisible = true
      this.isEdit = false
      this.currentRow = null
    },

    handleEdit(row) {
      this.articleVisible = true
      this.isEdit = true
      this.currentRow = { ...row }
    },

    addArticle(data) {
      this.tableData.push({ ...data })

      this.$message.success(this.$t('complexTable.addSucced'))
    },

    editArticle(row) {
      const item = this.tableData.find(el => el.id === row.id)

      Object.assign(item, { ...row })

      this.$message.success(this.$t('complexTable.editSucced'))
    },

    handlePublish(row) {
      row.status = 'published'
    },

    handleDraft(row) {
      row.status = 'draft'
    },

    handlePageviews() {
      this.pageviewsVisible = true
    },

    handleDelete(row) {
      const index = this.tableData.findIndex(item => item === row)

      this.tableData.splice(index, 1)

      this.$notify({
        title: this.$t('complexTable.success'),
        message: this.$t('complexTable.deleteSucced'),
        type: 'success',
        duration: 2000,
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

<style lang="scss" scoped>
.complex-table {
  padding: 20px;
}

.complex-table-header {
  margin-bottom: 20px;

  .el-input {
    width: 200px;
    margin-right: 10px;
  }

  .el-select {
    width: 120px;
    margin-right: 10px;
  }

  .el-checkbox {
    margin-left: 10px;
  }
}

.complex-table-footer {
  margin-top: 20px;
}
</style>
