<template>
  <div class="app-main">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AppMain',
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.app-main {
  min-height: 100%;
  margin-left: $sideBarWidth;
  transition: margin-left 0.28s;
}
</style>
