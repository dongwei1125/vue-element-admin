<script>
export default {
  name: 'Redirect',
  created() {
    this.restoreRoute()
  },
  methods: {
    restoreRoute() {
      const { params, query } = this.$route
      const path = params.path || ''

      this.$router.replace({
        path: '/' + path,
        query,
      })
    },
  },
  render: h => h(),
}
</script>
