<template>
  <div class="page-permission">
    <switch-roles />
  </div>
</template>

<script>
import SwitchRoles from './components/SwitchRoles.vue'

export default {
  name: 'PagePermission',
  components: { SwitchRoles },
}
</script>

<style scoped>
.page-permission {
  padding: 20px;
}
</style>
