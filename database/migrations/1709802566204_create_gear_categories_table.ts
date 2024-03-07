import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'gear_categories'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.string('name').notNullable()
      table.string('slug').notNullable()
      table.string('title').notNullable()
      table.string('description').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
