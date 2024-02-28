import Tool from '#models/tool'
import { createToolValidator } from '#validators/tool'
import type { HttpContext } from '@adonisjs/core/http'
import string from '@adonisjs/core/helpers/string'

export default class ToolsController {
  async create({ request, response, session }: HttpContext) {
    const user = session.get('authenticated_user')

    if (!user) {
      return response.unauthorized('You must be logged in to create a tool')
    }

    const payload = await request.validateUsing(createToolValidator)

    const tool = await Tool.create({
      ...payload,
      slug: string.slug(payload.name),
      status: 'pending',
    })

    return response.created(tool)
  }
}
