import Vue from 'vue';
// import highChartsVue from 'highcharts-vue'
// import VueCharts from 'vue-chartjs'


// Vue.use(highChartsVue);
// Vue.use(VueCharts);

import { Line } from 'vue-chartjs'

Vue.component('my-line', Line.extend({
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
}))