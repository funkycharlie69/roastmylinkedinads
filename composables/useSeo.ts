export const useSeo = (options: {
  title: string
  description: string
  image?: string
  url?: string
  type?: string
  article?: {
    publishedTime?: string
    modifiedTime?: string
    author?: string
    tags?: string[]
  }
}) => {
  const config = useRuntimeConfig()
  const route = useRoute()

  const canonicalUrl = options.url || `${config.public.siteUrl}${route.path}`
  const ogImage = options.image || `${config.public.siteUrl}/og-default.jpg`

  useHead({
    title: options.title,
    meta: [
      { name: 'description', content: options.description },

      // Open Graph
      { property: 'og:title', content: options.title },
      { property: 'og:description', content: options.description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: options.type || 'website' },

      // Twitter Card
      { name: 'twitter:title', content: options.title },
      { name: 'twitter:description', content: options.description },
      { name: 'twitter:image', content: ogImage },

      // Article metadata if applicable
      ...(options.article?.publishedTime ? [
        { property: 'article:published_time', content: options.article.publishedTime }
      ] : []),
      ...(options.article?.modifiedTime ? [
        { property: 'article:modified_time', content: options.article.modifiedTime }
      ] : []),
      ...(options.article?.author ? [
        { property: 'article:author', content: options.article.author }
      ] : []),
    ],
    link: [
      { rel: 'canonical', href: canonicalUrl }
    ]
  })
}
