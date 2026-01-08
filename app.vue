<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Global app setup
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Roast My LinkedIn Ads` : 'Roast My LinkedIn Ads'
  }
})
</script>
