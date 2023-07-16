<template>
  <div class="line-chart-page">
    <chart ref="chart" height="100%" width="100%" />
  </div>
</template>

<script>
import Chart from '@/components/Chart/Line.vue'

export default {
  name: 'LineChartPage',
  components: { Chart },
  computed: {
    language() {
      return this.$store.state.app.language
    },
  },
  watch: {
    language() {
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
        this.setText()
      }, 50)
    },

    setData() {
      const x = [
        '13:00',
        '13:05',
        '13:10',
        '13:15',
        '13:20',
        '13:25',
        '13:30',
        '13:35',
        '13:40',
        '13:45',
        '13:50',
        '13:55',
      ]
      const y1 = [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
      const y2 = [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
      const y3 = [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]

      this.$refs.chart.setData(x, y1, y2, y3)
    },

    setText() {
      this.$refs.chart.setText({
        title: this.$t('chartPage.lineTitle'),
        legend: [this.$t('chartPage.cmcc'), this.$t('chartPage.ctcc'), this.$t('chartPage.cucc')],
      })
    },
  },
}
</script>

<style scoped>
.line-chart-page {
  height: 100%;
  background-color: #394056;
}
</style>
