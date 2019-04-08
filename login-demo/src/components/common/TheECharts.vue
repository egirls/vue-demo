<template>
  <div id="theEChart" :style="{width: '300px', height: '300px'}"></div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'theECharts',
  mounted  () {
    this.initCharts()
  },
  watch: {
    options: {
      handler (options) {
        this.chart.setOption(this.options)
      },
      deep: true
    }
  },
  methods: {
    initCharts () {
      this.chart = echarts.init(document.getElementById('theEChart'))
      this.setOptions()
    },
    setOptions () {
      this.chart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}

</script>
