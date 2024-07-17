<template>
  <div class="upload-excel-page">
    <upload-excel :on-success="handleSuccess" :before-upload="beforeUpload" />

    <el-table :data="tableData">
      <template v-for="(header, index) in headers">
        <el-table-columns v-if="header.children?.length" :key="index" :column="header" />

        <el-table-column v-else :key="index" v-bind="header" />
      </template>
    </el-table>
  </div>
</template>

<script>
import UploadExcel from '@/components/UploadExcel'
import ElTableColumns from './ElTableColumns.vue'

export default {
  name: 'UploadExcelPage',
  components: { UploadExcel, ElTableColumns },
  data() {
    return {
      maxSize: 1, // MB
      headers: [
        {
          label: '序号',
          prop: 'index',
        },
        {
          label: '姓名',
          prop: 'name',
        },
        {
          label: '性别',
          prop: 'gender',
        },
        {
          label: '公司概况',
          children: [
            {
              label: '职位',
              prop: 'job',
            },
            {
              label: '项目',
              children: [
                {
                  label: '公司名称',
                  prop: 'company',
                },
                {
                  label: '金额',
                  children: [
                    {
                      label: '总金额',
                      prop: 'amount',
                    },
                    {
                      label: '利润',
                      prop: 'profit',
                    },
                  ],
                },
                {
                  label: '行业',
                  prop: 'field',
                },
                {
                  label: '支出',
                  children: [
                    {
                      label: '总支出',
                      prop: 'pay',
                    },
                    {
                      label: '外支出',
                      prop: 'otherPay',
                    },
                  ],
                },
                {
                  label: '项目时长',
                  prop: 'duration',
                },
              ],
            },
          ],
        },
        {
          label: '等级',
          children: [
            {
              label: '职级',
              prop: 'rank',
            },
            {
              label: '学历',
              prop: 'education',
            },
          ],
        },
        {
          label: '住址',
          prop: 'address',
        },
      ],
      tableData: [],
    }
  },
  methods: {
    beforeUpload(file) {
      if (file.size / 1024 / 1024 > this.maxSize) {
        this.$message.warning(this.$t('uploadExcelPage.outOfSize', { size: `${this.maxSize} MB` }))

        return false
      }
    },

    handleSuccess() {},
  },
}
</script>

<style lang="scss" scoped>
.upload-excel-page {
  padding: 20px;
}
</style>
