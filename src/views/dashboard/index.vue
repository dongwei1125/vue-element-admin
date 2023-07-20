<template>
  <div class="dashboard">
    <admin-dashboard v-if="isAdmin" />
    <user-dashboard v-else />
  </div>
</template>

<script>
import AdminDashboard from './admin'
import UserDashboard from './user'

export default {
  name: 'Dashboard',
  components: { AdminDashboard, UserDashboard },
  computed: {
    roles() {
      return this.$store.getters.roles
    },
    isAdmin() {
      return this.roles.includes('admin')
    },
  },
}
</script>

<style scoped>
.dashboard {
  height: 100%;
}
</style>
