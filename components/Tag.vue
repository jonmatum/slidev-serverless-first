<template>
  <span class="inline-block bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full mr-2 mb-2">
    #{{ label }}
  </span>
</template>

<script setup>
defineProps({
  label: String
})
</script>