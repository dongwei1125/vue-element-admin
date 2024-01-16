<template>
  <div class="drag-dialog">
    <el-button type="primary" @click="open">{{ $t('componentPage.openDialog') }}</el-button>

    <el-dialog v-drag-dialog :visible.sync="visible" :title="$t('componentPage.shippingAddress')">
      <el-select v-model="value" :placeholder="$t('componentPage.pleaseSelect')">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>

      <el-table :data="tableData">
        <el-table-column prop="name" :label="$t('componentPage.name')" width="150" />
        <el-table-column prop="date" :label="$t('componentPage.date')" width="200" />
        <el-table-column prop="address" :label="$t('componentPage.address')" />
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import dragDialog from '@/directives/drag-dialog'

export default {
  name: 'DragDialogPage',
  directives: { dragDialog },
  data() {
    return {
      visible: false,
      value: '',
      options: [
        { value: 1, label: '黄金糕' },
        { value: 2, label: '双皮奶' },
        { value: 3, label: '蚵仔煎' },
        { value: 4, label: '龙须面' },
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District',
        },
        {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District',
        },
        {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District',
        },
        {
          date: '2016-05-03',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District',
        },
      ],
    }
  },
  methods: {
    open() {
      this.visible = true
    },
  },
}
</script>

<style scoped>
.drag-dialog {
  padding: 20px;
}
</style>
