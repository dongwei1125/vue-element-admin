<template>
  <div :id="id" ref="chart" :class="className" :style="{ height, width }" />
</template>

<script>
import * as echarts from 'echarts'
import resize from '../mixins/resize'

export default {
  name: 'RaddarChart',
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
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        radar: {
          radius: '66%',
          center: ['50%', '42%'],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15,
            },
          },
          indicator: [
            { max: 10000 },
            { max: 20000 },
            { max: 20000 },
            { max: 20000 },
            { max: 20000 },
            { max: 20000 },
          ],
        },
        legend: {
          left: 'center',
          bottom: '10',
        },
        series: [
          {
            type: 'radar',
            symbolSize: 0,
            areaStyle: {
              normal: {
                shadowBlur: 13,
                shadowColor: 'rgba(0,0,0,.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                opacity: 1,
              },
            },
            animationDuration: 1000,
          },
        ],
      })
    },

    setIndicator(ind = []) {
      this.chart.setOption({
        radar: {
          indicator: [
            { name: ind[0] },
            { name: ind[1] },
            { name: ind[2] },
            { name: ind[3] },
            { name: ind[4] },
            { name: ind[5] },
          ],
        },
      })
    },

    setText({ legend = [], s1 = [], s2 = [], s3 = [] } = {}) {
      this.chart.setOption({
        legend: {
          data: legend,
        },
        series: [
          {
            data: [
              {
                value: s1,
                name: legend[0],
              },
              {
                value: s2,
                name: legend[1],
              },
              {
                value: s3,
                name: legend[2],
              },
            ],
          },
        ],
      })
    },
  },
}
</script>
