import Gear from '#models/gear'
import GearCategory from '#models/gear_category'

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

export class GearsByCategoryPresenter {
  json(gears: Gear[], categories: GearCategory[]) {
    const gearByCategory = categories.reduce(
      (acc, category) => {
        acc[category.slug] = gears
          .filter((gear) => gear.gearCategory === category.slug)
          .sort(
            (a, b) =>
              Number.parseFloat(a.price.replace(' ', '').replace('€', '').replace(',', '.')) -
              Number.parseFloat(b.price.replace(' ', '').replace('€', '').replace(',', '.'))
          )
        return acc
      },
      {} as { [key: string]: Gear[] }
    )

    return gearByCategory
  }
}
