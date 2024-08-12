<template>
  <el-dropdown :show-timeout="100" trigger="click">
    <el-button plain>
      {{ opened ? $t('articleCreate.commentOpen') : $t('articleCreate.commentClose') }}
      <i class="el-icon-caret-bottom el-icon--right" />
    </el-button>

    <el-dropdown-menu slot="dropdown" class="comment-dropdown-menu">
      <el-dropdown-item>
        <el-radio-group v-model="opened">
          <el-radio :label="true">{{ $t('articleCreate.openComment') }}</el-radio>
          <el-radio :label="false">{{ $t('articleCreate.closeComment') }}</el-radio>
        </el-radio-group>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'CommentDropdown',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    opened: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<style scoped>
.el-dropdown {
  display: inline-block;
}
</style>

<style lang="scss">
.comment-dropdown-menu {
  padding: 0 !important;

  .el-radio-group {
    padding: 10px;
  }
}
</style>
