<template>
  <div class="menu-container">
    <input type="checkbox" id="menu" />
    <label for="menu">
      <span class="header__menu-icon"></span>
    </label>
    <ul class="menu-list">
      <li class="title">Categorias</li>
      <li class="menu-list__item">Programação</li>
      <li class="menu-list__item">Front-end</li>
      <li class="menu-list__item">Infraestrutura</li>
      <li class="menu-list__item">Business</li>
      <li class="menu-list__item">Design e UX</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style scoped>
.menu-container {
  display: flex;
  flex-direction: column;
}

#menu,
.menu-list {
  display: none;
}

.header__menu-icon {
  background-image: url("../icons/Menu.svg");
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
  padding: 0 .2em;
  margin: 0 .6em;
}

#menu:checked~label {
  /* background: var(--dark-blue); */
  /* margin: 1em 0; */
  /* background-image: url("../icons/Menu_black_24dp.svg"); */
}

#menu:checked~.menu-list {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 69px;
  font-family: var(--main-font);
  width: 40vw;
  /* align-items: left; */
}

.menu-list__item, .title {
  /* z-index: 2; */
  background: var(--branco-fundo);
  padding: 1em;
  width: auto;
  align-items: flex-end;
  cursor: pointer;
}

.menu-list__item:hover {
  color: var(--branco-fundo);
  background: var(--azul-degrade);
}

.title {
  font-weight: bold;
  /* padding-right: 10em; */
  color: var(--yellow-default);
  cursor: auto;
  background: var(--branco-fundo);
}
</style>