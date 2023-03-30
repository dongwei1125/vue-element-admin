<template>
  <div>
    <el-button type="primary" @click="displaySideBarLogo">SideBar Logo 显示隐藏</el-button>
    <el-button type="primary" @click="displaySideBar">SideBar 显示隐藏</el-button>
    <el-button type="primary" @click="toggle">SideBar 收起展开</el-button>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    displaySideBar() {
      this.$store.dispatch('app/displaySideBar', !this.$store.state.app.sidebar.show)
    },

    displaySideBarLogo() {
      this.$store.dispatch('app/displaySideBarLogo', !this.$store.state.app.sidebar.logo)
    },

    toggle() {
      this.$store.dispatch('app/toggleSideBar')
    },
  },
}
</script>
