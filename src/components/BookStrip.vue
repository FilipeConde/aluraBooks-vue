<template>
  <div class="book-strip__container">
    <ul class="book-strip__list">
      <li class="book-strip__item" v-for="book in bookList" :key="book">
        <img :src="book" alt="" class="book-strip__image">
      </li>
    </ul>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    bookList: { type: Array<string>, required: true}
  }
}

</script>

<style scoped>

.book-strip__list {
  display: flex;
  overflow-x: scroll;
}

.book-strip__item {
  padding: 1em 1em 0 1em;
  height: 250px;
}

.book-strip__image {
  height: 90%;
}

</style>