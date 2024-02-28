import Tool from '#models/tool'
import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, hasMany } from '@adonisjs/lucid/orm'
import type { UUID } from '#types/common'
import { randomUUID } from 'node:crypto'
import type { ProviderData } from '#types/user'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: UUID

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare email: string

  @column()
  declare provider: string

  @column()
  declare providerId: string

  @column()
  declare providerData: ProviderData

  @hasMany(() => Tool)
  declare tools: HasMany<typeof Tool>

  @beforeCreate()
  static async createUUID(user: User) {
    user.id = randomUUID() as UUID
  }
}
