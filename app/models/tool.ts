import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import type { Providers } from '#types/providers'
import type { Status, UUID } from '#types/common'

export default class Tool extends BaseModel {
  @column({ isPrimary: true })
  declare id: UUID

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare iconUrl: string

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare url: string

  @column()
  declare prices: ('free' | 'paid')[]

  @column()
  declare providers: Providers

  @column()
  declare tags: string[]

  @column()
  declare screenshots: string[]

  @column()
  declare slug: string

  @column()
  declare status: Status
}
