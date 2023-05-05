<template>
  <div class="navbar">
    <hamburger v-show="sidebar.show" :is-active="isActive" @toggle="toggleSideBar" />

    <breadcrumb />

    <div class="navbar-menu">
      <header-search />
      <full-screen />
    </div>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import HeaderSearch from '@/components/HeaderSearch'
import FullScreen from '@/components/FullScreen'

export default {
  name: 'Navbar',
  components: { Hamburger, Breadcrumb, HeaderSearch, FullScreen },
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
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
}

.breadcrumb {
  float: left;
  height: 100%;
  padding-top: 18px;
  margin-left: 15px;
}

.navbar-menu {
  float: right;
  height: 100%;
  line-height: $height;
}

.navbar-menu > div {
  height: 100%;
  padding: 0 8px;
  font-size: 18px;
  color: #5a5e66;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
}

.header-search--expend {
  background-color: initial !important;
}
</style>
