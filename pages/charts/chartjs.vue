<template>
  <div>
    <bar-chart v-if="showLine" :data="chartData" :options="options"></bar-chart>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  // props: ["data", "options"],
  data: () => ({
    showLine: false,

    chartData : {
      labels: ["بهار", "تابستان"],
      datasets: [
        {
          label: "داده ۱",
          backgroundColor: "#f87979",
          data: [40, 20]
        }
      ]
    },
    options : {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted() {
    this.showLine = true;
    this.renderChart(this.chartData, this.options);
  },
  asyncData() {
    // const chartData = {
    //   labels: ["بهار", "تابستان"],
    //   datasets: [
    //     {
    //       label: "داده ۱",
    //       backgroundColor: "#f87979",
    //       data: [40, 20]
    //     }
    //   ]
    // };
    // const options = {
    //   responsive: true,
    //   maintainAspectRatio: false
    // };

    // return { chartData, options };
  }
};
</script>

