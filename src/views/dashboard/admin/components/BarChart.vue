<template>
  <div :id="id" ref="chart" :class="className" :style="{ height, width }" />
</template>

<script>
import * as echarts from 'echarts'
import resize from './mixins/resize'

export default {
  name: 'BarChart',
  mixins: [resize],
  props: {
    id: {
      type: String,
      default: 'chart',
    },
    className: {
      type: String,
      default: 'chart',
    },
    width: {
      type: String,
      default: '200px',
    },
    height: {
      type: String,
      default: '200px',
    },
  },
  data() {
    return {
      chart: null,
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.chart?.dispose()

    this.chart = null
  },
  methods: {
    init() {
      this.chart = echarts.init(this.$refs.chart)

      this.setData()
    },

    setData(x = [], y1 = [], y2 = [], y3 = []) {
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: x,
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: y1,
            animationDuration: 1000,
          },
          {
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: y2,
            animationDuration: 1000,
          },
          {
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: y3,
            animationDuration: 1000,
          },
        ],
      })
    },

    setXData(x = []) {
      this.chart.setOption({
        xAxis: [
          {
            data: x,
          },
        ],
      })
    },

    setText({ legend = [] } = {}) {
      this.chart.setOption({
        series: [
          {
            name: legend[0],
          },
          {
            name: legend[1],
          },
          {
            name: legend[2],
          },
        ],
      })
    },
  },
}
</script>
