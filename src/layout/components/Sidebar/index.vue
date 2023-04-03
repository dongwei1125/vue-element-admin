<template>
  <div :class="['sidebar', classes]">
    <logo :collapse="isCollapse">
      <img slot="icon" src="@/assets/logo.png" />
      <template slot="title">{{ title }}</template>
    </logo>

    <el-scrollbar>
      <el-menu :collapse="isCollapse" :collapse-transition="false" :default-active="activeMenu">
        <sidebar-item v-for="route in formattedRoutes" :key="route.path" :item="route" base-path="/" />
      </el-menu>
    </el-scrollbar>

    <div class="sidebar-mask" @click="handleClickOutside" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import resize from './mixins/resize'
import { resolvePath } from '@/utils'

import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'

export default {
  name: 'Sidebar',
  components: { Logo, SidebarItem },
  mixins: [resize],
  computed: {
    ...mapGetters(['app', 'sidebar', 'routes']),
    isCollapse() {
      return !this.sidebar.opened
    },
    hidden() {
      return !this.sidebar.show
    },
    hiddenLogo() {
      return !this.sidebar.logo
    },
    withoutAnimation() {
      return this.sidebar.withoutAnimation
    },
    title() {
      return this.sidebar.title
    },
    device() {
      return this.app.device
    },
    classes() {
      return [
        `sidebar-${this.device}`,
        {
          'sidebar--collapse': this.isCollapse,
          'sidebar--hidden': this.hidden,
          'sidebar--hidden-logo': this.hiddenLogo,
          'sidebar--without-animation': this.withoutAnimation,
        },
      ]
    },
    activeMenu() {
      const { meta, path } = this.$route

      return meta?.activeMenu || path
    },
    formattedRoutes() {
      const result = []

      this.routes.forEach(route => {
        const { meta, children, path } = route

        if (!meta?.alwaysShow && !meta?.hidden && children?.length === 1) {
          const [child] = children

          if (!child.meta?.hidden && !child.children?.length) {
            return result.push({
              ...child,
              path: resolvePath(path, child.path),
            })
          }
        }

        result.push(route)
      })

      return result
    },
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar')
    },
  },
}
</script>
