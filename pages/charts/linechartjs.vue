<template>
  <div>
    <my-line v-if="showLine" :data="lineData" :options="options"></my-line>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLine: false
    };
  },
  mounted() {
    this.showLine = true; // showLine will only be set to true on the client. This keeps the DOM-tree in sync.
  },
  asyncData() {
    const lineData = {
      labels: ["بهار", "تابستان"],
      datasets: [
        {
          label: "داده ۱",
          backgroundColor: "#f87979",
          data: [40, 20]
        }
      ]
    }; // some data
    const options = { responsive: true, maintainAspectRatio: false }; // some options
    return { lineData, options };
  }
};
</script>