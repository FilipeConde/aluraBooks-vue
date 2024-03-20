<template>
  <section class="display-section" v-for="item in dataArr" :key="item.sectionTitle">
    <SectionTitle :text="item.sectionTitle" class="title" />
    <BookStrip :book-list="item.bookList" class="book-strip" />
    <HighlightsCard :item="item.card" class="highlight-card" />
  </section>
</template>

<script lang="ts">

import type IDisplaySection from '@/interfaces/IDisplaySection';
import displaySectionDataJson from '@/fixtures/displaySectionData.json'
import HighlightsCard from './HighlightsCard.vue'
import BookStrip from './BookStrip.vue';
import SectionTitle from './SectionTitle.vue'

export default {
  components: { HighlightsCard, SectionTitle, BookStrip },
  data() {
    return {
      dataArr: [] as IDisplaySection[]
    }
  },
  created() {
    this.dataArr = displaySectionDataJson
  },
}

</script>

<style scoped>

.highlight-card {
  margin-top: .5em;
}

@media screen and (min-width: 1024px) {

  .card, .highlight-card {
    width: 50%;
    margin: 2em auto;
  }

  .book-strip {
    margin: 0 8em;
  }

}
</style>