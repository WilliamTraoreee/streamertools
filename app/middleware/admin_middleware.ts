import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class AdminMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const userId = ctx.session.get('authenticated_user')

    if (!userId) {
      return ctx.response.redirect('/login')
    }

    const user = await User.findByOrFail('id', userId)

    if (!user || user.role !== 'admin') {
      return ctx.response.redirect('/login')
    }

    await next()
  }
}
