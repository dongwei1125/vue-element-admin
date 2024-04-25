<template>
  <div class="inline-edit-table">
    <el-table :data="tableData" border highlight-current-row>
      <el-table-column :label="$t('inlineEditTable.datetime')" prop="datetime" align="center" width="200px" />
      <el-table-column :label="$t('inlineEditTable.author')" prop="author" align="center" width="140px" />
      <el-table-column :label="$t('inlineEditTable.importance')" width="140px">
        <template slot-scope="{ row }">
          <rate :value="row.importance" />
        </template>
      </el-table-column>
      <el-table-column :label="$t('inlineEditTable.status')" align="center" width="110px">
        <template slot-scope="{ row }">
          <el-tag v-if="row.status === 'published'" type="success">
            {{ $t('inlineEditTable.published') }}
          </el-tag>
          <el-tag v-else type="info">{{ $t('inlineEditTable.draft') }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column :label="$t('inlineEditTable.title')" prop="title" min-width="300px">
        <template slot-scope="{ row }">
          <el-input v-if="row.isEdit" v-model="row.title" size="small" />

          <template v-else>{{ row.title }}</template>
        </template>
      </el-table-column>

      <el-table-column :label="$t('inlineEditTable.action')" align="center" width="120px">
        <template slot-scope="{ row }">
          <template v-if="row.isEdit">
            <el-button type="success" size="mini" icon="el-icon-check" @click="submitEdit(row)" />
            <el-button type="warning" size="mini" icon="el-icon-close" @click="cancelEdit(row)" />
          </template>

          <el-button v-else type="primary" size="mini" icon="el-icon-edit" @click="handleEdit(row)">
            {{ $t('inlineEditTable.edit') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Rate from '@/components/Rate'

export default {
  name: 'InlineEditTable',
  components: { Rate },
  data() {
    return {
      tableData: [],
    }
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    getTableData() {
      const tableData = [
        {
          datetime: '1991/03/31 12:03',
          author: 'Brian',
          title: 'Mjlvegh Erditenbh Osvxfwiadl Delxhds Saw Pthghtxg Yfrhenryu Dthy',
          importance: 2,
          status: 'published',
        },
        {
          datetime: '2005/05/09 02:21',
          author: 'Ronald',
          title: 'Qaioqiy Hobv Jevpljvkx Ils Njwtdgr Uphl Ymkowyzit Rkupe Esvikycjtw Flg',
          importance: 2,
          status: 'draft',
        },
        {
          datetime: '1979/04/11 06:23',
          author: 'Jose',
          title: 'Obvnjsdf Jianc Oixlserby Rimuvon Dbqesdro Vjavmwcv Ylofk',
          importance: 2,
          status: 'draft',
        },
        {
          datetime: '2023/04/22 15:05',
          author: 'Jeffrey',
          title: 'Dqlsqtvrj Krctfhcn Plje Duwrlixmq Dbrtmvpu Ggtyixvsbx Dqec Upcbgjprp',
          importance: 3,
          status: 'draft',
        },
        {
          datetime: '2018/03/03 15:37',
          author: 'John',
          title: 'Cxt Hpywpj Vvjrl Esmqnd Grxyadnp Jursycoww',
          importance: 3,
          status: 'published',
        },
        {
          datetime: '2007/06/03 10:49',
          author: 'Joseph',
          title: 'Ilxwgmhse Lppbrbp Qoxdqn Fvhoo Vkghs Ugiugfxv',
          importance: 2,
          status: 'draft',
        },
        {
          datetime: '2023/12/12 21:07',
          author: 'Michelle',
          title: 'Hixbsb Axesvvr Dxbgdkzt Pgkll Rgsefmbxz Kesu',
          importance: 2,
          status: 'published',
        },
        {
          datetime: '2000/12/26 07:51',
          author: 'Jessica',
          title: 'Ppj Nhezqv Nbpb Ucwhvbdm Ofe Xsu',
          importance: 3,
          status: 'published',
        },
        {
          datetime: '1972/02/08 17:43',
          author: 'Richard',
          title: 'Yfbmtr Odwkjjpde Zmmxxlpwr Fwet Hthmm Cduy Exdupjtoj Kwblf Vwvc',
          importance: 2,
          status: 'draft',
        },
        {
          datetime: '2007/02/11 04:56',
          author: 'John',
          title: 'Fdxmk Ljxaax Ofnykssh Ffpjtoogx Qhokt Mkdayllpe Diyjcssmn Ksixf Giqnmbnl Hkdsgnh',
          importance: 3,
          status: 'published',
        },
      ]

      this.tableData = tableData.map(item => ({ ...item, isEdit: false, originalTitle: item.title }))
    },

    submitEdit(row) {
      row.originalTitle = row.title
      row.isEdit = false
    },

    cancelEdit(row) {
      row.title = row.originalTitle
      row.isEdit = false
    },

    handleEdit(row) {
      row.isEdit = !row.isEdit
    },
  },
}
</script>

<style scoped>
.inline-edit-table {
  padding: 20px;
}
</style>
