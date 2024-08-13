<template>
  <div class="tab">
    <el-tag>{{ $t('tab.mounted', { times: 0 }) }}</el-tag>
    <el-tag type="success">{{ $t('tab.keepAlive') }}</el-tag>

    <el-tabs v-model="activeTab" type="border-card">
      <el-tab-pane v-for="tab in tabs" :key="tab.key" :label="$t(tab.label)" :name="tab.key">
        <keep-alive>
          <table-pane v-if="activeTab === tab.key" :type="tab.key" />
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TablePane from './components/TablePane.vue'

export default {
  name: 'Tab',
  components: { TablePane },
  data() {
    return {
      tabs: [
        { label: 'China', key: 'CN' },
        { label: 'USA', key: 'US' },
        { label: 'Japan', key: 'JP' },
        { label: 'Eurozone', key: 'EU' },
      ],
      activeTab: 'CN',
    }
  },
}
</script>

<style scoped>
.tab {
  padding: 20px;
}

.el-tag + .el-tag {
  margin-left: 20px;
}

.el-tabs {
  margin-top: 15px;
}
</style>
