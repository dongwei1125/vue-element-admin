import { resolvePath } from '@/utils/path'

export default {
  methods: {
    isActive(route) {
      return route.path === this.$route.path
    },

    isAffix(tag) {
      return tag?.meta?.affix
    },

    filterAffixTags(routes = [], basePath = '') {
      const tags = []

      routes.forEach(route => {
        const tagPath = resolvePath(basePath, route.path)

        if (route.meta?.affix) {
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            meta: { ...route.meta },
          })
        }

        if (route.children?.length) {
          const childrenTags = this.filterAffixTags(route.children, tagPath)

          if (childrenTags?.length) {
            tags.push(...childrenTags)
          }
        }
      })

      return tags
    },

    initTags(routes = []) {
      const tags = this.filterAffixTags(routes)

      tags.forEach(tag => this.addTag(tag))
    },

    addTag(tag) {
      this.$store.dispatch('tagsView/addView', tag)
    },

    moveToTag(tag) {
      this.$nextTick(() => {
        this.$refs.scrollbar?.moveToTag(tag)
      })
    },

    refreshTag(tag) {
      this.$router.replace({
        path: '/redirect' + tag.fullPath,
      })
    },

    closeTag(tag) {
      this.$store.dispatch('tagsView/removeView', tag).then(() => {
        if (this.isActive(tag)) {
          this.toLastView()
        }
      })
    },

    closeOtherTags(tag) {
      this.$router.push(tag)
      this.$store.dispatch('tagsView/removeOtherViews', tag).then(() => {
        this.moveToTag(tag)
      })
    },

    closeAllTags() {
      this.$store.dispatch('tagsView/removeAllViews').then(() => {
        this.toLastView()
      })
    },

    toLastView() {
      const views = this.$store.state.tagsView.views

      if (views.length) {
        const [lastView] = views.slice(-1)

        this.$router.push(lastView)
      } else {
        const [firstRouteRecord] = this.$route.matched
        const isRootRoute = firstRouteRecord?.path === ''

        if (isRootRoute) {
          this.$router.replace({
            path: '/redirect' + this.$route.fullPath,
          })
        } else {
          this.$router.push({ path: '/' })
        }
      }
    },
  },
}
