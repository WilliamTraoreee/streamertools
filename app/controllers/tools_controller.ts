import Tool from '#models/tool'
import { createToolValidator } from '#validators/tool'
import type { HttpContext } from '@adonisjs/core/http'
import string from '@adonisjs/core/helpers/string'
import { Providers } from '../../types/providers.js'
import { AllToolsPresenter, SingleToolPresenter } from '../presenters/tool.js'
import { inject } from '@adonisjs/core'
import User from '#models/user'
import { GearsPresenter } from '../presenters/gears.js'
import Gear from '#models/gear'

@inject()
export default class ToolsController {
  constructor(
    private allToolsPresenter: AllToolsPresenter,
    private singleToolPresenter: SingleToolPresenter,
    private gearsPresenter: GearsPresenter
  ) {}

  async index({ inertia }: HttpContext) {
    const tools = await Tool.query().where('status', 'approved').orderBy('name', 'asc')

    const randomGears = await Gear.query().limit(5).orderByRaw('random()')

    return inertia.render('home', {
      tools: this.allToolsPresenter.json(tools),
      randomGears: this.gearsPresenter.json(randomGears),
    })
  }

  async show({ params, inertia }: HttpContext) {
    const tool = await Tool.query().where('slug', params.slug).firstOrFail()

    const randomTools = await Tool.query()
      .where('status', 'approved')
      .limit(2)
      .orderByRaw('random()')

    const randomGears = await Gear.query().limit(2).orderByRaw('random()')

    return inertia.render('tools/single', {
      tool: this.singleToolPresenter.json(tool),
      randomTools: this.allToolsPresenter.json(randomTools),
      randomGears: this.gearsPresenter.json(randomGears),
    })
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
      userId: user,
    })

    return response.redirect('/')
  }

  async update({ request, response, params, session }: HttpContext) {
    const userId = session.get('authenticated_user')

    if (!userId) {
      return response.redirect('/login')
    }

    const user = await User.findByOrFail('id', userId)

    if (!user || user.role !== 'admin') {
      return response.redirect('/login')
    }

    const tool = await Tool.findOrFail(params.id)

    await tool.merge(request.all()).save()

    return response.redirect().back()
  }
}
