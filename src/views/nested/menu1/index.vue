<template>
  <div class="menu1">
    <el-alert :closable="false" title="menu 1">
      <router-view />
    </el-alert>
  </div>
</template>

<script>
export default {
  name: 'Menu1',
}
</script>

<style scoped>
.menu1 {
  padding: 20px;
}
</style>
