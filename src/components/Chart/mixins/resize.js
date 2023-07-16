import { debounce } from 'lodash'

export default {
  data() {
    return {
      resizeObserver: null,
      loaded: false,
    }
  },
  mounted() {
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

      this.resizeObserver.observe(this.$refs.chart)
    },

    destroyObserver() {
      this.resizeObserver.unobserve(this.$refs.chart)

      this.resizeObserver = null
    },

    $_resizeHandler: debounce(function () {
      this.resize()
    }, 100),

    resize() {
      this.chart?.resize()
    },
  },
}
