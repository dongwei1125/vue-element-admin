const MobileWidth = 992

export default {
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestory() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  watch: {
    $route() {
      if (this.isMobile && !this.isCollapse) {
        this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
      }
    },
  },
  mounted() {
    this.$_resizeHandler()
  },
  methods: {
    $_isMobile() {
      const { width } = document.body.getBoundingClientRect()

      return width - 1 < MobileWidth
    },

    $_resizeHandler() {
      const isMobile = this.$_isMobile()

      this.$store.dispatch('app/updateDevice', isMobile ? 'mobile' : 'desktop')

      if (isMobile) {
        this.$store.dispatch('app/closeSideBar', { withoutAnimation: true })
      }
    },
  },
}
