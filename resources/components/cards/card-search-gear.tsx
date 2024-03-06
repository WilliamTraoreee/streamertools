import { Button } from '../../components/button'
import type { AmazonSearchResult } from '../../../types/amazon'

interface Props {
  search: AmazonSearchResult
}

export default function CardSearchGear(props: Props) {
  const { search } = props

  return (
    <div className="p-4 bg-dark border-gradient">
      <div className="w-full aspect-square rounded bg-white p-5 mb-3">
        <img src={search.image} className="w-full object-cover aspect-square" />
      </div>
      <h3 className="font-medium truncate">{search.title}</h3>
      <h4 className="text-green mb-3">{search.price}</h4>
      <div className="w-full flex gap-2">
        <Button variant="dark" link={search.link} external className="flex-1">
          See the product
        </Button>
        <Button className="flex-1">Add the product</Button>
      </div>
    </div>
  )
}
