import { Status } from './common.js'

export interface Plugin {
  id: string
  createdAt: string
  updatedAt: string
  iconUrl: string
  name: string
  description: string
  url: string
  displayUrl: string
  tags: string[]
  slug: string
  status: Status
  userId: string
}
