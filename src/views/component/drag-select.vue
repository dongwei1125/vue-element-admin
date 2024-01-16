<template>
  <div class="drag-select">
    <el-select v-model="value" v-drag-select multiple :placeholder="$t('componentPage.pleaseSelect')">
      <el-option v-for="item in options" :key="item.value" :label="$t(item.label)" :value="item.value" />
    </el-select>

    <div class="drag-select-footer">
      <el-tag v-for="item of value" :key="item">{{ item }}</el-tag>
    </div>
  </div>
</template>

<script>
import dragSelect from '@/directives/drag-select'

export default {
  name: 'DragSelectPage',
  directives: { dragSelect },
  data() {
    return {
      value: ['apple', 'banana', 'orange'],
      options: [
        { label: 'componentPage.apple', value: 'apple' },
        { label: 'componentPage.banana', value: 'banana' },
        { label: 'componentPage.orange', value: 'orange' },
        { label: 'componentPage.pear', value: 'pear' },
        { label: 'componentPage.strawberry', value: 'strawberry' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.drag-select {
  padding: 20px;
}

.el-select {
  width: 50%;
}

.drag-select-footer {
  margin-top: 30px;

  .el-tag {
    margin-right: 15px;
  }
}
</style>
