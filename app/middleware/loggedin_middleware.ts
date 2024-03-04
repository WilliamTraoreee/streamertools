import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class LoggedinMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const authenticatedUserId = ctx.session.get('authenticated_user')

    if (authenticatedUserId) {
      return ctx.response.redirect('/')
    }

    return await next()
  }
}
