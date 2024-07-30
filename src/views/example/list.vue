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
        <el-button type="primary" size="small" icon="el-icon-edit">{{ $t('articleList.edit') }}</el-button>
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
      const tableData = [
        {
          index: 1,
          datetime: '1991/03/31 12:03',
          author: 'Brian',
          title: 'Mjlvegh Erditenbh Osvxfwiadl Delxhds Saw Pthghtxg Yfrhenryu Dthy',
          importance: 2,
          status: 'published',
        },
        {
          index: 2,
          datetime: '2005/05/09 02:21',
          author: 'Ronald',
          title: 'Qaioqiy Hobv Jevpljvkx Ils Njwtdgr Uphl Ymkowyzit Rkupe Esvikycjtw Flg',
          importance: 2,
          status: 'draft',
        },
        {
          index: 3,
          datetime: '1979/04/11 06:23',
          author: 'Jose',
          title: 'Obvnjsdf Jianc Oixlserby Rimuvon Dbqesdro Vjavmwcv Ylofk',
          importance: 2,
          status: 'draft',
        },
        {
          index: 4,
          datetime: '2023/04/22 15:05',
          author: 'Jeffrey',
          title: 'Dqlsqtvrj Krctfhcn Plje Duwrlixmq Dbrtmvpu Ggtyixvsbx Dqec Upcbgjprp',
          importance: 3,
          status: 'draft',
        },
        {
          index: 5,
          datetime: '2018/03/03 15:37',
          author: 'John',
          title: 'Cxt Hpywpj Vvjrl Esmqnd Grxyadnp Jursycoww',
          importance: 3,
          status: 'published',
        },
        {
          index: 6,
          datetime: '2007/06/03 10:49',
          author: 'Joseph',
          title: 'Ilxwgmhse Lppbrbp Qoxdqn Fvhoo Vkghs Ugiugfxv',
          importance: 2,
          status: 'draft',
        },
        {
          index: 7,
          datetime: '2023/12/12 21:07',
          author: 'Michelle',
          title: 'Hixbsb Axesvvr Dxbgdkzt Pgkll Rgsefmbxz Kesu',
          importance: 2,
          status: 'published',
        },
        {
          index: 8,
          datetime: '2000/12/26 07:51',
          author: 'Jessica',
          title: 'Ppj Nhezqv Nbpb Ucwhvbdm Ofe Xsu',
          importance: 3,
          status: 'published',
        },
        {
          index: 9,
          datetime: '1972/02/08 17:43',
          author: 'Richard',
          title: 'Yfbmtr Odwkjjpde Zmmxxlpwr Fwet Hthmm Cduy Exdupjtoj Kwblf Vwvc',
          importance: 2,
          status: 'draft',
        },
        {
          index: 10,
          datetime: '2007/02/11 04:56',
          author: 'John',
          title: 'Fdxmk Ljxaax Ofnykssh Ffpjtoogx Qhokt Mkdayllpe Diyjcssmn Ksixf Giqnmbnl Hkdsgnh',
          importance: 3,
          status: 'published',
        },
      ]

      setTimeout(() => {
        this.tableData = tableData
      }, 500)
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
