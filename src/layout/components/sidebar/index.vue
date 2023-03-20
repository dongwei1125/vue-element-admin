<template>
  <div class="sidebar">
    <el-scrollbar>
      <el-menu :collapse="false" :collapse-transition="false">
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" base-path="/" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem.vue'

export default {
  name: 'Sidebar',
  components: { SidebarItem },
  data() {
    return {
      isCollapse: true,
      routes: [
        {
          path: '/',
          title: 'Dashboard',
          icon: 'el-icon-pie-chart',
        },
        {
          path: '/example',
          title: 'Example',
          icon: 'el-icon-s-help',
          children: [
            {
              path: 'table',
              title: 'Table',
              icon: 'el-icon-notebook-2',
            },
            {
              path: 'tree',
              title: 'Tree',
              icon: 'el-icon-finished',
            },
          ],
        },
        {
          path: '/form',
          title: 'Form',
          icon: 'el-icon-document-copy',
        },
        {
          path: '/nested',
          title: 'Nested',
          icon: 'el-icon-menu',
          children: [
            {
              path: 'menu1',
              title: 'Menu1',
              children: [
                {
                  path: 'menu1-1',
                  title: 'Menu1-1',
                },
                {
                  path: 'menu1-2',
                  title: 'Menu1-2',
                  children: [
                    {
                      path: 'menu1-2-1',
                      title: 'Menu1-2-1',
                    },
                    {
                      path: 'menu1-2-2',
                      title: 'Menu1-2-2',
                    },
                  ],
                },
                {
                  path: 'menu1-3',
                  title: 'Menu1-3',
                },
              ],
            },
            {
              path: 'menu2',
              title: 'Menu2',
            },
          ],
        },
        {
          path: 'external-link',
          title: 'External Link',
          icon: 'el-icon-link',
        },
      ],
    }
  },
}
</script>
