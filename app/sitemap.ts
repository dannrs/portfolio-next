import { allPosts } from 'contentlayer/generated'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL as string
  const postUrls = allPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slugAsParams}`,
    lastModified: post.date
  }))

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/spotify`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date()
    },
    ...postUrls
  ]
}
