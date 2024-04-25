<template>
  <div class="dnd-list">
    <div class="dnd-left-list">
      <div class="dnd-left-list-header">
        <slot name="left-header" />
      </div>

      <draggable :list="leftList" group="list" class="dnd-left-list-content">
        <div v-for="item in leftList" :key="item.id" class="dnd-list-item">
          <div>{{ item.id }}&emsp;[{{ item.author }}]&nbsp;{{ item.title }}</div>

          <div class="btn" @click="deleteLeftItem(item)">
            <i class="el-icon-delete" />
          </div>
        </div>
      </draggable>
    </div>

    <div class="dnd-right-list">
      <div class="dnd-right-list-header">
        <slot name="right-header" />
      </div>

      <draggable :list="rightList" group="list" class="dnd-right-list-content">
        <div v-for="item in rightList" :key="item.id" class="dnd-list-item" @click="addToLeft(item)">
          <div>{{ item.id }}&emsp;[{{ item.author }}]&nbsp;{{ item.title }}</div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'DndList',
  components: { draggable },
  props: {
    leftList: {
      type: Array,
      default: () => [],
    },
    rightList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    /* eslint-disable */
    deleteLeftItem(item) {
      const index = this.leftList.findIndex(el => el === item)
      const [targetItem] = this.leftList.splice(index, 1)

      this.rightList.unshift(targetItem)
    },
    /* eslint-enable */

    /* eslint-disable */
    addToLeft(item) {
      const index = this.rightList.findIndex(el => el === item)
      const [targetItem] = this.rightList.splice(index, 1)

      this.leftList.push(targetItem)
    },
    /* eslint-enable */
  },
}
</script>

<style lang="scss" scoped>
.dnd-list {
  display: flex;
}

.dnd-left-list {
  width: 49%;
  margin-right: 2%;
  display: flex;
  flex-direction: column;

  > .dnd-left-list-content {
    flex: 1;
  }
}

.dnd-right-list {
  width: 49%;
  display: flex;
  flex-direction: column;

  > .dnd-right-list-content {
    flex: 1;
  }
}

.dnd-list-item {
  font-size: 14px;
  padding: 5px 24px 5px 12px;
  margin-top: 4px;
  border: 1px solid #bfcbd9;
  transition: background-color 1s;
  position: relative;
  cursor: move;

  &:first-child {
    margin-top: 0;
  }

  &.sortable-chosen {
    background-color: #4ab7bd;
  }

  > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .btn {
    position: absolute;
    right: 0;
    top: 0;
    width: 24px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    color: #ff4949;
    cursor: pointer;
  }
}
</style>
