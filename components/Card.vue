<template>
  <div class="flex items-center justify-center h-full">
    <div class="flex flex-col w-11/12 max-w-screen-lg space-y-8">

      <!-- Title Row: Left-aligned -->
      <h1 class="flex flex-wrap items-center text-left text-4xl md:text-5xl font-extrabold leading-tight">
        <span class="bg-green-600 text-white px-4 py-1 rounded mr-4 text-5xl md:text-6xl font-bold">
          {{ number }}
        </span>
        {{ title }}
      </h1>

      <!-- Responsive Two-column layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        <!-- Left Side: Slot directly, preserving structure -->
        <div class="text-lg md:text-xl space-y-2 pl-4">
          <slot />
        </div>

        <!-- Right Side: Image -->
        <div class="flex justify-center">
          <img :src="image" :alt="alt" class="w-full max-w-xs md:max-w-md" />
        </div>
      </div>

    </div>
  </div>
<div class="fixed bottom-4 left-0 w-full text-center text-sm text-gray-500">
  Created by <a href="https://jonmatum.dev" target="_blank" class="text-green-600 font-semibold">Jonatan Mata</a>
</div>
</template>

<script setup>
defineProps({
  number: String,
  title: String,
  image: String,
  alt: {
    type: String,
    default: ''
  }
})
</script>