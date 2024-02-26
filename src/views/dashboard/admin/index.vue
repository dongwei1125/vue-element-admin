<template>
  <div class="admin-dashboard">
    <github-corner />

    <stats-panel @change="onChange" />

    <div class="line-chart">
      <line-chart ref="lineChart" width="100%" height="350px" />
    </div>

    <el-row :gutter="32" class="content">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="item">
          <raddar-chart ref="raddarChart" width="100%" height="300px" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="item">
          <pie-chart ref="pieChart" width="100%" height="300px" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="item">
          <bar-chart ref="barChart" width="100%" height="300px" />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="8" class="footer">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="item">
          <transaction-table />
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <div class="item">
          <todo-list />
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <div class="item">
          <languages />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import chart from './chart'

import GithubCorner from '@/components/GithubCorner'
import StatsPanel from './components/StatsPanel.vue'
import LineChart from './components/LineChart.vue'
import RaddarChart from './components/RaddarChart.vue'
import PieChart from './components/PieChart.vue'
import BarChart from './components/BarChart.vue'
import TransactionTable from './components/TransactionTable.vue'
import TodoList from './components/TodoList'
import Languages from './components/Languages.vue'

export default {
  name: 'AdminDashboard',
  components: {
    GithubCorner,
    StatsPanel,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    Languages,
  },
  mixins: [chart],
}
</script>

<style lang="scss" scoped>
.admin-dashboard {
  min-height: 100%;
  padding: 32px;
  background-color: #f0f2f5;
}

::v-deep .github-corner {
  position: absolute;
  top: 0;
  right: 0;
}

.stats-panel {
  margin-top: 18px;
}

.line-chart {
  padding: 16px 16px 0px;
  margin: 32px 0;
  background-color: #fff;
}

.content .item {
  padding: 16px 16px 0;
  background-color: #fff;
}

.footer {
  margin-top: 32px;

  .item {
    background-color: #fff;
  }
}

@media (max-width: 1200px) {
  .item {
    margin-top: 32px;
  }

  .el-col:first-child .item {
    margin-top: 0;
  }
}
</style>
