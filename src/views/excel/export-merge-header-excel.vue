<template>
  <div class="export-merge-header-excel">
    <div class="export-merge-header-excel-header">
      <el-input
        v-model="bookName"
        prefix-icon="el-icon-document"
        :placeholder="$t('exportMergeHeaderExcelPage.inputName')"
      />

      <el-button type="primary" icon="el-icon-document" @click="handleDomExport">
        {{ $t('exportMergeHeaderExcelPage.domExport') }}
      </el-button>

      <el-button type="primary" icon="el-icon-document" @click="handleDataExport">
        {{ $t('exportMergeHeaderExcelPage.dataExport') }}
      </el-button>
    </div>

    <el-table ref="table" :data="tableData" border highlight-current-row>
      <el-table-column
        :label="$t('exportMergeHeaderExcelPage.index')"
        prop="index"
        align="center"
        width="80px"
      />
      <el-table-column
        :label="$t('exportMergeHeaderExcelPage.name')"
        prop="name"
        align="center"
        width="120px"
      />
      <el-table-column
        :label="$t('exportMergeHeaderExcelPage.gender')"
        prop="gender"
        align="center"
        width="100px"
      />

      <el-table-column :label="$t('exportMergeHeaderExcelPage.overview')" align="center">
        <el-table-column
          :label="$t('exportMergeHeaderExcelPage.job')"
          prop="job"
          align="center"
          width="120px"
        />

        <el-table-column :label="$t('exportMergeHeaderExcelPage.project')" align="center">
          <el-table-column
            :label="$t('exportMergeHeaderExcelPage.company')"
            prop="company"
            min-wdith="160px"
          />

          <el-table-column :label="$t('exportMergeHeaderExcelPage.money')" align="center">
            <el-table-column
              :label="$t('exportMergeHeaderExcelPage.amount')"
              prop="amount"
              align="center"
              width="100px"
            />
            <el-table-column
              :label="$t('exportMergeHeaderExcelPage.profit')"
              prop="profit"
              align="center"
              width="100px"
            />
          </el-table-column>

          <el-table-column
            :label="$t('exportMergeHeaderExcelPage.field')"
            prop="field"
            align="center"
            width="100px"
          >
            <template slot-scope="{ row }">
              <el-tag>{{ row.field }}</el-tag>
            </template>
          </el-table-column>

          <el-table-column :label="$t('exportMergeHeaderExcelPage.expense')" align="center">
            <el-table-column
              :label="$t('exportMergeHeaderExcelPage.pay')"
              prop="pay"
              align="center"
              width="100px"
            />
            <el-table-column
              :label="$t('exportMergeHeaderExcelPage.otherPay')"
              prop="otherPay"
              align="center"
              width="100px"
            />
          </el-table-column>

          <el-table-column
            :label="$t('exportMergeHeaderExcelPage.duration')"
            prop="duration"
            align="center"
            width="100px"
          />
        </el-table-column>
      </el-table-column>

      <el-table-column :label="$t('exportMergeHeaderExcelPage.grade')" align="center">
        <el-table-column
          :label="$t('exportMergeHeaderExcelPage.rank')"
          prop="rank"
          align="center"
          width="100px"
        />
        <el-table-column
          :label="$t('exportMergeHeaderExcelPage.education')"
          prop="education"
          align="center"
          width="100px"
        />
      </el-table-column>

      <el-table-column :label="$t('exportMergeHeaderExcelPage.address')" prop="address" width="140px" />
    </el-table>
  </div>
</template>

<script>
import { tableToExcel, listToExcel } from '@/utils/export2excel'

