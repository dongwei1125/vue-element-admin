<template>
  <el-table :data="tableData" border highlight-current-row>
    <el-table-column :label="$t('tab.index')" prop="index" align="center" width="80px" />
    <el-table-column :label="$t('tab.datetime')" prop="datetime" align="center" width="200px" />
    <el-table-column :label="$t('tab.title')" prop="title" min-width="300px" />
    <el-table-column :label="$t('tab.author')" prop="author" align="center" width="140px" />
    <el-table-column :label="$t('tab.importance')" prop="importance" width="140px">
      <template slot-scope="{ row }">
        <rate :value="row.importance" />
      </template>
    </el-table-column>
    <el-table-column :label="$t('tab.pageviews')" prop="pageviews" align="center" width="120px" />
    <el-table-column :label="$t('tab.status')" prop="status" align="center" width="110px">
      <template slot-scope="{ row }">
        <el-tag v-if="row.status === 'published'" type="success">
          {{ $t('tab.published') }}
        </el-tag>
        <el-tag v-else type="info">{{ $t('tab.draft') }}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import Rate from '@/components/Rate'

export default {
  name: 'TablePane',
  components: { Rate },
  data() {
    return {
      tableData: [],
    }
  },
  created() {
    this.emitCreate()
    this.getTableData()
  },
  methods: {
    emitCreate() {
      this.$emit('create')
    },

    getTableData() {
      setTimeout(() => {
        const tableData = [
          {
            index: 1,
            datetime: '1991/03/31 12:03',
            author: 'Brian',
            title: 'Mjlvegh Erditenbh Osvxfwiadl Delxhds Saw Pthghtxg Yfrhenryu Dthy',
            importance: 2,
            status: 'published',
            pageviews: 2454,
          },
          {
            index: 2,
            datetime: '2005/05/09 02:21',
            author: 'Ronald',
            title: 'Qaioqiy Hobv Jevpljvkx Ils Njwtdgr Uphl Ymkowyzit Rkupe Esvikycjtw Flg',
            importance: 2,
            status: 'draft',
            pageviews: 2372,
          },
          {
            index: 3,
            datetime: '1979/04/11 06:23',
            author: 'Jose',
            title: 'Obvnjsdf Jianc Oixlserby Rimuvon Dbqesdro Vjavmwcv Ylofk',
            importance: 2,
            status: 'draft',
            pageviews: 4729,
          },
          {
            index: 4,
            datetime: '2023/04/22 15:05',
            author: 'Jeffrey',
            title: 'Dqlsqtvrj Krctfhcn Plje Duwrlixmq Dbrtmvpu Ggtyixvsbx Dqec Upcbgjprp',
            importance: 3,
            status: 'draft',
            pageviews: 1158,
          },
          {
            index: 5,
            datetime: '2018/03/03 15:37',
            author: 'John',
            title: 'Cxt Hpywpj Vvjrl Esmqnd Grxyadnp Jursycoww',
            importance: 3,
            status: 'published',
            pageviews: 4319,
          },
          {
            index: 6,
            datetime: '2007/06/03 10:49',
            author: 'Joseph',
            title: 'Ilxwgmhse Lppbrbp Qoxdqn Fvhoo Vkghs Ugiugfxv',
            importance: 2,
            status: 'draft',
            pageviews: 2710,
          },
          {
            index: 7,
            datetime: '2023/12/12 21:07',
            author: 'Michelle',
            title: 'Hixbsb Axesvvr Dxbgdkzt Pgkll Rgsefmbxz Kesu',
            importance: 2,
            status: 'published',
            pageviews: 2815,
          },
          {
            index: 8,
            datetime: '2000/12/26 07:51',
            author: 'Jessica',
            title: 'Ppj Nhezqv Nbpb Ucwhvbdm Ofe Xsu',
            importance: 3,
            status: 'published',
            pageviews: 2039,
          },
          {
            index: 9,
            datetime: '1972/02/08 17:43',
            author: 'Richard',
            title: 'Yfbmtr Odwkjjpde Zmmxxlpwr Fwet Hthmm Cduy Exdupjtoj Kwblf Vwvc',
            importance: 2,
            status: 'draft',
            pageviews: 538,
          },
          {
            index: 10,
            datetime: '2007/02/11 04:56',
            author: 'John',
            title: 'Fdxmk Ljxaax Ofnykssh Ffpjtoogx Qhokt Mkdayllpe Diyjcssmn Ksixf Giqnmbnl Hkdsgnh',
            importance: 3,
            status: 'published',
            pageviews: 4814,
          },
        ]

        const numbers = this.getRandomNumbers(0, 9, 5).sort((a, b) => a - b)
        const result = numbers.reduce((array, number) => array.concat(tableData[number]), [])

        this.tableData = result
      }, 50)
    },

    getRandomNumbers(min, max, count) {
      const numbers = new Set()

      while (numbers.size < count) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min

        numbers.add(num)
      }

      return [...numbers]
    },
  },
}
</script>
