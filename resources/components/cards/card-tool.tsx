import { Link } from '@inertiajs/react'
import type { Tool } from '../../../types/tool'
import PriceTag from '../price-tag'
import { Button } from '../button'

interface Props {
  tool: Tool
}

export function CardTool(props: Props) {
  const { tool } = props

  return (
    <div className="p-4 bg-dark border-gradient">
      <div className="gap-6 flex items-center mb-6">
        <Link href={`tools/${tool.slug}`}>
          <img
            src={tool.iconUrl}
            alt={tool.name}
            loading="lazy"
            className="w-12 h-12  rounded-md"
          />
        </Link>
        <div>
          <h3 className="font-medium text-lg">{tool.name}</h3>
          <a className="underline text-gray text-sm -mt-1 block" href={tool.url}>
            {tool.displayUrl}
          </a>
        </div>
      </div>
      <p className="font-medium mb-6">{tool.description}</p>
      <div className="flex gap-1 mb-6">
        <PriceTag prices={tool.prices} />
      </div>
      <div className="flex gap-1">
        <Button link={`/tools/${tool.slug}`} variant="dark" className="flex-1">
          More info
        </Button>
        <Button link={tool.url} external className="flex-1">
          Use this tool
        </Button>
      </div>
    </div>
  )
}