<template>
  <div class="app-wapper">
    <sidebar />

    <app-main />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain.vue'

export default {
  name: 'Layout',
  components: { Sidebar, AppMain },
}
</script>

<style scoped>
.app-wapper {
  width: 100%;
  height: 100%;
}
</style>
