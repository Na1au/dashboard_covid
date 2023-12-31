import axios from "axios";
/**
 * @description Constante que recebe uma instancia da biblioteca Axios, criada usando a url base do projeto
 */
const http = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://dashboard-covid-2d74d.web.app"
      : "http://localhost:8080"
});

export default {
  /**
   * Método para pegar os dados gerais sobre a COVID-19 no mundo
   * @returns {Object} objeto em json com os dados gerais sobre o COVID-19 no mundo
   */
  async getAllCases() {
    const { data } = await http.get(
      "https://disease.sh/v3/covid-19/all?yesterday=true&allowNull=true"
    );
    return data;
  },
  /**
   * Metodo para pegar os dados sobre a COVID-19 separados por país
   * @returns {Array} array em JSON com os dados de cada país sobre a COVID-19, além dos dados do país em si
   */
  async getbyCountries() {
    const { data } = await http.get(
      "https://disease.sh/v3/covid-19/countries?yesterday=true&sort=cases&allowNull=true"
    );
    return data;
  },
  /**
   * Metodo para pegar os dados sobre a COVID-19 somente dos países selecionados
   * @param {String} iso nome do país selecionado em modelo ISO
   * @returns {Array} array em JSON com os dados de cada país selecionado sobre a COVID-19, além dos dados do país em si
   */
  async getByCountry(iso) {
    const { data } = await http.get(
      "https://disease.sh/v3/covid-19/countries/" +
        iso +
        "?yesterday=true&strict=true"
    );
    return data;
  },
  /**
   * Metodo para pegar os dados sobre o número de casos, mortes e recuperados nos ultimos 30 dias
   * @returns {Object} Objeto em JSON com os dados sobre número de novos casos, mortos e recuperados em cada um dos últimos 30 dias
   */
  async getDailyCases() {
    const { data } = await http.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=30"
    );
    return data;
  },
  /**
   * Metodo para pegar os dados sobre o número diário de casos dos ultimos 30 dias no país selecionado
   * @param {String} iso nome do país selecionado em modelo ISO
   * @returns {Object} Objeto em JSON com os dados sobre os casos em cada um dos últimos 30 dias no país selecionado
   */
  async getDailyCasesByCountry(iso) {
    //Get Daily Cases in 30days on a specific Countries by iso
    const { data } = await http.get(
      "https://disease.sh/v3/covid-19/historical/" + iso + "?lastdays=30"
    );
    return data;
  }
};
