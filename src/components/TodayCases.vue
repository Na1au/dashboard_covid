<template>
  <div id="today-cases">
    <div class="today-cases__container container">
      <div class="columns is-desktop">
        <div class="column">
          <article class="box">
            <p class="title">Registrados hoje</p>
            <p>
              {{ Number(dataT.todayCases).toLocaleString() }}
            </p>
          </article>
        </div>
        <div class="column">
          <article class="box">
            <p class="title">Testes realizados</p>
            <p>
              {{ Number(dataT.tests).toLocaleString() }}
            </p>
          </article>
        </div>
        <div class="column">
          <article class="box">
            <p class="title">Recuperados hoje</p>
            <p>
              {{ Number(dataT.todayRecovered).toLocaleString() }}
            </p>
          </article>
        </div>
        <div class="column">
          <article class="box">
            <p class="title">Mortes hoje</p>
            <p>
              {{ Number(dataT.todayDeaths).toLocaleString() }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/Api";
export default {
  name: "todaycases",
  props: ["data"],
  data: () => ({
    dataT: []
  }),
  async created() {
    this.dataT = await api.getAllCases();
  },
  watch: {
    data(val) {
      this.dataT = val;
    }
  },
};
</script>
