export default {
  data() {
    return {
      loaded: false,
      resizeObserver: null,
      $_resizeHandler: null,
    }
  },
  mounted() {
    this.$_resizeHandler = this.resize

    this.initObserver()
  },
  beforeDestroy() {
    this.destroyObserver()
  },
  methods: {
    initObserver() {
      this.resizeObserver = new ResizeObserver(v => {
        if (this.loaded) {
          this.$_resizeHandler()
        } else {
          this.loaded = true
        }
      })

      this.resizeObserver.observe(this.$el)
    },

    destroyObserver() {
      this.resizeObserver.unobserve(this.$el)

      this.resizeObserver = null
    },
  },
}
