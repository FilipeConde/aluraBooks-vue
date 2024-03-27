<template>
  <div class="recent-topics__container">
    <h2 class="recent-topics__title">TÓPICOS VISITADOS RECENTEMENTE</h2>
    <ul class="recent-topics__list">
      <li class="recent-topics__item" v-for="item in dataArr">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import recentTopicsJson from '@/fixtures/recentTopics.json'

export default {
  data() {
    return {
      dataArr: [] as String[]
    }
  },
  created() {
    this.dataArr = recentTopicsJson
  },

}
</script>

<style scoped>
.recent-topics__container {
  text-align: center;
  font-family: var(--main-font);
  color: var(--branco-fundo);
  background: var(--azul-degrade);
}

.recent-topics__title {
  font-weight: light;
  font-size: 16px;
  padding: 1.5em;
}

.recent-topics__list {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1em;
}

.recent-topics__item {
  background: var(--yellow-default);
  font-size: 14px;
  font-weight: bold;
  padding: 1.5em 2em;
  margin: .5em;
}

@media screen and (min-width: 1024px) {

  .recent-topics__title,
  .recent-topics__item {
    font-size: 24px;
  }

  .recent-topics__list {
    margin: 0 2em;
  }
}

@media screen and (min-width: 1728px) {
  .recent-topics__list {
    padding: 0 16rem;
  }
}
</style>