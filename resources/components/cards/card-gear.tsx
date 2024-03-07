import { Button } from '../button'
import type { Gear } from '../../../types/gear'

interface Props {
  gear: Gear
}

export default function CardGear(props: Props) {
  const { gear } = props

  return (
    <a href={gear.link} target="_blank" rel="noreferrer" className="p-4 bg-dark border-gradient">
      <div className="w-full aspect-square rounded bg-white p-5 mb-3">
        <img src={gear.image} className="w-full object-contain aspect-square" />
      </div>
      <h3 className="font-medium truncate">{gear.name}</h3>
      <h4 className="text-green mb-3">{gear.price}</h4>
      <div className="w-full flex gap-2">
        <Button variant="secondary" className="flex-1">
          Buy now
        </Button>
      </div>
    </a>
  )
}
