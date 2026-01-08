export default defineNuxtConfig({
  // Modern module system
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-schema-org',
    '@nuxtjs/sitemap'
  ],

  // TypeScript support
  typescript: {
    strict: true,
    typeCheck: false
  },

  // App configuration for SEO
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Roast My LinkedIn Ads - Honest LinkedIn Ad Reviews',
      meta: [
        { name: 'description', content: 'Get brutally honest feedback on your LinkedIn ads. Improve your ad performance with expert reviews and actionable insights.' },
        { name: 'format-detection', content: 'telephone=no' },

        // Open Graph for social sharing
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Roast My LinkedIn Ads' },
        { property: 'og:locale', content: 'en_US' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@yourtwitterhandle' },

        // Robots
        { name: 'robots', content: 'index, follow' },

        // Theme color for mobile browsers
        { name: 'theme-color', content: '#f09402' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://roastmylinkedinads.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap' }
      ]
    }
  },

  // Image optimization for performance
  image: {
    formats: ['webp', 'avif', 'png', 'jpg'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // Sitemap configuration
  site: {
    url: 'https://roastmylinkedinads.com',
    name: 'Roast My LinkedIn Ads'
  },

  sitemap: {
    enabled: true,
    strictNuxtContentPaths: true,
    exclude: [
      '/admin/**',
      '/api/**'
    ]
  },

  // Schema.org for GEO
  schemaOrg: {
    enabled: true,
    identity: {
      type: 'Organization',
      name: 'Roast My LinkedIn Ads',
      url: 'https://roastmylinkedinads.com',
      logo: 'https://roastmylinkedinads.com/logo.png'
    }
  },

  // Performance optimizations
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true
  },

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://roastmylinkedinads.com',
      siteName: 'Roast My LinkedIn Ads'
    }
  },

  // CSS configuration
  css: [
    '~/assets/css/main.css'
  ],

  // Build optimizations
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  // Development tools
  devtools: { enabled: true },

  // Compatibility date
  compatibilityDate: '2024-01-01'
})
