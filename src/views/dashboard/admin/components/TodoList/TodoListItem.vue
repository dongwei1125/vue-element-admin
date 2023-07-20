<template>
  <div class="todo-list-item">
    <item-checkbox :value="item.done" @change="select" />

    <div class="text">
      <el-input
        v-if="isEdit"
        ref="input"
        v-focus
        size="mini"
        :value="item.text"
        type="textarea"
        autosize
        resize="none"
        @keydown.enter.native="isEdit = false"
        @keydown.esc.native="isEdit = false"
        @input="edit"
        @blur="isEdit = false"
      />

      <span v-else :class="{ checked: item.done }" @dblclick="isEdit = true">{{ item.text }}</span>
    </div>

    <div class="close" @click="close">×</div>
  </div>
</template>

<script>
import ItemCheckbox from './ItemCheckbox.vue'

export default {
  name: 'TodoListItem',
  components: { ItemCheckbox },
  directives: {
    focus(_, __, { context }) {
      context.$nextTick(() => {
        context.$refs.input.focus()
      })
    },
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isEdit: false,
    }
  },
  methods: {
    select(checked) {
      this.$emit('select', this.item, checked)
    },

    edit(value) {
      this.$emit('edit', this.item, value)
    },

    close() {
      this.$emit('close', this.item)
    },
  },
}
</script>

<style lang="scss" scoped>
.todo-list-item {
  border-bottom: 1px solid #ededed;
  position: relative;

  &:last-child {
    border-bottom: none;
  }

  &:hover .close {
    display: inline-block;
  }
}

.item-checkbox {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.text {
  padding: 10px 60px 10px 50px;

  span {
    display: inline-block;
    width: 100%;
    font-size: 14px;
    line-height: 14px;
    font-weight: 700;
    word-break: break-all;

    &.checked {
      color: #d9d9d9;
      text-decoration: line-through;
    }
  }

  ::v-deep textarea {
    font-size: 14px;
    line-height: 14px;
    font-weight: 700;
    word-break: break-all;
  }
}

.close {
  display: none;
  position: absolute;
  top: 50%;
  right: 10px;
  height: 40px;
  width: 40px;
  transform: translateY(-50%);
  font-size: 30px;
  color: #cc9a9a;
  line-height: 40px;
  text-align: center;
  margin-top: 2px;
  transition: color 0.2s ease-out;
  cursor: pointer;

  &:hover {
    color: #af5b5e;
  }
}
</style>
