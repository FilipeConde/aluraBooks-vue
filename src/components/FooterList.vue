<template>
  <div class="container" :listData="listData">
    <h3 class="list-title">{{ listData.listName }}</h3>
    <ul class="list-wrapper">
      <li class="list-item" v-for="item in listData.list" :key="item.name">
        <img :src="item.iconPath" alt="" class="list-item__img">
        <a href="#" class="list-item__link">{{ item.name }}</a>
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

.container {
  font-family: var(--main-font)
}

.list-title {
  font-size: 14px;
  color: #858585;
  text-transform: uppercase;
}

.list-wrapper {
  display: flex;
  flex-direction: column;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 1em 0 0 0;
}

.list-item__link {
  font-size: 14px;
  text-decoration: none;
  color: #474646;
  padding-left: .5em;
}

</style>