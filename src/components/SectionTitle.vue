<template>
  <div class="section-title__container">
    <h2 class="section-title__text">{{ text }}</h2>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    text: String
  }
}

</script>

<style scoped>
.section-title__container {
  background: var(--branco-fundo);
  display: flex;
  justify-content: center;
}

.section-title__text {
  font-family: var(--main-font);
  color: var(--yellow-default);
  font-weight: bold;
  font-size: 18px;
  padding: 1em 0 .6em 0;
}

@media screen and (min-width: 1024px) {
  .section-title__text {
    font-size: 26px;
  }
}
</style>