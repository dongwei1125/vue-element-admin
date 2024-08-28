<template>
  <div :id="id" ref="chart" :class="className" :style="{ height, width }" />
</template>

<script>
import * as echarts from 'echarts'
import resize from '../mixins/resize'

export default {
  name: 'PieChart',
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

    setData() {
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          left: 'center',
          bottom: '10',
        },
        series: [
          {
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            animationEasing: 'cubicInOut',
            animationDuration: 1000,
          },
        ],
      })
    },

    setText({ legend = [], seriesTitle = '', y = [] } = {}) {
      this.chart.setOption({
        legend: {
          data: legend,
        },
        series: [
          {
            name: seriesTitle,
            data: [
              {
                name: legend[0],
                value: y[0],
              },
              {
                name: legend[1],
                value: y[1],
              },
              {
                name: legend[2],
                value: y[2],
              },
              {
                name: legend[3],
                value: y[3],
              },
              {
                name: legend[4],
                value: y[4],
              },
            ],
          },
        ],
      })
    },
  },
}
</script>
