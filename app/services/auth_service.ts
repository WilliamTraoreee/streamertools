import User from '#models/user'
import db from '@adonisjs/lucid/services/db'
import type { ProviderData, Role } from '#types/user'

type UserCreate = {
  email: string
  provider: string
  providerId: string
  providerData: ProviderData
  role: Role
}

export default class AuthService {
  existingUserAccount(providerId: string, provider: string) {
    return User.query().where('provider_id', providerId).where('provider', provider).first()
  }

  createUser(params: UserCreate) {
    return db.transaction(async (trx) => {
      const user = await User.create(params, { client: trx })
      return user
    })
  }

  async updateUserData(userId: string, providerData: ProviderData) {
    await User.query().where('id', userId).update({ providerData })
  }

  async getUserById(userId: string) {
    return User.query().where('id', userId).first()
  }
}
