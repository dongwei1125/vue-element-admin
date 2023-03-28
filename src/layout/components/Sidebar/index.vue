<template>
  <div :class="['sidebar', classes]">
    <logo :collapse="isCollapse">
      <img slot="icon" src="@/assets/logo.png" />
      <template slot="title">{{ title }}</template>
    </logo>

    <el-scrollbar>
      <el-menu :collapse="isCollapse" :collapse-transition="false" :default-active="activeMenu">
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" base-path="/" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'

export default {
  name: 'Sidebar',
  components: { Logo, SidebarItem },
  computed: {
    ...mapGetters(['sidebar', 'routes']),
    isCollapse() {
      return !this.sidebar.opened
    },
    hidden() {
      return !this.sidebar.show
    },
    hiddenLogo() {
      return !this.sidebar.logo
    },
    title() {
      return this.sidebar.title
    },
    classes() {
      return {
        'sidebar--collapse': this.isCollapse,
        'sidebar--hidden': this.hidden,
        'sidebar--hidden-logo': this.hiddenLogo,
      }
    },
    activeMenu() {
      const { meta, path } = this.$route

      return meta?.activeMenu || path
    },
  },
}
</script>
