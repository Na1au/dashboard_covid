<template>
  <div id="tablecases">
    <p>População: <ICountUp :endVal="parseInt(total)" /></p>
    <p>Países afetados: <ICountUp :endVal="parseInt(affected)" /></p>
    <div class="tablecases__container table-container">
      <table class="table is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>País</th>
            <th>Total de casos</th>
            <th>Recuperados</th>
            <th>Mortes</th>
          </tr>
        </thead>
        <tbody>
          <tr ref="tablecase" v-for="cases in casesbycountry" :key="cases.iso2">
            <td>
              <p class="shrink">
                <img
                  :src="cases.countryInfo.flag"
                  :alt="cases.countryInfo.iso2"
                />
                {{ cases.country }}
              </p>
            </td>
            <td><ICountUp :endVal="parseInt(cases.cases)" /></td>
            <td><ICountUp :endVal="parseInt(cases.recovered)" /></td>
            <td><ICountUp :endVal="parseInt(cases.deaths)" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
export default {
  name: "tablecases",
  props: ["casesbycountry", "total", "affected"],
  components: {
    ICountUp
  }
};
</script>
