<template>
  <div class="sidebar-logo">
    <transition name="fade">
      <router-link v-if="collapse" key="collapse" to="/">
        <div class="sidebar-logo-icon">
          <slot name="icon" />
        </div>
      </router-link>

      <router-link v-else key="expend" to="/">
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
@import '@/styles/variables.scss';

.sidebar-logo {
  background-color: $logoBackgroundColor;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  overflow: hidden;

  > .router-link-active {
    display: inline-block;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}

::v-deep .sidebar-logo-icon {
  display: inline-block;
  width: 32px;
  height: 32px;
  vertical-align: middle;
  margin-right: 12px;

  img {
    width: 100%;
    height: 100%;
  }
}

.sidebar-logo-title {
  display: inline-block;
  margin: 0;
  color: #fff;
  font-weight: 600;
  line-height: 50px;
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
