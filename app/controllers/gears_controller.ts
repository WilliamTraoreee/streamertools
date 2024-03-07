import Gear from '#models/gear'
import GearCategory from '#models/gear_category'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class GearsController {
  async admin({ inertia }: HttpContext) {
    return inertia.render('admin/gears')
  }

  async addPage({ inertia }: HttpContext) {
    const categories = await GearCategory.all()

    return inertia.render('gears/add', { categories })
  }

  async create({ request, response }: HttpContext) {
    const data = request.all()

    await Gear.create(data)

    return response.redirect().back()
  }
}
