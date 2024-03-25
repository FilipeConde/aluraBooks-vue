<template>
  <footer class="footer">
    <h2 class="footer__title">Grupo Alura</h2>
    <FooterList />
  </footer>
</template>

<script lang="ts">
import FooterList from '@/components/FooterList.vue'

export default {
  components: { FooterList }
}

</script>

<style scoped>
.footer {
  background: var(--branco-fundo);
}

.footer__title {
  padding: 1em 1em 1.5em 1.5em;
  font-family: var(--main-font);
}
</style>