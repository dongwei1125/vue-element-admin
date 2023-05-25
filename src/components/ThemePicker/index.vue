<template>
  <el-color-picker
    :value="theme"
    :predefine="['#1890ff', '#f5222d', '#fa541c', '#13c2c2', '#52c41a', '#2f541b', '#722ed1']"
    class="theme-picker"
    popper-class="theme-picker-dropdown"
    @change="themeChange"
  />
</template>

<script>
import client from 'webpack-theme-color-replacer/client'
import forElementUI from 'webpack-theme-color-replacer/forElementUI'

export default {
  name: 'ThemePicker',
  computed: {
    theme() {
      return this.$store.state.app.theme
    },
  },
  methods: {
    themeChange(color) {
      const $message = this.$message({
        message: this.$t('theme.tips'),
        duration: 0,
        iconClass: 'el-icon-loading',
      })
      const options = {
        newColors: forElementUI.getElementUISeries(color),
      }

      client.changer.changeColor(options, Promise).finally(() => {
        setTimeout(() => {
          this.$store.dispatch('app/updateTheme', color)

          $message.close()
        }, 500)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.theme-picker {
  ::v-deep .el-color-picker__trigger {
    height: 36px;
    width: 36px;
  }
}
</style>

<style>
.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
</style>
