export default {
  data() {
    return {
      $_scrollHandler: null,
    }
  },
  mounted() {
    this.$_scrollHandler = this.scroll

    this.addEventListener()
  },
  beforeDestroy() {
    this.removeEventListener()
  },
  methods: {
    addEventListener() {
      window.addEventListener('scroll', this.$_scrollHandler)
    },

    removeEventListener() {
      window.removeEventListener('scroll', this.$_scrollHandler)
    },
  },
}
