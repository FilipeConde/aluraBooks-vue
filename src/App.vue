<script setup lang="ts">
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import DisplaySection from './components/DisplaySection.vue'
import RecentTopics from './components/RecentTopics.vue'
import Contact from '@/components/Contact.vue'
</script>

<template>
  <Header />
  <Banner />
  <DisplaySection />
  <RecentTopics />
  <Contact />
  <hr />
  
</template>

<style scoped>
hr {
  /* color: var(--branco-fundo); */
  background: var(--branco-fundo);
  margin: 0;
  padding: .5em;
}
</style>