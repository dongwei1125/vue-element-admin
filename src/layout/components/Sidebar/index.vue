<template>
  <div class="sidebar" :class="classes">
    <logo :collapse="isCollapse">
      <img slot="icon" src="@/assets/logo.png" />
      <template slot="title">{{ title }}</template>
    </logo>

    <el-scrollbar>
      <el-menu :collapse="isCollapse" :collapse-transition="false" :default-active="activeMenu">
        <sidebar-item v-for="route in compressedRoutes" :key="route.path" :item="route" base-path="/" />
      </el-menu>
    </el-scrollbar>

    <modal v-if="isMobile" :visible="!isCollapse" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { resolvePath } from '@/utils'
import resize from './mixins/resize'

import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'
import Modal from './Modal.vue'

export default {
  name: 'Sidebar',
  components: { Logo, SidebarItem, Modal },
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
    isMobile() {
      return this.device === 'mobile'
    },
    classes() {
      return {
        'sidebar-mobile': this.isMobile,
        'sidebar--collapse': this.isCollapse,
        'sidebar--hidden': this.hidden,
        'sidebar--hidden-logo': this.hiddenLogo,
        'sidebar--without-animation': this.withoutAnimation,
      }
    },
    activeMenu() {
      const { meta, path } = this.$route

      return meta?.activeMenu || path
    },
    compressedRoutes() {
      const result = []

      this.routes.forEach(route => {
        const { meta, children, path } = route

        if (!meta?.hidden && !meta?.alwaysShow && children?.length === 1) {
          const [child] = children

          if (!child.meta?.hidden && !child.children?.length) {
            result.push({
              ...child,
              path: resolvePath(path, child.path),
            })

            return
          }
        }

        result.push(route)
      })

      return result
    },
  },
}
</script>
