<template>
  <header class="header">
    <div class="container">
      <span class="header__menu-icon"></span>
      <img src="./icons/Logo.svg" alt="" class="header__logo">
    </div>
    <div class="container">
      <a href="#" class="header__link">
        <img src="./icons/Favoritos.svg" alt="" class="header__icon">
      </a>
      <a href="#" class="header__link">
        <img src="./icons/Compras.svg" alt="" class="header__icon">
      </a>
      <a href="#" class="header__link">
        <img src="./icons/Usuário.svg" alt="" class="header__icon">
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header {
  background: var(--branco-fundo);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5em;
}

.header__menu-icon {
  background-image: url("./icons/Menu.svg");
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
  padding: 0 .2em;
  margin: 0 .6em;
}

.container {
  display: flex;
  align-items: center;
  padding: 0 .5em;
}

.header__logo {
  margin: 0 1em;
}
</style>