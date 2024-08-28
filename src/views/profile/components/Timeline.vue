<template>
  <el-timeline>
    <el-timeline-item
      v-for="(item, index) of tableData"
      :key="index"
      :timestamp="item.timestamp"
      placement="top"
    >
      <el-card>
        <h4>{{ item.title }}</h4>
        <p>{{ item.content }}</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script>
export default {
  name: 'Timeline',
  data() {
    return {
      tableData: [],
    }
  },
  created() {
    this.getTableData()
  },
  methods: {
    getTableData() {
      setTimeout(() => {
        const tableData = [
          {
            timestamp: '2019/4/20',
            title: 'Update Github template',
            content: 'xxx committed 2019/4/20 20:46',
          },
          {
            timestamp: '2019/4/21',
            title: 'Update Github template',
            content: 'xxx committed 2019/4/21 20:46',
          },
          {
            timestamp: '2019/4/22',
            title: 'Build Template',
            content: 'xxx committed 2019/4/22 20:46',
          },
          {
            timestamp: '2019/4/23',
            title: 'Release New Version',
            content: 'xxx committed 2019/4/23 20:46',
          },
        ]

        this.tableData = tableData
      }, 50)
    },
  },
}
</script>
