<template>
  <div class="tags-view">
    <el-scrollbar :vertical="false">
      <ul>
        <li
          v-for="i in 10"
          :key="i"
          :class="['tags-view-item', { 'is-active': i === active }]"
          @click="active = i"
        >
          <span>首页</span>
          <span class="el-icon-close"></span>
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'TagsView',
  data() {
    return {
      active: 1,
    }
  },
}
</script>

<style lang="scss" scoped>
.tags-view {
  height: 34px;
  border-bottom: 1px solid #d8dce5;
}

.tags-view-item {
  display: inline-block;
  height: 26px;
  line-height: 26px;
  border: 1px solid #d8dce5;
  color: #495060;
  background-color: #fff;
  padding: 0 8px;
  font-size: 12px;
  margin-top: 4px;
  margin-right: 5px;
  cursor: pointer;
  transition: all 0.28s;
  position: relative;

  &.is-active {
    color: #fff;
    background-color: #42b983;
    border-color: #42b983;

    &::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #fff;
      margin-right: 2px;
    }
  }

  &:first-of-type {
    margin-left: 15px;
  }

  &:last-of-type {
    margin-right: 15px;
  }
}

.el-icon-close {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  text-align: center;
  margin-left: 2px;
  vertical-align: 2px;
  transition: all 0.28s;

  &:before {
    display: inline-block;
    transform: scale(0.7);
    vertical-align: -2px;
  }

  &:hover {
    color: #fff;
    background-color: #b4bccc;
  }
}

.el-scrollbar {
  width: 100%;

  ul {
    white-space: nowrap;
  }

  ::v-deep {
    .is-horizontal {
      bottom: 0;
    }

    .el-scrollbar__wrap {
      height: 49px;
    }
  }
}
</style>
