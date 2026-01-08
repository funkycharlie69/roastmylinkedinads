<template>
  <div class="min-h-screen flex flex-col">
    <LayoutHeader />

    <main class="flex-grow">
      <slot />
    </main>

    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
// Layout-level setup
</script>
