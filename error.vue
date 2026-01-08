<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <UiContainer>
      <div class="max-w-md mx-auto text-center">
        <h1 class="text-6xl font-bold text-gray-900 mb-4">
          {{ error.statusCode }}
        </h1>
        <p class="text-xl text-gray-600 mb-8">
          {{ error.message || 'An error occurred' }}
        </p>
        <NuxtLink to="/" class="btn-primary">
          Back to Home
        </NuxtLink>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()

useHead({
  title: 'Error'
})
</script>
