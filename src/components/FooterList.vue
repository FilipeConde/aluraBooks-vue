<template>
  <div class="container" :listData="listData">
    <h3 class="list-title">{{ listData.listName }}</h3>
    <ul class="list-wrapper">
      <li class="list-item" v-for="item in listData.list" :key="item.name">
        <img :src="item.iconPath" alt="" class="list-item__img">
        <a href="#" class="list_item__link">{{ item.name }}</a>
      </li>
    </ul>
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