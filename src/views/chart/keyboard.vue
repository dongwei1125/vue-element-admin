<template>
  <div class="keyboard-chart-page">
    <chart ref="chart" height="100%" width="100%" />
  </div>
</template>

<script>
import Chart from '@/components/Chart/Keyboard.vue'

export default {
  name: 'KeyboardChartPage',
  components: { Chart },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      setTimeout(() => {
        const x = []
        const y1 = []
        const y2 = []

        for (var i = 0; i < 50; i++) {
          x.push(i)

          y1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
          y2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3)
        }

        this.$refs.chart.setData(x, y1, y2)
      }, 50)
    },
  },
}
</script>

<style scoped>
.keyboard-chart-page {
  height: 100%;
  background-color: #08263a;
}
</style>
