import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class AuthMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const authenticatedUserId = ctx.session.get('authenticated_user')

    if (!authenticatedUserId) {
      return ctx.inertia.location('/login')
    }

    return await next()
  }
}
