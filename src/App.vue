<template>
  <div class="app">

    <SearchBar @search="handleSearch" />

    <p v-if="loading">Loading...</p>
    <p v-if="error" class="error">{{ error }}</p>

    <div v-if="weather" class="panel">

      <h2>{{ location }}</h2>

      <div class="row">
        <span>Temperature</span>
        <span>{{ weather.current_weather.temperature }}°C</span>
      </div>

      <div class="row">
        <span>Wind</span>
        <span>{{ weather.current_weather.windspeed }} km/h</span>
      </div>

      <div class="row">
        <span>Feels like</span>
        <span>{{ feelsLike }}°C</span>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import SearchBar from './components/SearchBar.vue'
import { getCoordinates, getWeather } from './api/weather'

const weather = ref(null)
const location = ref('')
const loading = ref(false)
const error = ref('')

async function handleSearch(city) {
  loading.value = true
  error.value = ''
  weather.value = null

  try {
    const geo = await getCoordinates(city)

    if (!geo) {
      error.value = 'City not found'
      return
    }

    location.value = `${geo.name}, ${geo.country}`
    weather.value = await getWeather(geo.latitude, geo.longitude)

  } catch (e) {
    error.value = 'Something went wrong'
  } finally {
    loading.value = false
  }
}

/* SIMPLE FEELS LIKE (approximation) */
const feelsLike = computed(() => {
  if (!weather.value) return null

  const temp = weather.value.current_weather.temperature
  const wind = weather.value.current_weather.windspeed

  return Math.round(temp - (wind * 0.1))
})
</script>

<style scoped>
.app {
  max-width: 500px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}

.panel {
  margin-top: 20px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.row {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.error {
  color: red;
}
</style>