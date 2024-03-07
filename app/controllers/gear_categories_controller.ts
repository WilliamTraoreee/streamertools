import GearCategory from '#models/gear_category'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class GearCategoriesController {
  async create({ request, response }: HttpContext) {
    await GearCategory.create(request.all())

    return response.redirect().back()
  }

  async update({ request, response }: HttpContext) {
    const category = await GearCategory.findOrFail(request.param('id'))

    category.merge(request.all())

    await category.save()

    return response.redirect().back()
  }

  async delete({ params, response }: HttpContext) {
    const category = await GearCategory.findOrFail(params.id)

    await category.delete()

    return response.redirect().back()
  }
}
