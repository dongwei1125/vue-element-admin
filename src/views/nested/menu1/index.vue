<template>
  <div class="menu1">
    <el-alert :closable="false" :title="$t('nestedPage.menu1')">
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
