# Dashboard de dados da COVID-19
## Versão: 1.0 
## Status do Projeto: ✔️ Em desenvolvimento

## Tópicos
🔹 Descrição do projeto    
🔹 Funcionalidades   
🔹 Distribuição   
🔹 Pré-requisitos   
🔹 Como rodar a aplicação   
🔹 Banco de Dados   
🔹 Linguagens, dependências e libs utilizadas   
🔹 Desenvolvedores/Contribuintes   
🔹 Informações Extras   

## Descrição do projeto   
O projeto se trata de um dashboard de dados sobre a COVID-19, ele possui dados globais sobre a pandemia, obtidos atráves de uma API que utiliza dados reais do Johns Hopkins Coronavirus Resource Center.

## Funcionalidades ⚙️
Disposição dos dados de diversas formas - os dados estão dispostos em forma de gráfico, mapa, lista e cartão (quando selecionado um país em específico no mapa).   
Visualização dos dados de forma geral e específica - o usuário pode observar os dados de forma geral, de cada um dos países em uma lista ou de um país selecionado, seja por meio de escolha através da caixa de pesquisa ou selecionando o país desejado no mapa.

## Distribuição
O sistema pode ser acessado através da url https://dashboard-covid-2d74d.web.app

## Pré-requisitos ⚠️    
O único pré-requisito para um bom funcionamento do sistema é que o usuário possua conexão com a internet, visto que os dados são atualizados a cada 10 minutos, o qual corresponde ao intervalo de tempo em que a API recebe uma nova atualização dos dados.
## Como rodar a aplicação 
  Para rodar a aplicação em localhost, basta seguir os seguintes passos:
* Baixar este repositório utilizando o comando git clone e entrar na pasta dashboard_covid que será gerada
* Abrir o terminal e rodar o comando npm install (irá baixar todas as dependências utilizadas no projeto, caso não possua NodeJS instalado na máquina, basta seguir a documentação para instalação no site oficial do [NodeJS](https://nodejs.org/en/download/current))
* Ainda no terminal, rodar o comando npm run serve
  Pronto! A aplicação já estará rodando na url de localhost exibida no terminal

## Banco de Dados 🗂️
Os dados são coletados através da API [Disease.sh](https://disease.sh/docs/) que se utiliza de várias fontes de dados, entre elas, os dados fornecidos pelo Johns Hopkins Coronavirus Resource Center.

## Linguagens, dependencias e libs utilizadas 📚
* [VueJS](https://vuejs.org/)
* [Bulma](http://bulma.io/)
* [Vue Leaflet](https://github.com/vue-leaflet/Vue2Leaflet)
* [Vue Chart](https://github.com/apertureless/vue-chartjs)
* [Vue CountUp](https://github.com/xlsdg/vue-countup-v2)
* [Firebase](https://firebase.google.com/?hl=pt-br)
* [ApexCharts](https://apexcharts.com)
* [Axios](https://axios-http.com)

## Desenvolvedores/Contribuintes:

  Desenvolvimento Front-end - [Ana Laura](https://github.com/Na1au)   
  Desenvolvimento Back-end - [Gabrielle Gimenez](https://github.com/gabi-gimenez)    
  Documentação, pesquisa e análise de requisitos - [Gabriel Pereira](https://github.com/Gbrtoz)    
  Documentação, pesquisa e testes - [Icaro Iyusuka](https://github.com/IcaroIyusuka)     

## Informações extras
 No momento o projeto ainda se utiliza 100% dos dados gerados pela API, porém, após a conclusão e teste do back-end, os dados receberão um tratamento e pré-processamento para resultar em dados mais precisos.

## Licença
The MIT License (MIT)

## Copyright ©️ 2023 - Dashboard de dados da COVID-19
