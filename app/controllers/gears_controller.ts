import Gear from '#models/gear'
import GearCategory from '#models/gear_category'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { GearsByCategoryPresenter } from '../presenters/gears.js'

@inject()
export default class GearsController {
  constructor(private gearByCategoryPresenter: GearsByCategoryPresenter) {}

  async index({ inertia }: HttpContext) {
    const gears = await Gear.all()

    const categories = await GearCategory.all()

    return inertia.render('gears/all', {
      gears: this.gearByCategoryPresenter.json(gears, categories),
      categories,
    })
  }

  async admin({ inertia }: HttpContext) {
    const gears = await Gear.all()
    const categories = await GearCategory.all()

    return inertia.render('admin/gears', {
      gears,
      categories,
    })
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

  async delete({ params, response }: HttpContext) {
    const gear = await Gear.findOrFail(params.id)

    await gear.delete()

    return response.redirect().back()
  }
}