export default {
  name: 'ExportMergeHeaderExcel',
  data() {
    return {
      tableData: [],
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
          name: '项羽',
          gender: '男',
          job: '项目经理',
          company: '项目有限公司',
          amount: '1000W',
          profit: '100W',
          field: '建筑',
          pay: '100W',
          otherPay: '10W',
          duration: '5年',
          education: '本科',
          rank: 'P2',
          address: '重庆市万州区',
        },
        {
          index: 2,
          name: '虞姬',
          gender: '女',
          job: '数据分析师',
          company: '大数据分析公司',
          amount: '1200W',
          profit: '120W',
          field: '文化',
          pay: '7W',
          otherPay: '11W',
          duration: '6年',
          education: '大专',
          rank: 'P3',
          address: '四川省成都市',
        },
        {
          index: 3,
          name: '关羽',
          gender: '男',
          job: '行政助理',
          company: '马儿集团',
          amount: '800W',
          profit: '80W',
          field: '运输',
          pay: '400W',
          otherPay: '200W',
          duration: '7年',
          education: '本科',
          rank: 'P4',
          address: '甘肃省兰州市',
        },
        {
          index: 4,
          name: '赵云',
          gender: '男',
          job: '会计师',
          company: '计算器有限公司',
          amount: '100W',
          profit: '10W',
          field: '服务',
          pay: '30W',
          otherPay: '2W',
          duration: '8年',
          education: '本科',
          rank: 'P3',
          address: '上海市虹口区',
        },
        {
          index: 5,
          name: '孙尚香',
          gender: '女',
          job: '研发',
          company: '弓箭研发有限公司',
          amount: '200W',
          profit: '20W',
          field: '制造',
          pay: '5W',
          otherPay: '1W',
          duration: '9年',
          education: '本科',
          rank: 'P1',
          address: '云南省昆明市',
        },
        {
          index: 6,
          name: '马超',
          gender: '男',
          job: '销售',
          company: '长矛制造有限公司',
          amount: '300W',
          profit: '30W',
          field: '制造',
          pay: '7W',
          otherPay: '2W',
          duration: '3年',
          education: '本科',
          rank: 'P5',
          address: '北京市东城区',
        },
        {
          index: 7,
          name: '黄忠',
          gender: '男',
          job: '销售经理',
          company: '炮车制造有限公司',
          amount: '400W',
          profit: '40W',
          field: '制造',
          pay: '20W',
          otherPay: '10W',
          duration: '4年',
          education: '硕士',
          rank: 'P6',
          address: '山东省济南市',
        },
        {
          index: 8,
          name: '甄姬',
          gender: '男',
          job: '人事助理',
          company: '猎头有限公司',
          amount: '500W',
          profit: '50W',
          field: '社会',
          pay: '3W',
          otherPay: '2W',
          duration: '1年',
          education: '硕士',
          rank: 'P4',
          address: '陕西省铜川市',
        },
        {
          index: 9,
          name: '小乔',
          gender: '女',
          job: '文员',
          company: '文案有限公司',
          amount: '550W',
          profit: '55W',
          field: '文化',
          pay: '50W',
          otherPay: '10W',
          duration: '11年',
          education: '硕士',
          rank: 'P2',
          address: '广州省海珠区',
        },
        {
          index: 10,
          name: '上官婉儿',
          gender: '女',
          job: '财务',
          company: '琴棋有限公司',
          amount: '2000W',
          profit: '200W',
          field: '娱乐',
          pay: '100W',
          otherPay: '50W',
          duration: '20年',
          education: '硕士',
          rank: 'P8',
          address: '河南省郑州市',
        },
      ]

      this.tableData = tableData
    },

    handleDomExport() {
      const $table = this.$refs.table?.$el

      tableToExcel({
        el: $table,
        bookName: this.bookName,
      })
    },

    handleDataExport() {
      const header = [
        {
          label: this.$t('exportMergeHeaderExcelPage.index'),
          prop: 'index',
        },
        {
          label: this.$t('exportMergeHeaderExcelPage.name'),
          prop: 'name',
        },
        {
          label: this.$t('exportMergeHeaderExcelPage.gender'),
          prop: 'gender',
        },
        {
          label: this.$t('exportMergeHeaderExcelPage.overview'),
          children: [
            {
              label: this.$t('exportMergeHeaderExcelPage.job'),
              prop: 'job',
            },
            {
              label: this.$t('exportMergeHeaderExcelPage.project'),
              children: [
                {
                  label: this.$t('exportMergeHeaderExcelPage.company'),
                  prop: 'company',
                },
                {
                  label: this.$t('exportMergeHeaderExcelPage.money'),
                  children: [
                    {
                      label: this.$t('exportMergeHeaderExcelPage.amount'),
                      prop: 'amount',
                    },
                    {
                      label: this.$t('exportMergeHeaderExcelPage.profit'),
                      prop: 'profit',
                    },
                  ],
                },
                {
                  label: this.$t('exportMergeHeaderExcelPage.field'),
                  prop: 'field',
                },
                {
                  label: this.$t('exportMergeHeaderExcelPage.expense'),
                  children: [
                    {
                      label: this.$t('exportMergeHeaderExcelPage.pay'),
                      prop: 'pay',
                    },
                    {
                      label: this.$t('exportMergeHeaderExcelPage.otherPay'),
                      prop: 'otherPay',
                    },
                  ],
                },
                {
                  label: this.$t('exportMergeHeaderExcelPage.duration'),
                  prop: 'duration',
                },
              ],
            },
          ],
        },
        {
          label: this.$t('exportMergeHeaderExcelPage.grade'),
          children: [
            {
              label: this.$t('exportMergeHeaderExcelPage.rank'),
              prop: 'rank',
            },
            {
              label: this.$t('exportMergeHeaderExcelPage.education'),
              prop: 'education',
            },
          ],
        },
        {
          label: this.$t('exportMergeHeaderExcelPage.address'),
          prop: 'address',
        },
      ]

      listToExcel({
        header,
        data: this.tableData,
        bookName: this.bookName,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.export-merge-header-excel {
  padding: 20px;
}

.export-merge-header-excel-header {
  margin-bottom: 20px;

  .el-input {
    width: 350px;
  }

  .el-button {
    margin-left: 20px;
  }
}
</style>
