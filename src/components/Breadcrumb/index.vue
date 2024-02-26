<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(route, index) in matchedRoutes" :key="route.path">
          <span v-if="route.redirect === 'noRedirect' || index === matchedRoutes.length - 1">
            {{ $t(route.meta.title) }}
          </span>
          <a v-else @click="linkTo(route)">{{ $t(route.meta.title) }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
import { pathCompile } from '@/utils/path'

export default {
  name: 'Breadcrumb',
  data() {
    return {
      matchedRoutes: [],
    }
  },
  watch: {
    $route: {
      handler(route) {
        if (route.path.startsWith('/redirect/')) return

        this.getBreadcrumb()
      },
      immediate: true,
    },
  },
  methods: {
    getBreadcrumb() {
      const matchedRoutes = this.$route.matched.filter(route => {
        const { title, breadcrumb } = route.meta || {}

        return title && breadcrumb !== false
      })

      this.matchedRoutes = matchedRoutes
    },

    linkTo(route) {
      const { path, redirect } = route

      if (redirect) {
        this.$router.push(redirect)

        return
      }

      this.$router.push(pathCompile(path, this.$route.params))
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
.breadcrumb-enter-active {
  transition: all 0.5s;
}

.breadcrumb-enter {
  opacity: 0;
  transform: translateX(20px);
}
</style>
