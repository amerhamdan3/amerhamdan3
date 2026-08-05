import type { MetadataRoute } from 'next'
import { basics } from '@/lib/resume'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: basics.url, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${basics.url}/cv`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
  ]
}
