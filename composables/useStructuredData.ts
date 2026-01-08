export const useStructuredData = () => {
  const config = useRuntimeConfig()

  const addWebSiteSchema = () => {
    useSchemaOrg([
      {
        '@type': 'WebSite',
        name: config.public.siteName,
        url: config.public.siteUrl,
        description: 'Get brutally honest feedback on your LinkedIn ads',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${config.public.siteUrl}/search?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      }
    ])
  }

  const addArticleSchema = (article: {
    headline: string
    description: string
    image: string
    datePublished: string
    dateModified?: string
    author: string
  }) => {
    useSchemaOrg([
      {
        '@type': 'Article',
        headline: article.headline,
        description: article.description,
        image: article.image,
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        author: {
          '@type': 'Person',
          name: article.author
        },
        publisher: {
          '@type': 'Organization',
          name: config.public.siteName,
          logo: {
            '@type': 'ImageObject',
            url: `${config.public.siteUrl}/logo.png`
          }
        }
      }
    ])
  }

  const addBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
    useSchemaOrg([
      {
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url
        }))
      }
    ])
  }

  const addFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
    useSchemaOrg([
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }
    ])
  }

  return {
    addWebSiteSchema,
    addArticleSchema,
    addBreadcrumbSchema,
    addFAQSchema
  }
}
