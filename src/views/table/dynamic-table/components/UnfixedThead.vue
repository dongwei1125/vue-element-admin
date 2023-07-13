<template>
  <div class="unfixed-thead">
    <el-checkbox-group v-model="checkbox">
      <el-checkbox v-for="item in options" :key="item.value" :label="item.value">
        {{ $t(item.label) }}
      </el-checkbox>
    </el-checkbox-group>

    <el-table :key="key" :data="tableData" border>
      <el-table-column prop="name" :label="$t('dynamicTable.fruit')" width="180" />
      <el-table-column v-for="item in thead" :key="item.value" :prop="item.value" :label="$t(item.label)">
        <template slot-scope="{ row }">{{ row[item.value] }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'UnfixedThead',
  data() {
    return {
      checkbox: ['apple', 'banana'],
      options: [
        {
          label: 'dynamicTable.apple',
          value: 'apple',
        },
        {
          label: 'dynamicTable.banana',
          value: 'banana',
        },
        {
          label: 'dynamicTable.orange',
          value: 'orange',
        },
      ],
      thead: [],
      key: 1,
      tableData: [
        {
          name: 'fruit-1',
          apple: 'apple-10',
          banana: 'banana-10',
          orange: 'orange-10',
        },
        {
          name: 'fruit-2',
          apple: 'apple-20',
          banana: 'banana-20',
          orange: 'orange-20',
        },
      ],
    }
  },
  watch: {
    checkbox: {
      handler() {
        this.generateThead()
      },
      immediate: true,
    },
  },
  methods: {
    generateThead() {
      this.thead = this.checkbox.map(value => this.options.find(item => item.value === value))
      this.key++
    },
  },
}
</script>

<style scoped>
.unfixed-thead {
  padding: 20px;
}

.el-checkbox-group {
  padding-bottom: 10px;
}
</style>
