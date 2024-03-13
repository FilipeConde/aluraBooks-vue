<template>
  <div class="card">
    <div class="card__description container">
      <div class="description-container">
        <h2 class="title">TITLE_TEST</h2>
        <h2 class="main-text">MAIN-TEXT_TEST</h2>
        <p class="description">DESCRIPTION_TEST</p>
      </div>
      <img src="../images/Angular.svg" alt="" class="card-image">
    </div>
    <div class="card__buttons container">
      <ul class="general-buttons">
        <li class="button-item">
          <a href="#" class="button-element">
            <img src="../icons/Favoritos.svg" alt="" class="button-image">
          </a>
        </li>
        <li class="button-item">
          <a href="#" class="button-element">
            <img src="../icons/Compras.svg" alt="" class="button-image">
          </a>
        </li>
      </ul>
      <a href="#" class="main-button">Saiba mais</a>
    </div>

  </div>
</template>

<script lang="ts">

</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background: var(--branco-fundo);
  padding: 1em;
  margin: 2em;
  border-radius: 12px;
  box-shadow: 10px 10px 5px rgba(2, 2, 2, .5);
  
}

.container, .general-buttons {
  justify-content: space-between;
  display: flex;
}
</style>