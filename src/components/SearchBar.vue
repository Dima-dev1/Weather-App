<template>
  <div class="search-wrap">
    <input
      v-model="query"
      type="text"
      placeholder="Search any city — London, Paris, New York..."
      @keyup.enter="handleSearch"
    />
    <button @click="handleSearch" aria-label="Search">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const query = ref('')

const emit = defineEmits(['search'])

function handleSearch() {
  if (query.value.trim() === '') return
  emit('search', query.value.trim())
}
</script>

<style scoped>
.search-wrap {
  display: flex;
  align-items: center;
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 4px 4px 4px 16px;
  margin-bottom: 20px;
  transition: border-color 0.2s;
}

.search-wrap:focus-within {
  border-color: #555;
}

input {
  flex: 1;
  background: transparent;
  color: #fff;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  padding: 8px 0;
}

input::placeholder {
  color: #555;
}

button {
  background: #2a2a2a;
  border: none;
  border-radius: 8px;
  color: #888;
  padding: 8px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.2s, color 0.2s;
}

button:hover {
  background: #333;
  color: #fff;
}
</style>