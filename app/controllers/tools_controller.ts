import Tool from '#models/tool'
import { createToolValidator } from '#validators/tool'
import type { HttpContext } from '@adonisjs/core/http'
import string from '@adonisjs/core/helpers/string'
import { Providers } from '../../types/providers.js'
import { AllToolsPresenter } from '../presenters/tool.js'
import { inject } from '@adonisjs/core'

@inject()
export default class ToolsController {
  constructor(private allToolsPresenter: AllToolsPresenter) {}

  async index({ inertia }: HttpContext) {
    const tools = await Tool.query().where('status', 'approved').orderBy('name', 'asc')

    return inertia.render('home', { tools: this.allToolsPresenter.json(tools) })
  }

  async create({ request, response, session }: HttpContext) {
    const user = session.get('authenticated_user')

    if (!user) {
      return response.unauthorized('You must be logged in to create a tool')
    }

    const payload = await request.validateUsing(createToolValidator)

    await Tool.create({
      ...payload,
      prices: JSON.stringify(payload.prices) as unknown as ('free' | 'paid')[],
      providers: JSON.stringify(payload.providers) as unknown as Providers,
      tags: JSON.stringify(payload.tags) as unknown as string[],
      screenshots: JSON.stringify(payload.screenshots) as unknown as string[],
      slug: string.slug(payload.name),
      status: 'pending',
    })

    return response.redirect('/')
  }
}
