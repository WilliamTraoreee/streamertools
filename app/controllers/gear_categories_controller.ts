import GearCategory from '#models/gear_category'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class GearCategoriesController {
  async create({ request, response }: HttpContext) {
    await GearCategory.create(request.all())

    return response.redirect().back()
  }
}
