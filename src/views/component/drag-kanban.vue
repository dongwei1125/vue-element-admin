<template>
  <div class="drag-kanban-page">
    <drag-kanban :list="list1" :group="group">
      <template slot="header">{{ $t('componentPage.todo') }}</template>
    </drag-kanban>

    <drag-kanban :list="list2" :group="group">
      <template slot="header">{{ $t('componentPage.working') }}</template>
    </drag-kanban>

    <drag-kanban :list="list3" :group="group">
      <template slot="header">{{ $t('componentPage.done') }}</template>
    </drag-kanban>
  </div>
</template>

<script>
import DragKanban from '@/components/DragKanban'

export default {
  name: 'DragKanbanPage',
  components: { DragKanban },
  data() {
    return {
      group: 'mission',
      list1: [
        { name: 'Mission', id: 1 },
        { name: 'Mission', id: 2 },
        { name: 'Mission', id: 3 },
        { name: 'Mission', id: 4 },
      ],
      list2: [
        { name: 'Mission', id: 5 },
        { name: 'Mission', id: 6 },
        { name: 'Mission', id: 7 },
      ],
      list3: [
        { name: 'Mission', id: 8 },
        { name: 'Mission', id: 9 },
        { name: 'Mission', id: 10 },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.drag-kanban-page {
  padding: 20px;
  display: flex;
  align-items: flex-start;
}

::v-deep {
  .drag-kanban:nth-child(1) .drag-kanban-header {
    background-color: #4a9ff9;
  }

  .drag-kanban:nth-child(2) .drag-kanban-header {
    background-color: #f9944a;
  }

  .drag-kanban:nth-child(3) .drag-kanban-header {
    background-color: #2ac06d;
  }
}
</style>
