import Tool from '#models/tool'
import User from '#models/user'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { StatusToolsPresenter } from '../presenters/tool.js'

@inject()
export default class AdminController {
  constructor(private statusToolsPresenter: StatusToolsPresenter) {}

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
}
