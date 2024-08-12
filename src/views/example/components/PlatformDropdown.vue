<template>
  <el-dropdown :hide-on-click="false" :show-timeout="100" trigger="click">
    <el-button plain>
      {{ $t('articleCreate.platforms') }}({{ platforms.length }})
      <i class="el-icon-caret-bottom el-icon--right" />
    </el-button>

    <el-dropdown-menu slot="dropdown" class="plateform-dropdown-menu">
      <el-checkbox-group v-model="platforms">
        <el-checkbox v-for="item in platformOptions" :key="item.value" :label="item.value">
          {{ $t(item.label) }}
        </el-checkbox>
      </el-checkbox-group>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'PlatformDropdown',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      platformOptions: [
        { value: 'a', label: 'articleCreate.platformA' },
        { value: 'b', label: 'articleCreate.platformB' },
        { value: 'c', label: 'articleCreate.platformC' },
      ],
    }
  },
  computed: {
    platforms: {
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
.plateform-dropdown-menu {
  padding: 6px 0 !important;

  .el-checkbox-group {
    padding: 5px 15px;
  }
}
</style>
