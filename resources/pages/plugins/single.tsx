import { Button } from '../../components/button'
import type { Plugin } from '../../../types/plugin'
import { CardPlugin } from '../../components/cards/card-plugin'
import type { Gear } from '../../../types/gear'
import CardGear from '../../components/cards/card-gear'
import { FancyBox } from '../../components/fancybox'

interface Props {
  plugin: Plugin
  randomPlugins: Plugin[]
  randomGears: Gear[]
}

export default function Single(props: Props) {
  const { plugin, randomPlugins, randomGears } = props

  if (plugin.status === 'pending') {
    return (
      <div className="flex justify-center items-center" lg="h-[70vh]">
        <p>This plugin is in pending and need to be approved by an admin</p>
      </div>
    )
  }

  if (plugin.status === 'rejected') {
    return (
      <div className="flex justify-center items-center" lg="h-[70vh]">
        <p>This plugin is rejected</p>
      </div>
    )
  }

  return (
    <div className="w-full px-6 mx-auto" lg="w-[800px] mt-10">
      <div className="flex justify-between mb-10 flex-col gap-5" md="flex-row items-center">
        <div className="gap-6 flex items-center">
          <img
            src={plugin.iconUrl}
            alt={plugin.name}
            loading="lazy"
            className="w-20 h-20  rounded-xl"
            md="w-30 h-30 rounded-2xl"
          />
          <div>
            <h1 className="font-medium text-3xl">{plugin.name}</h1>
            <a className="underline text-gray block" href={plugin.url}>
              {plugin.displayUrl}
            </a>
          </div>
        </div>
        <Button variant="dark" size="large">
          Visit
        </Button>
      </div>

      <h2 className="font-medium text-xl mb-10">{plugin.description}</h2>

      <div className="flex gap-2 mb-10">
        {plugin.tags.map((tag) => (
          <span key={tag} className="px-4 py-1 bg-gray-200 text-gray-800 rounded-full font-bold">
            {tag}
          </span>
        ))}
      </div>

      <div className="p-10 bg-black rounded-xl mb-10">
        <h3 className="font-black text-2xl mb-5 text-center">Our recommanded streaming products</h3>
        <div className="grid grid-cols-1 gap-5 mb-5" md="grid-cols-2">
          {randomGears.map((gear) => (
            <CardGear key={gear.id} gear={gear} />
          ))}
        </div>
        <div className="w-full justify-center flex">
          <Button link="/gears" className="mx-auto">
            See all products
          </Button>
        </div>
      </div>

      <h2 className="font-bold text-xl text-center  mb-5">You may also like</h2>

      <div className="grid grid-cols-1 gap-5" md="grid-cols-2">
        {randomPlugins.map((plugin) => (
          <CardPlugin plugin={plugin} key={plugin.id} />
        ))}
      </div>
    </div>
  )
}
