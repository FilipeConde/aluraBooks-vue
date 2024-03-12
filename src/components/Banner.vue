<template>
  <section class="banner">
    <h1 class="banner__title"> Já sabe por onde começar?</h1>
    <p class="banner__text">Encontre em nossa estante o que precisa para seu desenvolvimento!</p>
    <input type="search" class="banner__search" placeholder="Qual será sua próxima leitura?" name="" id="">
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.banner {
  text-align: center;
  padding: 2.5em 2em 2em 2em;
  background: var(--azul-degrade);
  color: var(--branco-fundo);
}

.banner__text {
  padding: 1em 0;
}
</style>