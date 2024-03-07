import CardGear from '../../components/cards/card-gear'
import type { Gear } from '../../../types/gear'
import type { GearCategory } from '../../../types/gear_category'

interface Props {
  category: GearCategory
  gears: Gear[]
}

export default function CategoryGear(props: Props) {
  const { category, gears } = props

  return (
    <div>
      <h1 className="font-black text-4xl mb-5 text-center mb-10" lg="text-6xl">
        {category.name}
      </h1>
      <div
        className="grid grid-cols-1 gap-10 mb-5 2xl:grid-cols-6"
        sm="grid-cols-2"
        lg="grid-cols-3"
        xl="grid-cols-5"
      >
        {gears.map((gear) => (
          <CardGear key={gear.id} gear={gear} />
        ))}
      </div>
    </div>
  )
}
