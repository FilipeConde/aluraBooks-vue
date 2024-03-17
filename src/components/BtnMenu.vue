<template>
  <div class="container">
    <input type="checkbox" id="menu">
      <label for="menu">
        <span class="header__menu-icon"></span>
      </label>
      <ul class="menu-list">
        <li class="menu-list__item">TESTE</li>
        <li class="menu-list__item">TESTE</li>
        <li class="menu-list__item">TESTE</li>
        <li class="menu-list__item">TESTE</li>
      </ul>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;

}
#menu, .menu-list {
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
  width: auto;
  height: auto;
  top: 100%;
  width: 60vw;
}

</style>