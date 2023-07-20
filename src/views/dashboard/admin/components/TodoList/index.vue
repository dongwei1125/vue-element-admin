<template>
  <div class="todo-list">
    <div class="todo-list-header">
      <div class="arrow" :class="{ 'is-active': isActive }" @click="isActive = !isActive">❯</div>

      <input v-model.trim="text" :placeholder="$t('dashboardPage.todo')" @keydown.enter="addTodo" />
    </div>

    <div v-show="isActive">
      <todo-list-item
        v-for="(item, index) in filterList"
        :key="index"
        :item="item"
        @select="selectTodo"
        @edit="editTodo"
        @close="closeTodo"
      />
    </div>

    <div class="todo-list-footer">
      <span>{{ activeLength }} / {{ list.length }}</span>

      <div class="btn">
        <el-button :class="{ 'is-active': done === undefined }" plain size="mini" @click="done = undefined">
          {{ $t('dashboardPage.all') }}
        </el-button>
        <el-button :class="{ 'is-active': done === false }" plain size="mini" @click="done = false">
          {{ $t('dashboardPage.active') }}
        </el-button>
        <el-button :class="{ 'is-active': done === true }" plain size="mini" @click="done = true">
          {{ $t('dashboardPage.completed') }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'

const TodoKey = 'todo'
const defaultList = [
  { text: 'star this repository', done: false },
  { text: 'fork this repository', done: false },
  { text: 'release version', done: false },
  { text: 'follow author', done: true },
  { text: 'fix bug', done: true },
]

export default {
  name: 'TodoList',
  components: { TodoListItem },
  data() {
    return {
      text: '',
      isActive: true,
      done: undefined,
      list: [],
    }
  },
  computed: {
    activeLength() {
      return this.list.filter(item => !item.done).length
    },
    filterList() {
      return this.list.filter(item => this.done === undefined || item.done === this.done)
    },
  },
  mounted() {
    this.getTodo()
  },
  methods: {
    getTodo() {
      const storage = localStorage.getItem(TodoKey)

      this.list = storage ? JSON.parse(storage) : defaultList
    },

    addTodo() {
      if (!this.text) return

      this.list.unshift({
        text: this.text,
        done: false,
      })
      this.setLocalStorage()

      this.text = ''
    },

    selectTodo(item, checked) {
      item.done = checked

      this.setLocalStorage()
    },

    editTodo(item, value) {
      item.text = value

      this.setLocalStorage()
    },

    closeTodo(item) {
      const index = this.list.findIndex(el => el === item)

      this.list.splice(index, 1)
      this.setLocalStorage()
    },

    setLocalStorage() {
      localStorage.setItem(TodoKey, JSON.stringify(this.list))
    },
  },
}
</script>

<style lang="scss" scoped>
.todo-list {
  color: #4d4d4d;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.todo-list-header {
  border-bottom: 1px solid #e6e6e6;
  background: rgba(0, 0, 0, 0.003);
  position: relative;
  cursor: default;

  input {
    width: 100%;
    padding: 10px 16px 16px 60px;
    font-size: 18px;
    line-height: 1.4em;
    border: none;
    outline: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }

  .arrow {
    position: absolute;
    left: 0;
    top: 0;
    width: 50px;
    height: 50px;
    font-size: 22px;
    color: #737373;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    transition: transform 0.28s;

    &.is-active {
      transform: rotate(90deg);
    }
  }
}

.todo-list-footer {
  padding: 10px 15px;
  height: 40px;
  border-top: 1px solid #e6e6e6;
  position: relative;

  span {
    float: left;
    font-size: 14px;
    color: #777;
  }

  .btn {
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .el-button {
    padding: 3px 7px;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 40px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2),
      0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
}
</style>
