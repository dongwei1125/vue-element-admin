<template>
  <div class="drag-kanban">
    <div class="drag-kanban-header">
      <slot name="header" />
    </div>

    <draggable :list="list" v-bind="$attrs" class="drag-kanban-content">
      <div v-for="item in list" :key="item.id" class="drag-kanban-item">
        <div>{{ item.name }} {{ item.id }}</div>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'DragKanban',
  components: { draggable },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.drag-kanban {
  min-width: 300px;
  background-color: #f0f0f0;
  border-radius: 3px;
}

.drag-kanban-header {
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  text-align: center;
  background-color: #333;
  color: #fff;
  border-radius: 3px 3px 0 0;
}

.drag-kanban-content {
  min-height: 60px;
  border: 10px solid transparent;
  display: flex;
  flex-direction: column;
}

.drag-kanban-item {
  height: 64px;
  line-height: 54px;
  margin: 5px 0;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
  display: flex;

  div {
    padding: 5px 10px;
    width: 0;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: move;
  }
}

.drag-kanban {
  margin-right: 20px;
}
</style>
