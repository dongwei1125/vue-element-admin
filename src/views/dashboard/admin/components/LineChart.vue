<template>
  <div :id="id" ref="chart" :class="className" :style="{ height, width }" />
</template>

<script>
import * as echarts from 'echarts'
import resize from '../mixins/resize'

export default {
  name: 'LineChart',
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

    setData(x = [], y1 = [], y2 = []) {
      this.chart.setOption({
        xAxis: {
          data: x,
          boundaryGap: false,
          axisTick: {
            show: false,
          },
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
          padding: [5, 10],
        },
        yAxis: {
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            itemStyle: {
              normal: {
                color: '#FF005A',
                lineStyle: {
                  color: '#FF005A',
                  width: 2,
                },
              },
            },
            smooth: true,
            type: 'line',
            data: y1,
            animationDuration: 2000,
            animationEasing: 'cubicInOut',
          },
          {
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#3888fa',
                lineStyle: {
                  color: '#3888fa',
                  width: 2,
                },
                areaStyle: {
                  color: '#f3f8ff',
                },
              },
            },
            data: y2,
            animationDuration: 2000,
            animationEasing: 'quadraticOut',
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
        legend: {
          data: legend,
        },
        series: [
          {
            name: legend[0],
          },
          {
            name: legend[1],
          },
        ],
      })
    },
  },
}
</script>
