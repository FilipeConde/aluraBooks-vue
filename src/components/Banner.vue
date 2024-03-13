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
  padding: 2.5em 3em 2em 3em;
  background: var(--azul-degrade);
  color: var(--branco-fundo);
  font-family: var(--main-font);
}

.banner__title {
  font-size: 18px;
  font-weight: bold;
}
.banner__text {
  padding: 1em;
  font-size: 16px;
  font-weight: 500;
}

.banner__search {
  background: transparent;
  color: var(--branco-fundo);
  border-radius: 30px;
  border: 1px solid var(--branco-fundo);
  padding: 1em;
  width: 100%;
}

.banner__search::placeholder {
  color: var(--branco-fundo);
  text-align: center;
  font-family: var(--main-font);
  font-size: 14px;
  font-weight: 400;
  background: url("../icons/Pesquisa.svg") no-repeat;
  background-position: 1em;
}
</style>