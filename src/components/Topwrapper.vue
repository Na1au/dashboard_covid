<template>
  <div class="topwrapper">
    <header class="intro">
      <h1 class="intro__title">
        {{ title }}
        <p class="intro__tagline">Dados atualizados a cada 10 minutos</p>
      </h1>
    </header>
  </div>
</template>

<script>
export default {
  name: "top",
  props: {
    title: String,
  }
};
</script>
