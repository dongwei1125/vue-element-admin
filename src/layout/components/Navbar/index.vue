<template>
  <div class="navbar">
    <hamburger v-show="sidebar.show" id="hamburger" :is-active="isActive" @toggle="toggleSideBar" />

    <breadcrumb id="breadcrumb" />

    <div class="navbar-menu">
      <template v-if="!isMobile">
        <header-search id="header-search" />
        <full-screen id="full-screen" />
        <element-size id="element-size" />
        <language />
      </template>

      <avatar />
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
import Language from '@/components/Language'
import Avatar from './Avatar.vue'

export default {
  name: 'Navbar',
  components: { Hamburger, Breadcrumb, HeaderSearch, FullScreen, ElementSize, Language, Avatar },
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
$navBarHeight: 50px;

%hover {
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
}

.navbar {
  height: $navBarHeight;
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
  padding-right: 10px;
  line-height: $navBarHeight;
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

.element-size,
.language {
  ::v-deep .el-dropdown > div {
    padding: 0 8px;
    font-size: 18px;

    @extend %hover;
  }
}

.avatar {
  ::v-deep .el-dropdown {
    vertical-align: bottom;

    > div {
      padding-left: 8px;
      padding-right: 28px;

      img {
        margin-bottom: 5px;
      }

      i {
        right: 8px;
        font-size: 12px;
      }

      @extend %hover;
    }
  }
}
</style>
