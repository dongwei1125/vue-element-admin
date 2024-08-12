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
          id: '5cb8779d-5a82-4832-a971-033a0f4513ca',
          index: 1,
          datetime: '1991/03/31 12:03',
          author: 'Brian',
          title: 'Mjlvegh Erditenbh Osvxfwiadl Delxhds Saw Pthghtxg Yfrhenryu Dthy',
          importance: 2,
          status: 'published',
        },
        {
          id: '7d916fed-e0da-4834-84d3-65ef5260494f',
          index: 2,
          datetime: '2005/05/09 02:21',
          author: 'Ronald',
          title: 'Qaioqiy Hobv Jevpljvkx Ils Njwtdgr Uphl Ymkowyzit Rkupe Esvikycjtw Flg',
          importance: 2,
          status: 'draft',
        },
        {
          id: 'd4754d26-40d7-468b-afe7-ee27c4647eca',
          index: 3,
          datetime: '1979/04/11 06:23',
          author: 'Jose',
          title: 'Obvnjsdf Jianc Oixlserby Rimuvon Dbqesdro Vjavmwcv Ylofk',
          importance: 2,
          status: 'draft',
        },
        {
          id: 'd4c3fc77-1073-4cf3-b0b1-a5cdd4928135',
          index: 4,
          datetime: '2023/04/22 15:05',
          author: 'Jeffrey',
          title: 'Dqlsqtvrj Krctfhcn Plje Duwrlixmq Dbrtmvpu Ggtyixvsbx Dqec Upcbgjprp',
          importance: 3,
          status: 'draft',
        },
        {
          id: '044081a0-d435-4f18-84c0-f688bfaf4685',
          index: 5,
          datetime: '2018/03/03 15:37',
          author: 'John',
          title: 'Cxt Hpywpj Vvjrl Esmqnd Grxyadnp Jursycoww',
          importance: 3,
          status: 'published',
        },
        {
          id: '98de4225-e84f-4063-990a-180d15df4b20',
          index: 6,
          datetime: '2007/06/03 10:49',
          author: 'Joseph',
          title: 'Ilxwgmhse Lppbrbp Qoxdqn Fvhoo Vkghs Ugiugfxv',
          importance: 2,
          status: 'draft',
        },
        {
          id: 'd68e72e1-56cb-48a7-a92a-d81b878d75f4',
          index: 7,
          datetime: '2023/12/12 21:07',
          author: 'Michelle',
          title: 'Hixbsb Axesvvr Dxbgdkzt Pgkll Rgsefmbxz Kesu',
          importance: 2,
          status: 'published',
        },
        {
          id: '30bed7df-9305-464d-a413-f8a509c5dad1',
          index: 8,
          datetime: '2000/12/26 07:51',
          author: 'Jessica',
          title: 'Ppj Nhezqv Nbpb Ucwhvbdm Ofe Xsu',
          importance: 3,
          status: 'published',
        },
        {
          id: '22f8e94b-cf12-4c08-bf63-21f13572daca',
          index: 9,
          datetime: '1972/02/08 17:43',
          author: 'Richard',
          title: 'Yfbmtr Odwkjjpde Zmmxxlpwr Fwet Hthmm Cduy Exdupjtoj Kwblf Vwvc',
          importance: 2,
          status: 'draft',
        },
        {
          id: 'b1b1af52-83be-44c7-bc10-d63ccd6a9585',
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

    handleEdit({ id }) {
      this.$router.push({
        path: '/example/edit',
        query: { id },
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
