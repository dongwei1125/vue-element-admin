<template>
  <div class="navbar">
    <hamburger :is-active="isActive" animation @toggle="toggleSideBar" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Hamburger from '@/components/Hamburger'

export default {
  name: 'Navbar',
  components: { Hamburger },
  computed: {
    ...mapGetters(['sidebar']),
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
.navbar {
  height: 50px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger {
    float: left;
    height: 100%;
    padding-top: 15px;
    cursor: pointer;
  }
}
</style>
