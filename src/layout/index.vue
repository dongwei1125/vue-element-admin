<template>
  <div class="layout">
    <sidebar />

    <div class="main">
      <navbar />

      <main-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar.vue'
import MainView from './components/MainView.vue'

export default {
  name: 'Layout',
  components: { Sidebar, Navbar, MainView },
}
</script>

<style scoped>
.layout {
  width: 100%;
  height: 100%;
}
</style>
