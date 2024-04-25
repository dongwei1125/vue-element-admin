<template>
  <div class="export-selected-excel">
    <div class="export-selected-excel-header">
      <el-input
        v-model="bookName"
        prefix-icon="el-icon-document"
        :placeholder="$t('exportSelectedExcelPage.inputName')"
      />

      <el-button type="primary" icon="el-icon-document" :disabled="!selections.length" @click="handleExport">
        {{ $t('exportSelectedExcelPage.exportSelected') }}
      </el-button>
    </div>

    <el-table
      ref="table"
      :data="tableData"
      border
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" align="center" />
      <el-table-column
        :label="$t('exportSelectedExcelPage.index')"
        prop="index"
        align="center"
        width="80px"
      />
      <el-table-column :label="$t('exportSelectedExcelPage.title')" prop="title" min-width="300px" />
      <el-table-column
        :label="$t('exportSelectedExcelPage.author')"
        prop="author"
        align="center"
        width="140px"
      >
        <template slot-scope="{ row }">
          <el-tag>{{ row.author }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('exportSelectedExcelPage.pageviews')"
        prop="pageviews"
        align="center"
        width="120px"
      />
      <el-table-column
        :label="$t('exportSelectedExcelPage.datetime')"
        prop="datetime"
        align="center"
        width="200px"
      >
        <template slot-scope="{ row }">
          <i class="el-icon-time" />
          <span>{{ row.datetime }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { listToExcel } from '@/utils/export2excel'

export default {
  name: 'ExportSelectedExcel',
  data() {
    return {
      tableData: [],
      selections: [],
      bookName: '',
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
          author: 'Sandra',
          title: 'Emyoxuw Jgfjngnqj Elpwiruss Qqbeyk Vnqpjl Qodt Xyuei',
          datetime: '2009/03/13 16:33:32',
          pageviews: 3784,
        },
        {
          index: 2,
          author: 'David',
          title: 'Abhybe Xhnvqv Dadwkaiei Oxncmcqwx Ibskq Ymnwnyqc Xygdbguet',
          datetime: '1996/09/06 10:29:31',
          pageviews: 395,
        },
        {
          index: 3,
          author: 'Maria',
          title: 'Jqeuwyriu Lratpq Fmsok Qvqcewgrcz Vswp Osbnniywm Dnrivoke',
          datetime: '1971/11/16 03:08:02',
          pageviews: 1644,
        },
        {
          index: 4,
          author: 'Sarah',
          title: 'Qoqywfrf Koprq Mtpuhup Dlqluube Yrciqk Ynwx Ndetnirm Gnkhyxbep Abx',
          datetime: '2005/07/30 14:10:01',
          pageviews: 3338,
        },
        {
          index: 5,
          author: 'Joseph',
          title: 'Vdgqw Rkkj Nvmj Jnhxyx Mcceqgi Twnu Jyksakb Bsqlowwljt',
          datetime: '1990/09/06 21:17:21',
          pageviews: 4573,
        },
        {
          index: 6,
          author: 'Frank',
          title: 'Glyoblgg Fjfm Wugvu Mtpdhmyj Cdeyjsqqt Jibjdt Khagjy Bbmauzrxg Qboxfm Nqyshfoe',
          datetime: '1978/09/23 11:04:21',
          pageviews: 770,
        },
        {
          index: 7,
          author: 'Christopher',
          title: 'Gjdbqqc Tlktf Klms Gcnjzguy Jksm Vddvvi Dsi Ahihq Aonqgmj',
          datetime: '2016/10/25 09:38:14',
          pageviews: 708,
        },
        {
          index: 8,
          author: 'Lisa',
          title: 'Wycmm Zji Puxxojcgd Dvrx Enfqxif Nmxkp Ilncd',
          datetime: '2012/02/10 07:30:12',
          pageviews: 799,
        },
        {
          index: 9,
          author: 'Jessica',
          title: 'Euhqj Vjcdyubbar Halcjpk Myyoqdy Afcckbn Vchriilj Jabrlry',
          datetime: '1977/03/06 00:15:57',
          pageviews: 4538,
        },
        {
          index: 10,
          author: 'Edward',
          title: 'Luji Fvmpl Rxjxxk Firmtpo Ghh Jdbn',
          datetime: '1990/06/12 21:58:51',
          pageviews: 3234,
        },
      ]

      this.tableData = tableData
    },

    handleSelectionChange(selections) {
      this.selections = selections
    },

    handleExport() {
      const header = [
        {
          label: this.$t('exportSelectedExcelPage.index'),
          prop: 'index',
        },
        {
          label: this.$t('exportSelectedExcelPage.title'),
          prop: 'title',
        },
        {
          label: this.$t('exportSelectedExcelPage.author'),
          prop: 'author',
        },
        {
          label: this.$t('exportSelectedExcelPage.pageviews'),
          prop: 'pageviews',
        },
        {
          label: this.$t('exportSelectedExcelPage.datetime'),
          prop: 'datetime',
        },
      ]

      listToExcel({
        header,
        data: this.selections,
        bookName: `${this.bookName || Date.now()}.xlsx`,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.export-selected-excel {
  padding: 20px;
}

.export-selected-excel-header {
  margin-bottom: 20px;

  .el-input {
    width: 350px;
  }

  .el-button {
    margin-left: 20px;
  }
}

.el-icon-time {
  margin-right: 2px;
}
</style>
