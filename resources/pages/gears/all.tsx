import { Head } from '@inertiajs/react'
import type { GearByCategory } from '../../../types/gear'
import type { GearCategory } from '../../../types/gear_category'
import CardGear from '../../components/cards/card-gear'

interface Props {
  gears: GearByCategory
  categories: GearCategory[]
}

export default function All(props: Props) {
  const { gears, categories } = props

  return (
    <>
      <Head>
        <title>Tools</title>
      </Head>

      <div className="pb-10 w-full" lg="w-1/2 py-40">
        <h1 className="font-black text-4xl mb-5" lg="text-6xl">
          Discover the best products to upgrade your stream.
        </h1>
        <h2 className="text-gray mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non lacus at orci commodo
          bibendum a non mauris. Sed pellentesque nisi sit amet erat tempor consectetur.
        </h2>
      </div>

      {categories.map((category) => (
        <div key={category.id}>
          <h3 className="text-5xl font-bold mb-1">{category.title}</h3>
          <h4 className="text-gray mb-10">{category.description}</h4>
          <div
            className="grid grid-cols-1 gap-10 mb-5 2xl:grid-cols-6"
            sm="grid-cols-2"
            lg="grid-cols-3"
            xl="grid-cols-5"
          >
            {gears[category.slug].map((gear) => (
              <CardGear key={gear.id} gear={gear} />
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
