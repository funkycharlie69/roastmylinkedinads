<template>
  <header class="backdrop-blur-xl bg-white/90 border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
    <UiContainer>
      <nav class="flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
        <!-- Logo / Brand -->
        <NuxtLink
          to="/"
          class="flex items-center space-x-2 text-lg sm:text-xl md:text-2xl font-heading font-bold text-gray-900 tracking-tight"
          aria-label="Roast My LinkedIn Ads - Home"
        >
          <img src="/logo.png" alt="Roast My LinkedIn Ads Logo" class="h-10 w-10 mx-5"/>
          <span class="hidden sm:inline line-height-1">Roast My LinkedIn Ads</span>
          <span class="sm:hidden text-balance text-xl">Roast My LinkedIn Ads</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-10">
          <!-- <NuxtLink
            to="/"
            class="text-base text-gray-700 hover:text-primary-400 font-medium transition-all duration-200 tracking-wide"
            active-class="text-primary-400"
          >
            Home
          </NuxtLink> -->
          <NuxtLink
            to="https://www.linkedin.com/in/charlesmurillon" target="_blank" rel="noopener"
            class="text-base text-gray-700 hover:text-primary-400 font-medium transition-all duration-200 tracking-wide"
            active-class="text-primary-400"
          >
            Contact me on LinkedIn
          </NuxtLink>
        </div>

        <!-- Desktop CTA Button -->
        <div class="hidden md:flex items-center">
          <button
            class="group bg-primary-400 hover:bg-primary-500 active:bg-primary-600 text-white font-semibold px-7 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 active:scale-100"
            aria-label="Submit your LinkedIn ad for review"
          >
            Get Roasted
            <span class="inline-block ml-1 transition-transform group-hover:translate-x-0.5">→</span>
          </button>
        </div>

        <!-- Mobile: CTA + Menu Button -->
        <div class="flex md:hidden items-center gap-2">
          <button
            class="bg-primary-400 hover:bg-primary-500 active:bg-primary-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
            aria-label="Submit your LinkedIn ad for review"
          >
            Book my Audit
          </button>

          <!-- Hamburger Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
            :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="mobileMenuOpen"
          >
            <svg
              v-if="!mobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </nav>
    </UiContainer>

    <!-- Mobile Menu Dropdown -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-show="mobileMenuOpen"
        class="md:hidden border-t border-gray-200 bg-white shadow-lg"
      >
        <UiContainer>
          <nav class="py-4 space-y-1" aria-label="Mobile navigation">
            <!-- <NuxtLink
              to="/"
              @click="mobileMenuOpen = false"
              class="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 rounded-lg transition-colors"
              active-class="text-primary-400 bg-primary-50"
            >
              Home
            </NuxtLink> -->
            <NuxtLink
              to="https://www.linkedin.com/in/charlesmurillon"
              target="_blank"
              rel="noopener"
              @click="mobileMenuOpen = false"
              class="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 rounded-lg transition-colors"
            >
              Contact me on LinkedIn
            </NuxtLink>
          </nav>
        </UiContainer>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
// Mobile menu state
const mobileMenuOpen = ref(false)

// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
