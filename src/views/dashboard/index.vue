<template>
  <div>
    <el-button type="primary" @click="toggle">切换</el-button>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    toggle() {
      this.$store.dispatch('app/toggleSideBar')
    },
  },
}
</script>
