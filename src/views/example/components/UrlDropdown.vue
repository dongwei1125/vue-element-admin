<template>
  <el-dropdown :show-timeout="100" trigger="click">
    <el-button plain>
      {{ $t('articleCreate.link') }}
      <i class="el-icon-caret-bottom el-icon--right" />
    </el-button>

    <el-dropdown-menu slot="dropdown" class="url-dropdown-menu">
      <el-form-item label-width="0px" prop="url">
        <el-input v-model="url" :placeholder="$t('articleCreate.inputLink')">
          <template slot="prepend">URL</template>
        </el-input>
      </el-form-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'UrlDropdown',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    url: {
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
.url-dropdown-menu {
  width: 400px;
  padding: 0 !important;

  .el-form-item {
    margin-bottom: 0;
  }
}
</style>
