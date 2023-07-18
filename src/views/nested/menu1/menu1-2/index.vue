<template>
  <div class="menu1-2">
    <el-alert :closable="false" :title="$t('nestedPage.menu1-2')" type="success">
      <router-view />
    </el-alert>
  </div>
</template>

<script>
export default {
  name: 'Menu1-2', // eslint-disable-line
}
</script>

<style scoped>
.menu1-2 {
  padding: 20px;
}
</style>
