<template>
  <div class="app-wapper">
    <sidebar />
  </div>
</template>

<script>
import sidebar from './components/sidebar'

export default {
  name: 'Layout',
  components: { sidebar },
}
</script>

<style lang="scss" scoped>
.app-wapper {
  width: 100%;
  height: 100%;
}
</style>
