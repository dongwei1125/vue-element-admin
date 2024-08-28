export default {
  data() {
    return {
      type: 'newVisitis',
    }
  },
  computed: {
    language() {
      return this.$store.state.app.language
    },
  },
  watch: {
    language() {
      this.setLineChartXData()
      this.setLineChartText()

      this.setRaddarChartIndicator()
      this.setRaddarChartText()

      this.setPieChartText()

      this.initBarChartXData()
      this.initBarChartText()
    },
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      setTimeout(() => {
        this.initLineChart()
        this.initRaddarChart()
        this.initPieChart()
        this.initBarChart()
      }, 50)
    },

    initLineChart() {
      this.setLineChartData()
      this.setLineChartXData()
      this.setLineChartText()
    },

    setLineChartData() {
      const z = {
        newVisitis: {
          y1: [100, 120, 161, 134, 105, 160, 165],
          y2: [120, 82, 91, 154, 162, 140, 145],
        },
        messages: {
          y1: [200, 192, 120, 144, 160, 130, 140],
          y2: [180, 160, 151, 106, 145, 150, 130],
        },
        purchases: {
          y1: [80, 100, 121, 104, 105, 90, 100],
          y2: [120, 90, 100, 138, 142, 130, 130],
        },
        shoppings: {
          y1: [130, 140, 141, 142, 145, 150, 160],
          y2: [120, 82, 91, 154, 162, 140, 130],
        },
      }
      const x = []
      const { y1, y2 } = z[this.type]

      this.$refs.lineChart.setData(x, y1, y2)
    },

    setLineChartXData() {
      const x = [
        this.$t('dashboardPage.mon'),
        this.$t('dashboardPage.tue'),
        this.$t('dashboardPage.wed'),
        this.$t('dashboardPage.thu'),
        this.$t('dashboardPage.fri'),
        this.$t('dashboardPage.sat'),
        this.$t('dashboardPage.sun'),
      ]

      this.$refs.lineChart.setXData(x)
    },

    setLineChartText() {
      this.$refs.lineChart.setText({
        legend: [this.$t('dashboardPage.expected'), this.$t('dashboardPage.actual')],
      })
    },

    initRaddarChart() {
      this.setRaddarChartIndicator()
      this.setRaddarChartText()
    },

    setRaddarChartIndicator() {
      const ind = [
        this.$t('dashboardPage.sales'),
        this.$t('dashboardPage.admin'),
        this.$t('dashboardPage.it'),
        this.$t('dashboardPage.cs'),
        this.$t('dashboardPage.dev'),
        this.$t('dashboardPage.marketing'),
      ]

      this.$refs.raddarChart.setIndicator(ind)
    },

    setRaddarChartText() {
      const s1 = [5000, 7000, 12000, 11000, 15000, 14000]
      const s2 = [4000, 9000, 15000, 15000, 13000, 11000]
      const s3 = [5500, 11000, 12000, 15000, 12000, 12000]

      this.$refs.raddarChart.setText({
        legend: [this.$t('dashboardPage.ab'), this.$t('dashboardPage.es'), this.$t('dashboardPage.as')],
        s1,
        s2,
        s3,
      })
    },

    initPieChart() {
      this.setPieChartText()
    },

    setPieChartText() {
      const y = [320, 240, 149, 100, 59]

      this.$refs.pieChart.setText({
        legend: [
          this.$t('dashboardPage.industries'),
          this.$t('dashboardPage.technology'),
          this.$t('dashboardPage.forex'),
          this.$t('dashboardPage.gold'),
          this.$t('dashboardPage.forecasts'),
        ],
        seriesTitle: this.$t('dashboardPage.wwa'),
        y,
      })
    },

    initBarChart() {
      this.initBarChartData()
      this.initBarChartXData()
      this.initBarChartText()
    },

    initBarChartData() {
      const x = []
      const y1 = [79, 52, 200, 334, 390, 330, 220]
      const y2 = [80, 52, 200, 334, 390, 330, 220]
      const y3 = [30, 52, 200, 334, 390, 330, 220]

      this.$refs.barChart.setData(x, y1, y2, y3)
    },

    initBarChartXData() {
      const x = [
        this.$t('dashboardPage.mon'),
        this.$t('dashboardPage.tue'),
        this.$t('dashboardPage.wed'),
        this.$t('dashboardPage.thu'),
        this.$t('dashboardPage.fri'),
        this.$t('dashboardPage.sat'),
        this.$t('dashboardPage.sun'),
      ]

      this.$refs.barChart.setXData(x)
    },

    initBarChartText() {
      this.$refs.barChart.setText({
        legend: ['A', 'B', 'C'],
      })
    },

    onChange(type) {
      this.type = type

      this.setLineChartData()
      this.setLineChartXData()
    },
  },
}
