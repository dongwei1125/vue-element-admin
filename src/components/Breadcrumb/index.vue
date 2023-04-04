<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <transition-group name="fade">
        <el-breadcrumb-item v-for="(route, index) in matchedRoutes" :key="route.path">
          <span v-if="index === matchedRoutes.length - 1">{{ route.meta.title }}</span>
          <a v-else>{{ route.meta.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      matchedRoutes: [],
    }
  },
  watch: {
    $route: {
      handler() {
        this.getBreadcrumb()
      },
      immediate: true,
    },
  },
  methods: {
    getBreadcrumb() {
      this.matchedRoutes = this.$route.matched.filter(route => route.meta?.title)
    },
  },
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;

  a {
    font-weight: 400;
  }
}

// transition
.fade-enter-active {
  transition: all 0.5s;
}

.fade-enter {
  opacity: 0;
  transform: translateX(20px);
}
</style>
