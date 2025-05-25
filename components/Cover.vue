<template>
  <div class="bg-white px-4 md:px-12 py-12 space-y-10 flex flex-col items-center justify-start min-h-screen">
    <!-- Title Card -->
    <div
      class="bg-green-600 text-white px-6 py-6 md:px-10 md:py-8 rounded-2xl shadow-2xl text-3xl md:text-5xl font-extrabold text-center max-w-3xl w-full">
      <slot name="title">
        {{ title }}
      </slot>
    </div>

    <!-- Subtitle & Description -->
    <div class="text-base md:text-lg text-gray-800 leading-relaxed max-w-3xl text-center space-y-4">
      <template v-if="$slots.subtitle">
        <slot name="subtitle" />
      </template>
      <template v-else>
        <p class="font-semibold">{{ subtitle }}</p>
        <p>{{ description }}</p>
      </template>
    </div>

    <!-- Social Icons -->
    <div class="fixed bottom-12 right-6 flex space-x-4 text-gray-600 text-3xl">
      <a v-for="(link, index) in socialLinks" :key="index" :href="link.url" target="_blank"
         class="hover:text-green-600 transition-colors duration-300">
        <i :class="link.icon" />
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '10 Reasons to Switch to a Serverless-First Architecture'
  },
  subtitle: {
    type: String,
    default: 'Ready to scale smarter, faster, and cheaper?'
  },
  description: {
    type: String,
    default: 'Discover how a Serverless-First approach can unlock flexibility, scalability, and innovation for your business.'
  },
  socialLinks: {
    type: Array,
    default: () => ([
      { url: 'https://github.com/jonmatum', icon: 'i-carbon-logo-github' },
      { url: 'https://www.linkedin.com/in/jonatan-mata', icon: 'i-carbon-logo-linkedin' }
    ])
  }
})
</script>

<style scoped>
/* Optional: Scoped additional styling */
</style>