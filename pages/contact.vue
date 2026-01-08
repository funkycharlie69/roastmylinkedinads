<template>
  <div>
    <section class="py-20 bg-gray-50">
      <UiContainer>
        <div class="max-w-2xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p class="text-xl text-gray-700 mb-12">
            Have questions about our LinkedIn ad review service? Want to discuss a
            custom review package? We'd love to hear from you.
          </p>

          <div class="bg-white rounded-lg shadow-md p-8">
            <form class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your LinkedIn advertising goals..."
                ></textarea>
              </div>

              <button type="submit" class="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          <div class="mt-12 text-center">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              Other Ways to Reach Us
            </h2>
            <p class="text-gray-700">
              Email us at <a href="mailto:hello@roastmylinkedinads.com" class="text-primary-600 hover:text-primary-700">hello@roastmylinkedinads.com</a>
            </p>
          </div>
        </div>
      </UiContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO optimization for contact page
useSeo({
  title: 'Contact Us',
  description: 'Get in touch with Roast My LinkedIn Ads. Have questions about our LinkedIn ad review service? We\'d love to hear from you.',
  type: 'website'
})
</script>
