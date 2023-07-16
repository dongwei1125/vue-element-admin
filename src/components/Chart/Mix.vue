<template>
  <div :id="id" ref="chart" :class="className" :style="{ height, width }" />
</template>

<script>
import * as echarts from 'echarts'
import resize from './mixins/resize'

export default {
  name: 'MixChart',
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
        backgroundColor: '#344b58',
        title: {
          x: '20',
          top: '20',
          textStyle: {
            color: '#fff',
            fontSize: '22',
          },
          subtextStyle: {
            color: '#90979c',
            fontSize: '16',
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            textStyle: {
              color: '#fff',
            },
          },
        },
        grid: {
          left: '5%',
          right: '5%',
          borderWidth: 0,
          top: 150,
          bottom: 95,
          textStyle: {
            color: '#fff',
          },
        },
        legend: {
          x: '5%',
          top: '10%',
          textStyle: {
            color: '#90979c',
          },
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: '#90979c',
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitArea: {
              show: false,
            },
            axisLabel: {
              interval: 0,
            },
            data: x,
          },
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: '#90979c',
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
            },
            splitArea: {
              show: false,
            },
          },
        ],
        dataZoom: [
          {
            show: true,
            height: 30,
            xAxisIndex: [0],
            bottom: 30,
            start: 10,
            end: 80,
            handleIcon:
              'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
              color: '#d3dee5',
            },
            textStyle: {
              color: '#fff',
            },
            borderColor: '#90979c',
            brushSelect: false,
          },
          {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 35,
          },
        ],
        series: [
          {
            type: 'bar',
            stack: 'total',
            barMaxWidth: 35,
            barGap: '10%',
            itemStyle: {
              normal: {
                color: 'rgba(255,144,128,1)',
                label: {
                  show: true,
                  textStyle: {
                    color: '#fff',
                  },
                  position: 'insideTop',
                  formatter(p) {
                    return p.value > 0 ? p.value : ''
                  },
                },
              },
            },
            data: y1,
          },
          {
            type: 'bar',
            stack: 'total',
            itemStyle: {
              normal: {
                color: 'rgba(0,191,183,1)',
                barBorderRadius: 0,
                label: {
                  show: true,
                  position: 'top',
                  formatter(p) {
                    return p.value > 0 ? p.value : ''
                  },
                },
              },
            },
            data: y2,
          },
          {
            type: 'line',
            stack: 'total',
            symbolSize: 10,
            symbol: 'circle',
            itemStyle: {
              normal: {
                color: 'rgba(252,230,48,1)',
                barBorderRadius: 0,
                label: {
                  show: true,
                  position: 'top',
                  formatter(p) {
                    return p.value > 0 ? p.value : ''
                  },
                },
              },
            },
            data: y3,
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

    setText({ title = '', legend = [] } = {}) {
      this.chart.setOption({
        title: {
          text: title,
        },
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
          {
            name: legend[2],
          },
        ],
      })
    },
  },
}
</script>
