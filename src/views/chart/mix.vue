<template>
  <div class="mix-chart-page">
    <chart ref="chart" height="100%" width="100%" />
  </div>
</template>

<script>
import Chart from '@/components/Chart/Mix.vue'

export default {
  name: 'MixChartPage',
  components: { Chart },
  computed: {
    language() {
      return this.$store.state.app.language
    },
  },
  watch: {
    language() {
      this.setXData()
      this.setText()
    },
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      setTimeout(() => {
        this.setData()
        this.setXData()
        this.setText()
      }, 50)
    },

    setData() {
      const x = []
      const y1 = [709, 1917, 2455, 2610, 1719, 1433, 1544, 3285, 5208, 3372, 2484, 4078]
      const y2 = [327, 1776, 507, 1200, 800, 482, 204, 1390, 1001, 951, 381, 220]
      const y3 = [1036, 3693, 2962, 3810, 2519, 1915, 1748, 4675, 6209, 4323, 2865, 4298]

      this.$refs.chart.setData(x, y1, y2, y3)
    },

    setXData() {
      const m = this.$t('chartPage.month')

      const x = [
        `1${m}`,
        `2${m}`,
        `3${m}`,
        `4${m}`,
        `5${m}`,
        `6${m}`,
        `7${m}`,
        `8${m}`,
        `9${m}`,
        `10${m}`,
        `11${m}`,
        `12${m}`,
      ]

      this.$refs.chart.setXData(x)
    },

    setText() {
      this.$refs.chart.setText({
        title: this.$t('chartPage.mixTitle'),
        legend: [this.$t('chartPage.famale'), this.$t('chartPage.male'), this.$t('chartPage.average')],
      })
    },
  },
}
</script>

<style scoped>
.mix-chart-page {
  height: 100%;
  background-color: #344b58;
}
</style>
