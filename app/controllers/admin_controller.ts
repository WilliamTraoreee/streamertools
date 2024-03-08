import Tool from '#models/tool'
import User from '#models/user'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { StatusToolsPresenter } from '../presenters/tool.js'
import { StatusPluginsPresenter } from '../presenters/plugin.js'
import Plugin from '#models/plugin'

@inject()
export default class AdminController {
  constructor(
    private statusToolsPresenter: StatusToolsPresenter,
    private statusPluginsPresenter: StatusPluginsPresenter
  ) {}

  public async tools({ inertia, session, response }: HttpContext) {
    const userId = session.get('authenticated_user')

    if (!userId) {
      return response.redirect('/login')
    }

    const user = await User.findByOrFail('id', userId)

    if (!user || user.role !== 'admin') {
      return response.redirect('/login')
    }

    const tools = await Tool.all()

    return inertia.render('admin/tools', { tools: this.statusToolsPresenter.json(tools) })
  }

  public async plugins({ inertia, session, response }: HttpContext) {
    const userId = session.get('authenticated_user')

    if (!userId) {
      return response.redirect('/login')
    }

    const user = await User.findByOrFail('id', userId)

    if (!user || user.role !== 'admin') {
      return response.redirect('/login')
    }

    const plugins = await Plugin.all()

    return inertia.render('admin/plugins', { plugins: this.statusPluginsPresenter.json(plugins) })
  }
}
