<template>
  <div id="daily-cases chart">
    <apexchart
      ref="chart"
      width="100%"
      type="area"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import api from "@/Api";
import VueApexCharts from "vue-apexcharts";
export default {
  name: "dailycasesgraph",
  props: ["data"],
  data() {
    return {
      dailyCases: [],
      options: {
        chart: {
          toolbar: {
            show: false
          },
          id: "daily-cases"
        },
        xaxis: {}
      },
      series: []
    };
  },
  async created() {
    this.dailyCases = await api.getDailyCases();
  },
  watch: {
    dailyCases(val) {
      const casesdate = Object.getOwnPropertyNames(val.cases);
      const casestotal = Object.values(val.cases);
      const deathstotal = Object.values(val.deaths);
      const recoveredtotal = Object.values(val.recovered);
      this.$refs.chart.updateOptions({
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        tooltip: {
          theme: "dark"
        },
        colors: ["#00a4db", "#ff2323", "#00897B"],
        legend: {
          fontSize: "14px",
          fontFamily: "Space Mono",
          labels: {
            colors: "#A8B2CD"
          }
        },
        xaxis: {
          type: "datetime",
          categories: casesdate,
          labels: {
            style: {
              colors: "#A8B2CD"
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: "#A8B2CD"
            }
          }
        }
      });

      const series = [
        {
          name: "Confirmados",
          data: casestotal
        },
        {
          name: "Mortes",
          data: deathstotal
        },
        {
          name: "Recuperados",
          data: recoveredtotal
        }
      ];
      this.$refs.chart.updateSeries(series);
    },
    data(val) {
      const casesdate = Object.getOwnPropertyNames(val.cases);
      const casestotal = Object.values(val.cases);
      const deathstotal = Object.values(val.deaths);
      const recoveredtotal = Object.values(val.recovered);
      this.$refs.chart.updateOptions({
        xaxis: {
          type: "datetime",
          categories: casesdate
        }
      });
      const series = [
        {
          name: "Confirmados",
          data: casestotal
        },
        {
          name: "Mortes",
          data: deathstotal
        },
        {
          name: "Recuperados",
          data: recoveredtotal
        }
      ];
      this.$refs.chart.updateSeries(series);
    }
  },
  components: {
    apexchart: VueApexCharts
  }
};
</script>
