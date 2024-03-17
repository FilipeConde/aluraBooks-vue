<script setup lang="ts">
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import DisplaySection from './components/DisplaySection.vue'
import RecentTopics from './components/RecentTopics.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
  <Banner />
  <DisplaySection />
  <RecentTopics />
  <Contact />
  <hr />
  <Footer />
  
</template>

<style scoped>
hr {
  background: var(--branco-fundo);
  margin: 0;
  padding: 0px;
  border-bottom: none;
}
</style>