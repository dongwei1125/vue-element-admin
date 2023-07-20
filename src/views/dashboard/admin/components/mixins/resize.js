import { debounce } from 'lodash'

export default {
  data() {
    return {
      loaded: false,
      resizeObserver: null,
      $_resizeHandler: null,
    }
  },
  mounted() {
    this.$_resizeHandler = debounce(this.resize, 100)

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

    resize() {
      this.chart?.resize()
    },
  },
}
