<template>
  <footer class="footer">
    <h2 class="footer__title">Grupo Alura</h2>
    <FooterList :list-data="dataArr[0]" />
  </footer>
</template>

<script lang="ts">
import FooterList from '@/components/FooterList.vue'
import type IFooterList from '@/interfaces/IFooterList'
import footerDataJson from '@/fixtures/footerData.json'

export default {
  components: { FooterList },
  data() {
    return {
      dataArr: [] as IFooterList[]
    }
  },
  created() {
    this.dataArr = footerDataJson
  },
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