<template>
  <div class="font-sans text-gray-900 antialiased selection:bg-primary-200 selection:text-primary-900">

    <!-- Hero Section - Success Message -->
    <section class="relative bg-dark-900 text-white pt-20 pb-20 md:pt-20 md:pb-20 overflow-hidden">
      <!-- Background Texture -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_50%)]"></div>

      <UiContainer class="relative z-10">
        <div class="max-w-4xl mx-auto text-center">

          <!-- Success Icon -->
          <div class="mb-8 flex justify-center">
            <div class="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
              <svg class="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>

          <!-- Main Heading -->
          <h1 class="text-6xl sm:text-4xl md:text-6xl lg:text-[70px] text-balance font-heading font-bold mb-6 leading-[1.05] tracking-tight">
            Payment <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">Confirmed!</span>
          </h1>

          <p class="text-lg sm:text-xl text-white mb-10 leading-relaxed max-w-2xl mx-auto">
            <span class="text-primary-200 font-bold">You're all set.</span> Your brutal truth is coming 48 hours after you grant me viewer access to your LinkedIn Ads account.
          </p>

          <!-- Payment Details Card -->
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/20 max-w-3xl mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-1 gap-6 text-center">
              <div>
                <p class="text-gray-400 text-sm uppercase tracking-wide mb-2">Receipt</p>
                <p class="text-white font-bold text-3xl font-heading">✓</p>
                <p class="text-gray-400 text-xs">Sent to your email</p>
              </div>
            </div>
          </div>

        </div>
      </UiContainer>
    </section>

    <!-- Next Step Section (White Background) -->
    <section class="py-16 bg-white">
      <UiContainer>
        <div class="max-w-3xl mx-auto">

          <h2 class="text-3xl md:text-5xl font-heading font-bold text-center mb-8 tracking-tight">
            Next Step: Give Me <span class="text-primary-500">Viewer Access</span>
          </h2>

          <p class="text-xl text-gray-900 text-center mb-10 leading-relaxed">
            For me to audit your account, I need <span class="text-primary-500 font-bold">Viewer access</span> to your LinkedIn Campaign Manager.
            <br><br>
            This is 100% secure - I can only <span class="underline">view</span> your data, not change anything.
          </p>

          <!-- Instructions Box -->
          <div class="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200 mb-8">
            <h3 class="text-2xl font-heading font-bold text-gray-900 mb-6 text-center">
              How to Grant Access (Takes 30 Seconds)
            </h3>

            <div class="space-y-5 max-w-2xl mx-auto">
              <div class="flex items-start gap-4">
                <span class="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center font-bold text-white text-sm">1</span>
                <p class="text-gray-700 pt-1 leading-relaxed">
                  Go to your <a href="https://www.linkedin.com/campaignmanager" target="_blank" rel="noopener" class="text-primary-500 hover:text-primary-600 underline font-semibold">LinkedIn Campaign Manager</a>
                </p>
              </div>

              <div class="flex items-start gap-4">
                <span class="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center font-bold text-white text-sm">2</span>
                <p class="text-gray-700 pt-1 leading-relaxed">
                  Click on <strong class="text-gray-900">Account Settings</strong> (left bar) → <strong class="text-gray-900">Manage Access</strong>
                </p>
              </div>

              <div class="flex items-start gap-4">
                <span class="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center font-bold text-white text-sm">3</span>
                <p class="text-gray-700 pt-1 leading-relaxed">
                  Click <strong class="text-gray-900">Add User</strong> and search for:
                  <span class="block mt-2 bg-gray-200 px-3 py-2 rounded-lg font-mono text-sm text-gray-900"><img class="h-12 rounded-full" src="/Profile-Pic.jpg">Charles Murillon</span>
                </p>
              </div>

              <div class="flex items-start gap-4">
                <span class="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center font-bold text-white text-sm">4</span>
                <p class="text-gray-700 pt-1 leading-relaxed">
                  Select <strong class="text-gray-900">Viewer</strong> as the role
                </p>
              </div>

              <div class="flex items-start gap-4">
                <span class="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center font-bold text-white text-sm">5</span>
                <p class="text-gray-700 pt-1 leading-relaxed">
                  Click <strong class="text-gray-900">Add</strong>
                </p>
              </div>

               <div class="flex items-start gap-4">
                <span class="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center font-bold text-white text-sm">6</span>
                <p class="text-gray-700 pt-1 leading-relaxed">
                  <strong class="text-gray-900">Send me an email</strong> to let me know you've granted access. LinkedIn's notification system is unreliable.<br>
                  <a
                    href="mailto:charles@capac.pro?subject=LinkedIn Ads Access Granted&body=Hi%20Charles%2C%0A%0AI%20have%20granted%20you%20viewer%20access%20to%20my%20LinkedIn%20Campaign%20Manager.%20Looking%20forward%20to%20the%20roast!"
                    class="inline-flex items-center gap-2 mt-2 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-lg"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Send Email to Charles
                  </a>

                </p>
              </div>

            </div>
          </div>

          <!-- Security Note -->
          <div class="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
            <div class="flex items-start gap-4">
              <svg class="w-7 h-7 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <div>
                <p class="font-bold text-green-900 text-lg mb-1">100% Secure</p>
                <p class="text-green-800 leading-relaxed">Viewer access means I can only see your data, not edit, pause, or change anything. You can revoke access anytime.</p>
              </div>
            </div>
          </div>

        </div>
      </UiContainer>
    </section>

    <!-- What Happens Next Section (Gray Background) -->
    <section class="py-16 bg-gray-50">
      <UiContainer>
        <div class="max-w-5xl mx-auto">

          <h2 class="text-3xl md:text-5xl font-heading font-bold text-center mb-12 tracking-tight">
            What Happens Next
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

            <!-- Step 2 -->
            <div class="group bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-primary-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span class="text-blue-600 font-bold text-2xl font-heading">1</span>
              </div>
              <h3 class="text-xl font-heading font-bold text-gray-900 mb-3">
                I Dive Into Your Account
              </h3>
              <p class="text-gray-600 leading-relaxed text-sm">
                I'll analyze your campaigns, targeting, creative performance, and spend allocation with a fresh, objective eye.
              </p>
            </div>

            <!-- Step 3 -->
            <div class="group bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-primary-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span class="text-green-600 font-bold text-2xl font-heading">2</span>
              </div>
              <h3 class="text-xl font-heading font-bold text-gray-900 mb-3">
                You Get Your Roast
              </h3>
              <p class="text-gray-600 leading-relaxed text-sm mb-4">
                Within 48 hours, you'll receive:
              </p>
              <ul class="space-y-2 text-gray-600 text-sm">
                <li class="flex items-start gap-2">
                  <svg class="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>30-min video breakdown</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Actionable PDF report</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>The Verdict</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </UiContainer>
    </section>

    <!-- Questions Section (White Background) -->
    <section class="py-16 bg-white">
      <UiContainer>
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Questions or Issues?
          </h2>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            If you have any trouble granting access or have questions, reach out directly:
          </p>
          <a
            href="mailto:charles@capac.pro?subject=Question%20about%20LinkedIn%20Ads%20Roast"
            class="inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl transition-all text-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            charles@capac.pro
          </a>
        </div>
      </UiContainer>
    </section>

    <!-- Guarantee Footer (Dark Background) -->
    <section class="relative py-16 bg-dark-900 text-white overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-t from-black via-dark-900 to-dark-800"></div>

      <UiContainer class="relative z-10">
        <div class="text-center max-w-3xl mx-auto">
          <p class="text-lg text-white leading-relaxed">
            <strong class="text-primary-200">100% Money-Back Guarantee</strong> — If my audit doesn't reveal at least one insight that could save you money or improve results, I'll refund you in full.
          </p>
        </div>
      </UiContainer>
    </section>

  </div>
</template>

<script setup lang="ts">
// Disable default layout (no header/footer on thank you page)
definePageMeta({
  layout: false
})

useSeo({
  title: 'Thank You - Payment Confirmed | LinkedIn Ads Roast',
  description: 'Your payment is confirmed. Next step: Grant viewer access to your LinkedIn Campaign Manager.',
  type: 'website'
})

useHead({
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>
