<template>
  <div class="sidebar-logo">
    <transition name="fade">
      <router-link v-if="collapse" key="collapse" to="/">
        <div class="sidebar-logo-icon">
          <slot name="icon" />
        </div>
      </router-link>

      <router-link v-else key="expand" to="/">
        <div class="sidebar-logo-icon">
          <slot name="icon" />
        </div>
        <h1 class="sidebar-logo-title">
          <slot name="title" />
        </h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
$logoBackgroundColor: #2b2f3a;

.sidebar-logo {
  background-color: $logoBackgroundColor;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: relative;
  z-index: 5;

  > .router-link-active {
    display: inline-block;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}

.sidebar-logo-icon {
  display: inline-block;
  width: 32px;
  height: 32px;
  vertical-align: middle;
  margin-right: 12px;

  ::v-deep img {
    width: 100%;
    height: 100%;
  }
}

.sidebar-logo-title {
  display: inline-block;
  margin: 0;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
}

// transition
.fade-enter-active {
  transition: opacity 1.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
