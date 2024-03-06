import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'gears'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.string('name').notNullable()
      table.string('description').notNullable()
      table.string('price').notNullable()
      table.string('image').notNullable()
      table.string('link').notNullable()
      table.string('gear_category').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
