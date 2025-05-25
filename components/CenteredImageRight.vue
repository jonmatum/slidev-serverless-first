<template>
  <div class="flex items-center justify-center h-full">
    <div class="grid grid-cols-2 gap-10 items-center w-4/5">
      <div>
        <h2 class="text-4xl font-extrabold mb-2 leading-tight">
          {{ title }}
        </h2>
        <p class="text-lg leading-relaxed">
          <slot />
        </p>
      </div>
      <div>
        <img :src="image" :alt="alt" class="w-full max-w-md mx-auto" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  alt: {
    type: String,
    default: ''
  }
})
</script>