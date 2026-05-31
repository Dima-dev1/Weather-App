<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p>{{ value }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number]
})
</script>

<style scoped>
.card {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 16px;
  margin-top: 10px;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
}

h3 {
  font-size: 12px;
  opacity: 0.7;
}

p {
  font-size: 20px;
  margin-top: 6px;
  font-weight: 500;
}
</style>