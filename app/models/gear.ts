import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import type { UUID } from '#types/common'
import { randomUUID } from 'node:crypto'

export default class Gear extends BaseModel {
  @column({ isPrimary: true })
  declare id: UUID

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare price: string

  @column()
  declare image: string

  @column()
  declare link: string

  @column()
  declare gearCategory: string

  @beforeCreate()
  static async createUUID(gear: Gear) {
    gear.id = randomUUID() as UUID
  }
}
