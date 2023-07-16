<template>
  <div class="menu1-2">
    <el-alert :closable="false" title="menu 1-2" type="success">
      <router-view />
    </el-alert>
  </div>
</template>

<script>
export default {
  name: 'Menu12',
}
</script>

<style scoped>
.menu1-2 {
  padding: 20px;
}
</style>
