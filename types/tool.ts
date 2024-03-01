import { Status } from './common.js'
import type { Providers } from './providers.js'

export interface Tool {
  id: string
  createdAt: string
  updatedAt: string
  iconUrl: string
  name: string
  description: string
  url: string
  prices: ('free' | 'paid')[]
  providers: Providers
  tags: string[]
  screenshots: string[]
  slug: string
  status: Status
  userId: string
}
