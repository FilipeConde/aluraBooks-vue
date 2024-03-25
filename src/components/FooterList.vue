<template>
  <div class="container" :listData="listData">
    <p>{{ listData }}</p>
  </div>
</template>

<script lang="ts">
// import type IFooterList from '@/interfaces/IFooterList'

export default {
  props: {
    listData: {type: Object, required: true}
  }
}
</script>

<style scoped>

</style>