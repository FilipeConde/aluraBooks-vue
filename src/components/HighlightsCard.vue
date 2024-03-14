<template>
  <div class="card" v-for="item in dataArr" :key="item.title">
    <div class="card__description container">
      <div class="description-container">
        <h3 class="title">
          {{ item.title }}
        </h3>
        <h2 class="main-text">
          {{ item.mainText }}</h2>
        <p class="description">
          {{ item.description }}</p>
      </div>
      <img :src="item.image" alt="" class="card-image" >
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
import highlightCardsJson from '@/fixtures/highlightCards.json'
import type IHighlightsCard from './interfaces/IHighlightsCard'

export default {
  data() {
    return {
      dataArr: [] as IHighlightsCard[]
    }
  },
  created() {
    this.dataArr = highlightCardsJson
  },
}

</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background: var(--branco-fundo);
  padding: 1em;
  margin: 2em;
  border-radius: 12px;
  box-shadow: 1px 6px 10px rgba(2, 2, 2, .3);
  font-family: var(--main-font);

}

.container,
.general-buttons {
  justify-content: space-between;
  display: flex;
}

.card-image {
  align-self: flex-start;
}

.description-container {
  line-height: 1.5em;
  padding-right: 1em;
}

.title {
  font-size: 16px;
  color: var(--yellow-default);
  font-weight: bold;
}

.main-text {
  font-size: 18px;
  font-weight: bold;
  color: var(--dark-blue);
  padding: .5em 0;
}

.description {
  font-size: 14px;
}

.button-item {
  padding: .5em;
}

.main-button {
  background: var(--yellow-default);
  align-self: center;
  padding: 1em 2.2em;
  font-weight: bold;
  color: var(--branco-fundo);
  text-decoration: none;
}
</style>