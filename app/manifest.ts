import type { MetadataRoute } from 'next'
import { basics } from '@/lib/resume'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${basics.name} — ${basics.label}`,
    short_name: basics.name,
    description: basics.seoDescription,
    start_url: '/',
    display: 'browser',
    background_color: '#F9F7F7',
    theme_color: '#112D4E',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  }
}
