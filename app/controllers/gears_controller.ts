import Gear from '#models/gear'
import GearCategory from '#models/gear_category'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { GearsByCategoryPresenter, GearsPresenter } from '../presenters/gears.js'

@inject()
export default class GearsController {
  constructor(
    private gearByCategoryPresenter: GearsByCategoryPresenter,
    private gearsPresenter: GearsPresenter
  ) {}

  async index({ inertia }: HttpContext) {
    const gears = await Gear.all()

    const categories = await GearCategory.all()

    return inertia.render('gears', {
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

  async update({ request, params, response }: HttpContext) {
    const gear = await Gear.findOrFail(params.id)

    gear.merge(request.all())

    await gear.save()

    return response.redirect().back()
  }

  async delete({ params, response }: HttpContext) {
    const gear = await Gear.findOrFail(params.id)

    await gear.delete()

    return response.redirect().back()
  }

  async categoryPage({ inertia, params }: HttpContext) {
    const gears = await Gear.query().where('gear_category', params.id)
    const category = await GearCategory.query().where('slug', params.id).first()

    return inertia.render('gears/category', {
      gears: this.gearsPresenter.json(gears),
      category,
    })
  }

  async export({ response }: HttpContext) {
    const gears = await Gear.all()

    return response.json(
      gears.map((gear) => {
        return {
          name: gear.name,
          description: gear.description,
          price: gear.price,
          gearCategory: gear.gearCategory,
          image: gear.image,
          link: gear.link,
        }
      })
    )
  }
}
