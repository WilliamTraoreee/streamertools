import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm'
import type { Providers } from '#types/providers'
import type { Status, UUID } from '#types/common'
import { randomUUID } from 'node:crypto'
import User from './user.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

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

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @beforeCreate()
  static async createUUID(tool: Tool) {
    tool.id = randomUUID() as UUID
  }
}
