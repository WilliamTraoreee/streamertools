import { Link } from '@inertiajs/react'
import PriceTag from '../price-tag'
import { Button } from '../button'
import type { Plugin } from '../../../types/plugin'

interface Props {
  plugin: Plugin
}

export function CardPlugin(props: Props) {
  const { plugin } = props

  return (
    <div className="p-4 bg-dark border-gradient">
      <div className="gap-6 flex items-center mb-6">
        <Link href={`/plugins/${plugin.slug}`}>
          <img
            src={plugin.iconUrl}
            alt={plugin.name}
            loading="lazy"
            className="w-12 h-12  rounded-md"
          />
        </Link>
        <div>
          <h3 className="font-medium text-lg">{plugin.name}</h3>
          <a className="underline text-gray text-sm -mt-1 block" href={plugin.url}>
            {plugin.displayUrl}
          </a>
        </div>
      </div>
      <p className="font-medium mb-6">{plugin.description}</p>
      <div className="flex gap-1">
        <Button link={`/plugins/${plugin.slug}`} variant="dark" className="flex-1">
          <span className="i-ri:information-2-line"></span>
          More info
        </Button>
        <Button link={plugin.url} external className="flex-1">
          <span className="i-ri:links-line"></span>
          Use it
        </Button>
      </div>
    </div>
  )
}
