<template>
  <div class="navbar">
    <hamburger :is-active="isActive" @toggle="toggleSideBar" />

    <breadcrumb />
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'Navbar',
  components: { Hamburger, Breadcrumb },
  computed: {
    sidebar() {
      return this.$store.getters.sidebar
    },
    isActive() {
      return this.sidebar.opened
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
  },
}
</script>

<style lang="scss" scoped>
$height: 50px;

.navbar {
  height: $height;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.hamburger {
  float: left;
  height: 100%;
  padding: 14px 15px 0;
  cursor: pointer;
}

.breadcrumb {
  float: left;
  height: 100%;
  padding-top: 18px;
  margin-left: 8px;
}
</style>
