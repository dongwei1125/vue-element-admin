<template>
  <div class="navbar">
    <hamburger v-show="sidebar.show" :is-active="isActive" @toggle="toggleSideBar" />

    <breadcrumb />

    <div class="navbar-menu">
      <template v-if="!isMobile">
        <header-search />
        <full-screen />
        <element-size />
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import HeaderSearch from '@/components/HeaderSearch'
import FullScreen from '@/components/FullScreen'
import ElementSize from '@/components/ElementSize'

export default {
  name: 'Navbar',
  components: { Hamburger, Breadcrumb, HeaderSearch, FullScreen, ElementSize },
  computed: {
    ...mapGetters(['app', 'sidebar']),
    isActive() {
      return this.sidebar.opened
    },
    isMobile() {
      return this.app.device === 'mobile'
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

%hover {
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
}

.navbar {
  height: $height;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.hamburger {
  float: left;
  height: 100%;
  padding: 14px 15px 0;

  @extend %hover;
}

.breadcrumb {
  float: left;
  height: 100%;
  padding-top: 18px;
  margin-left: 15px;
}

.navbar-menu {
  float: right;
  line-height: $height;
  color: #5a5e66;
  font-size: 18px;
}

.header-search {
  padding: 0 8px;

  ::v-deep .el-select {
    vertical-align: bottom;
  }

  &.header-search--expand {
    background-color: unset;
  }

  @extend %hover;
}

.full-screen {
  padding: 0 8px;

  @extend %hover;
}

.element-size {
  ::v-deep .el-dropdown > div {
    padding: 0 8px;
    font-size: 18px;

    @extend %hover;
  }
}
</style>
