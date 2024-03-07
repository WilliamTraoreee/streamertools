import Gear from '#models/gear'

export class GearsPresenter {
  json(gears: Gear[]) {
    return gears.map((gear) => ({
      id: gear.id,
      name: gear.name,
      description: gear.description,
      price: gear.price,
      image: gear.image,
      link: gear.link,
      gearCategory: gear.gearCategory,
    }))
  }
}
