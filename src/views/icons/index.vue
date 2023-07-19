<template>
  <div class="icons">
    <el-tabs type="border-card">
      <el-tab-pane label="Svg Icons">
        <svg-icons />
      </el-tab-pane>
      <el-tab-pane label="Element Icons">
        <element-icons />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import SvgIcons from './components/SvgIcons'
import ElementIcons from './components/ElementIcons'

export default {
  name: 'Icons',
  components: { SvgIcons, ElementIcons },
}
</script>

<style scoped>
.icons {
  padding: 20px;
}
</style>
