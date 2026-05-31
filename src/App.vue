<template>
  <div>
    <SearchBar @search="handleSearch" />
    <p style="color: #555; font-size: 14px;">{{ lastSearch }}</p>
  </div>
  <p>Test 123</p>
</template>

<script setup>
import { ref } from 'vue'
import SearchBar from './components/SearchBar.vue'

const lastSearch = ref('Type a city and press enter...')

function handleSearch(city) {
  lastSearch.value = 'You searched: ' + city
}
</script>

<style scoped>
</style>