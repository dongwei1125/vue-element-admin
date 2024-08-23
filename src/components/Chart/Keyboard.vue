<template>
  <div :id="id" ref="chart" :class="className" :style="{ height, width }" />
</template>

<script>
import * as echarts from 'echarts'
import resize from './resize'

export default {
  name: 'KeyboardChart',
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
        backgroundColor: '#08263a',
        grid: {
          left: '5%',
          right: '5%',
        },
        xAxis: [
          {
            show: false,
            data: x,
          },
          {
            show: false,
            data: x,
          },
        ],
        visualMap: {
          show: false,
          min: 0,
          max: 50,
          dimension: 0,
          inRange: {
            color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055'],
          },
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: '#4a657a',
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#08263f',
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            type: 'bar',
            data: y2,
            z: 1,
            itemStyle: {
              normal: {
                opacity: 0.4,
                barBorderRadius: 5,
                shadowBlur: 3,
                shadowColor: '#111',
              },
            },
          },
          {
            type: 'line',
            data: y1,
            z: 2,
            showSymbol: false,
            animationDelay: 0,
            animationEasing: 'linear',
            animationDuration: 1200,
            lineStyle: {
              normal: {
                color: 'transparent',
              },
            },
            areaStyle: {
              normal: {
                color: '#08263a',
                shadowBlur: 50,
                shadowColor: '#000',
              },
            },
          },
          {
            type: 'bar',
            data: y1,
            xAxisIndex: 1,
            z: 3,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
              },
            },
          },
        ],
        animationEasing: 'elasticOut',
        animationEasingUpdate: 'elasticOut',
        animationDelay(idx) {
          return idx * 20
        },
        animationDelayUpdate(idx) {
          return idx * 20
        },
      })
    },
  },
}
</script>
