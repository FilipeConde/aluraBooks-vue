<template>
  <header class="header">
    <div class="container">
      <BtnMenu class="btn-menu" />
      <img src="../icons/Logo.svg" alt="" class="header__logo">
      <h1 class="header__title"><b class="title__bold">Alura</b>books</h1>
    </div>
    <ul class="options">
      <input type="checkbox" id="options__menu">
      <label for="options__menu">
        <li class="options__item options__item-menu">Categorias</li>
      </label>
      <ul class="menu__list">
        <li class="menu__item">Programação</li>
        <li class="menu__item">Front-end</li>
        <li class="menu__item">Infraestrutura</li>
        <li class="menu__item">Business</li>
        <li class="menu__item">Design & UX</li>
      </ul>
      <li class="options__item"><a href="#" class="options__link">Favoritos</a></li>
      <li class="options__item"><a href="#" class="options__link">Minha estante</a></li>
    </ul>
    <div class="container">
      <a href="#" class="header__link fav">
        <img src="../icons/Favoritos.svg" alt="" class="header__icon">
      </a>
      <a href="#" class="header__link">
        <img src="../icons/Compras.svg" alt="" class="header__icon">
        <p class="header__link-text">Minhas Compras</p>
      </a>
      <a href="#" class="header__link">
        <img src="../icons/Usuário.svg" alt="" class="header__icon">
        <p class="header__link-text">Meu Perfil</p>
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
.options {
  display: none;
}

.header__title {
  display: none;
}

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

.menu__list {
  display: none;
}

.header__link-text {
  display: none;
}

@media screen and (min-width: 1024px) {

  .header {
    justify-content: space-between;
  }

  .menu__list {
    background: var(--branco-fundo);
  }

  #options__menu {
    display: none;
  }

  #options__menu:checked~.menu__list {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 69px;
    font-family: var(--main-font);
  }


  .menu__item {
    background: var(--branco-fundo);
    padding: 1em;
    width: auto;
    align-items: flex-start;
    cursor: pointer;
  }

  .menu__item:hover {
    color: var(--branco-fundo);
    background: var(--azul-degrade);
  }

  .options__item {
    padding: 0 1em;
    text-transform: uppercase;
    font-family: var(--main-font);
  }

  .options__link {
    text-decoration: none;
    color: black;
  }

  .options {
    display: flex;
  }

  .btn-menu {
    display: none;
  }

  .header__title {
    display: block;
    font-family: var(--main-font);
    font-size: 30px;
  }

  .title__bold {
    font-weight: bold;
  }

  .header__link.fav {
    display: none;
  }
}

@media screen and (min-width: 1728px) {

  .header {
    justify-content: space-between;
    padding: .5em 3em;
  }

  .header__link-text {
    display: block;
    font-size: 20px;
    font-weight: 400;
  }

  .header__link {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: var(--main-font);
    color: #000;
    padding: 0 2em 0 2em;
  }

}
</style>