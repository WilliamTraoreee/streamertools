import Tool from '#models/tool'
import type { HttpContext } from '@adonisjs/core/http'
import { StatusToolsPresenter } from '../presenters/tool.js'
import { inject } from '@adonisjs/core'
import User from '#models/user'
import Plugin from '#models/plugin'
import { StatusPluginsPresenter } from '../presenters/plugin.js'

@inject()
export default class AccountsController {
  constructor(
    private statusToolsPresenter: StatusToolsPresenter,
    private statusPluginsPresenter: StatusPluginsPresenter
  ) {}

  public async tools({ inertia, session }: HttpContext) {
    const userId = session.get('authenticated_user')

    const user = await User.findByOrFail('id', userId)

    if (!user) {
      return inertia.location('/login')
    }

    const userTools = await Tool.query().where('user_id', user.id)

    return inertia.render('account/tools', { tools: this.statusToolsPresenter.json(userTools) })
  }

  public async plugins({ inertia, session }: HttpContext) {
    const userId = session.get('authenticated_user')

    const user = await User.findByOrFail('id', userId)

    if (!user) {
      return inertia.location('/login')
    }

    const userPlugins = await Plugin.query().where('user_id', user.id)

    return inertia.render('account/plugins', {
      plugins: this.statusPluginsPresenter.json(userPlugins),
    })
  }
}
