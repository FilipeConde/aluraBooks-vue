<template>
  <section class="display-section">
    <SectionTitle :text="'TEST'" />
    <HighlightsCard />
  </section>
</template>

<script lang="ts">

import HighlightsCard from './HighlightsCard.vue'
import SectionTitle from './SectionTitle.vue'

export default {
  components: { HighlightsCard, SectionTitle }
}

</script>


<style scoped>

</style>