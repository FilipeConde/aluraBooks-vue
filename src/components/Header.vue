<template>
  <header class="header">
    <div class="container">
      <BtnMenu />
      <img src="../icons/Logo.svg" alt="" class="header__logo">
    </div>
    <div class="container">
      <a href="#" class="header__link">
        <img src="../icons/Favoritos.svg" alt="" class="header__icon">
      </a>
      <a href="#" class="header__link">
        <img src="../icons/Compras.svg" alt="" class="header__icon">
      </a>
      <a href="#" class="header__link">
        <img src="../icons/Usuário.svg" alt="" class="header__icon">
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import BtnMenu from '@/components/BtnMenu.vue'

export default {
  components: { BtnMenu }
}

</script>

<style scoped>

.header {
  background: var(--branco-fundo);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5em;
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