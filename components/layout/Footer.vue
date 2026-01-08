<template>
  <footer class="bg-gray-900 text-gray-300 mt-auto">
    <UiContainer>
      <div class="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="md:col-span-2">
          <h3 class="text-white font-heading font-bold text-lg mb-4">
            Roast My LinkedIn Ads
          </h3>
          <p class="text-gray-400 max-w-md">
            Get brutally honest, actionable feedback on your LinkedIn advertising campaigns.
            Improve your ROI with expert reviews.
          </p>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">Links</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="https://www.linkedin.com/in/charlesmurillon" target="_blank" class="hover:text-white transition-colors">
                Contact me on LinkedIn
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms" class="hover:text-white transition-colors">
                Terms of Service
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/privacy" class="hover:text-white transition-colors">
                Privacy Policy
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
        <p>&copy; {{ currentYear }} Roast My LinkedIn Ads. All rights reserved.</p>
      </div>
    </UiContainer>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
