<template>
  <div class="drawer" :class="{ 'drawer--hidden': !visible }">
    <div class="drawer-button" @click="toggle">
      <i :class="visible ? 'el-icon-close' : 'el-icon-setting'" />
    </div>

    <div class="drawer-content">
      <slot />
    </div>

    <modal :visible="visible" @click="closeDrawer" />
  </div>
</template>

<script>
import Modal from '@/components/Modal'

export default {
  name: 'Drawer',
  components: { Modal },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggle() {
      this.$emit('update:visible', !this.visible)
    },

    closeDrawer() {
      this.$emit('update:visible', false)
    },
  },
}
</script>

<style lang="scss" scoped>
$drawerWidth: 260px;
$drawerColor: #409eff;

.drawer {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: $drawerWidth;
  transition: width 0.28s;
  z-index: 2000;
}

.drawer-button {
  position: absolute;
  left: -48px;
  top: 250px;
  width: 48px;
  height: 48px;
  background-color: $drawerColor;
  border-radius: 6px 0 0 6px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  z-index: 5;

  i {
    font-size: 24px;
    line-height: 48px;
  }
}

.drawer-content {
  position: relative;
  width: $drawerWidth;
  height: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
  z-index: 5;
}

// hidden
.drawer--hidden {
  width: 0;
}
</style>
