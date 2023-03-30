import store from '@/store'

const WIDTH = 992

export default {
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestory() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  mounted() {
    this.$_resizeHandler()
  },
  methods: {
    $_isMobile() {
      const { width } = document.body.getBoundingClientRect()

      return width - 1 < WIDTH
    },

    $_resizeHandler() {
      const isMobile = this.$_isMobile()

      store.dispatch('app/updateDevice', isMobile ? 'mobile' : 'desktop')

      if (isMobile) {
        store.dispatch('app/closeSideBar')
      }
    },
  },
}
