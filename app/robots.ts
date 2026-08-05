import type { MetadataRoute } from 'next'
import { basics } from '@/lib/resume'

/**
 * The whole point of this site is to be read — by people, by search engines, and
 * by the AI assistants that increasingly do the first pass of a candidate
 * search. So every known crawler is welcomed explicitly rather than left to
 * guess from a bare wildcard.
 */
const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
  'Bingbot',
  'CCBot',
  'meta-externalagent',
  'Amazonbot',
  'DuckAssistBot',
  'cohere-ai',
  'YouBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: aiCrawlers, allow: '/' },
    ],
    sitemap: `${basics.url}/sitemap.xml`,
    host: basics.url,
  }
}
