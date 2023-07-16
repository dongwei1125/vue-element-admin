<template>
  <div class="main-view">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'MainView',
}
</script>

<style lang="scss" scoped>
.main-view {
  height: calc(100vh - 84px);
  position: relative;
}

// transition
.fade-leave-active,
.fade-enter-active {
  transition: all 0.5s;
}

.fade-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
