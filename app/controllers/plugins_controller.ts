import type { HttpContext } from '@adonisjs/core/http'
import { GearsPresenter } from '../presenters/gears.js'
import Plugin from '#models/plugin'
import Gear from '#models/gear'
import string from '@adonisjs/core/helpers/string'
import User from '#models/user'
import { AllPluginsPresenter, SinglePluginPresenter } from '../presenters/plugin.js'
import { inject } from '@adonisjs/core'

@inject()
export default class PluginsController {
  constructor(
    private allPluginsPresenter: AllPluginsPresenter,
    private singlePluginPresenter: SinglePluginPresenter,
    private gearsPresenter: GearsPresenter
  ) {}

  async index({ inertia }: HttpContext) {
    const plugins = await Plugin.query().where('status', 'approved').orderBy('name', 'asc')

    const randomGears = await Gear.query().limit(6).orderByRaw('random()')

    return inertia.render('plugins', {
      plugins: this.allPluginsPresenter.json(plugins),
      randomGears: this.gearsPresenter.json(randomGears),
    })
  }

  async show({ params, inertia }: HttpContext) {
    const plugin = await Plugin.query().where('slug', params.slug).firstOrFail()

    const randomPlugins = await Plugin.query()
      .where('status', 'approved')
      .limit(2)
      .orderByRaw('random()')

    const randomGears = await Gear.query().limit(2).orderByRaw('random()')

    return inertia.render('plugins/single', {
      plugin: this.singlePluginPresenter.json(plugin),
      randomPlugins: this.allPluginsPresenter.json(randomPlugins),
      randomGears: this.gearsPresenter.json(randomGears),
    })
  }

  async create({ request, response, session }: HttpContext) {
    const user = session.get('authenticated_user')

    if (!user) {
      return response.unauthorized('You must be logged in to create a tool')
    }

    const payload = request.all()

    await Plugin.create({
      ...payload,
      slug: string.slug(payload.name, { lower: true }),
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

    const tool = await Plugin.findOrFail(params.id)

    await tool.merge(request.all()).save()

    return response.redirect().back()
  }
}
