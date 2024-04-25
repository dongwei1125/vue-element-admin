<template>
  <div class="drag-table">
    <el-table ref="table" row-key="id" :data="tableData" border highlight-current-row>
      <el-table-column :label="$t('dragTable.index')" prop="index" align="center" width="80px" />
      <el-table-column :label="$t('dragTable.datetime')" prop="datetime" align="center" width="200px" />
      <el-table-column :label="$t('dragTable.title')" prop="title" min-width="300px" />
      <el-table-column :label="$t('dragTable.author')" prop="author" align="center" width="140px" />
      <el-table-column :label="$t('dragTable.importance')" width="140px">
        <template slot-scope="{ row }">
          <rate :value="row.importance" />
        </template>
      </el-table-column>
      <el-table-column :label="$t('dragTable.pageviews')" prop="pageviews" align="center" width="120px" />
      <el-table-column :label="$t('dragTable.status')" align="center" width="110px">
        <template slot-scope="{ row }">
          <el-tag v-if="row.status === 'published'" type="success">{{ $t('dragTable.published') }}</el-tag>
          <el-tag v-else type="info">{{ $t('dragTable.draft') }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column :label="$t('dragTable.action')" align="center" width="100px">
        <svg-icon icon-class="drag" class-name="drag-icon" />
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Sortable from 'sortablejs'

import Rate from '@/components/Rate'

export default {
  name: 'DragTable',
  components: { Rate },
  data() {
    return {
      tableData: [],
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.getTableData()
      this.setDrag()
    },

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
          pageviews: 2454,
        },
        {
          id: '7d916fed-e0da-4834-84d3-65ef5260494f',
          index: 2,
          datetime: '2005/05/09 02:21',
          author: 'Ronald',
          title: 'Qaioqiy Hobv Jevpljvkx Ils Njwtdgr Uphl Ymkowyzit Rkupe Esvikycjtw Flg',
          importance: 2,
          status: 'draft',
          pageviews: 2372,
        },
        {
          id: 'd4754d26-40d7-468b-afe7-ee27c4647eca',
          index: 3,
          datetime: '1979/04/11 06:23',
          author: 'Jose',
          title: 'Obvnjsdf Jianc Oixlserby Rimuvon Dbqesdro Vjavmwcv Ylofk',
          importance: 2,
          status: 'draft',
          pageviews: 4729,
        },
        {
          id: 'd4c3fc77-1073-4cf3-b0b1-a5cdd4928135',
          index: 4,
          datetime: '2023/04/22 15:05',
          author: 'Jeffrey',
          title: 'Dqlsqtvrj Krctfhcn Plje Duwrlixmq Dbrtmvpu Ggtyixvsbx Dqec Upcbgjprp',
          importance: 3,
          status: 'draft',
          pageviews: 1158,
        },
        {
          id: '044081a0-d435-4f18-84c0-f688bfaf4685',
          index: 5,
          datetime: '2018/03/03 15:37',
          author: 'John',
          title: 'Cxt Hpywpj Vvjrl Esmqnd Grxyadnp Jursycoww',
          importance: 3,
          status: 'published',
          pageviews: 4319,
        },
        {
          id: '98de4225-e84f-4063-990a-180d15df4b20',
          index: 6,
          datetime: '2007/06/03 10:49',
          author: 'Joseph',
          title: 'Ilxwgmhse Lppbrbp Qoxdqn Fvhoo Vkghs Ugiugfxv',
          importance: 2,
          status: 'draft',
          pageviews: 2710,
        },
        {
          id: 'd68e72e1-56cb-48a7-a92a-d81b878d75f4',
          index: 7,
          datetime: '2023/12/12 21:07',
          author: 'Michelle',
          title: 'Hixbsb Axesvvr Dxbgdkzt Pgkll Rgsefmbxz Kesu',
          importance: 2,
          status: 'published',
          pageviews: 2815,
        },
        {
          id: '30bed7df-9305-464d-a413-f8a509c5dad1',
          index: 8,
          datetime: '2000/12/26 07:51',
          author: 'Jessica',
          title: 'Ppj Nhezqv Nbpb Ucwhvbdm Ofe Xsu',
          importance: 3,
          status: 'published',
          pageviews: 2039,
        },
        {
          id: '22f8e94b-cf12-4c08-bf63-21f13572daca',
          index: 9,
          datetime: '1972/02/08 17:43',
          author: 'Richard',
          title: 'Yfbmtr Odwkjjpde Zmmxxlpwr Fwet Hthmm Cduy Exdupjtoj Kwblf Vwvc',
          importance: 2,
          status: 'draft',
          pageviews: 538,
        },
        {
          id: 'b1b1af52-83be-44c7-bc10-d63ccd6a9585',
          index: 10,
          datetime: '2007/02/11 04:56',
          author: 'John',
          title: 'Fdxmk Ljxaax Ofnykssh Ffpjtoogx Qhokt Mkdayllpe Diyjcssmn Ksixf Giqnmbnl Hkdsgnh',
          importance: 3,
          status: 'published',
          pageviews: 4814,
        },
      ]

      this.tableData = tableData
    },

    setDrag() {
      const $table = this.$refs.table?.$el
      const $tbody = $table?.querySelector('.el-table__body-wrapper tbody')

      Sortable.create($tbody, {
        handle: '.drag-icon',
        ghostClass: 'el-table__row--ghost',
        onEnd: evt => {
          const [targetItem] = this.tableData.splice(evt.oldIndex, 1)

          this.tableData.splice(evt.newIndex, 0, targetItem)
        },
      })
    },
  },
}
</script>

<style scoped>
.drag-table {
  padding: 20px;
}

.drag-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>

<style>
.el-table__row--ghost {
  opacity: 0.8;
  color: #fff !important;
  background-color: #42b983 !important;
}
</style>
