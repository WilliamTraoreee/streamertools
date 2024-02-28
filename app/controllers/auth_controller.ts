import AuthService from '#services/auth_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthController {
  constructor(private authService: AuthService) {}

  redirect({ ally }: HttpContext) {
    return ally.use('twitch').redirect()
  }

  async callback({ ally, response, session }: HttpContext) {
    const socialUser = await ally.use('twitch').user()

    if (!socialUser) {
      throw new Error('Pas de social user')
    }

    const providerData = {
      username: socialUser.nickName,
      email: socialUser.email,
      avatar_url: socialUser.avatarUrl,
      token: {
        access_token: socialUser.token.token,
        refresh_token: socialUser.token.refreshToken,
      },
    }

    const existingUser = await this.authService.existingUserAccount(socialUser.id, 'twitch')

    if (existingUser) {
      session.put('authenticated_user', existingUser.id)
      await this.authService.updateUserData(existingUser.id, providerData)
      return response.redirect('/')
    }

    const user = await this.authService.createUser({
      email: socialUser.email,
      provider: 'twitch',
      providerId: socialUser.id,
      providerData,
      role: 'user',
    })

    session.put('authenticated_user', user.id)
    return response.redirect('/')
  }

  async me({ response, session }: HttpContext) {
    const userId = session.get('authenticated_user')

    if (!userId) {
      return response.status(401)
    }

    const user = await this.authService.getUserById(userId)

    if (!user) {
      return response.status(401)
    }

    return response.ok(user)
  }

  disconnect({ response, session }: HttpContext) {
    session.forget('authenticated_user')
    return response.redirect('/')
  }
}
