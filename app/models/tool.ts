import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import type { Providers } from '#types/providers'
import type { Status, UUID } from '#types/common'
import { randomUUID } from 'node:crypto'

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

  @column({ prepare: (value) => JSON.stringify(value) })
  declare prices: ('free' | 'paid')[]

  @column({ prepare: (value) => JSON.stringify(value) })
  declare providers: Providers

  @column({ prepare: (value) => JSON.stringify(value) })
  declare tags: string[]

  @column({ prepare: (value) => JSON.stringify(value) })
  declare screenshots: string[]

  @column()
  declare slug: string

  @column()
  declare status: Status

  @column()
  declare userId: UUID

  @beforeCreate()
  static async createUUID(tool: Tool) {
    tool.id = randomUUID() as UUID
  }
}
