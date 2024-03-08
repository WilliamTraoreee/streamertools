import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'plugins'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()

      table.timestamp('created_at', { useTz: false }).notNullable()
      table.timestamp('updated_at', { useTz: false }).notNullable()

      table.string('icon_url').notNullable()
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.string('url').notNullable()
      table.jsonb('tags').notNullable().defaultTo([])
      table.string('slug').notNullable()
      table.enum('status', ['pending', 'approved', 'rejected']).notNullable().defaultTo('pending')
      table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE')

      table.unique(['slug'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
