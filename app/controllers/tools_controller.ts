import Tool from '#models/tool'
import { createToolValidator } from '#validators/tool'
import type { HttpContext } from '@adonisjs/core/http'
import string from '@adonisjs/core/helpers/string'
import { Providers } from '../../types/providers.js'

export default class ToolsController {
  async create({ request, response, session }: HttpContext) {
    const user = session.get('authenticated_user')

    if (!user) {
      return response.unauthorized('You must be logged in to create a tool')
    }

    const payload = await request.validateUsing(createToolValidator)

    console.log(payload)

    await Tool.create({
      ...payload,
      prices: JSON.stringify(payload.prices) as unknown as ('free' | 'paid')[],
      providers: JSON.stringify(payload.providers) as unknown as Providers,
      tags: JSON.stringify(payload.tags) as unknown as string[],
      screenshots: JSON.stringify(payload.screenshots) as unknown as string[],
      slug: string.slug(payload.name),
      status: 'pending',
    })

    return response.redirect('/tools')
  }
}
