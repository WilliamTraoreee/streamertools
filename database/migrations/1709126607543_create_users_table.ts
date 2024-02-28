import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.string('email').notNullable()
      table.string('provider').notNullable()
      table.string('provider_id').notNullable()
      table.jsonb('provider_data').notNullable()
      table.enum('role', ['user', 'admin']).notNullable().defaultTo('user')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
