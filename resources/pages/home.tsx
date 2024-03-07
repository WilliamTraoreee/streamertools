import { CardTool } from '../components/cards/card-tool'
import type { Tool } from '../../types/tool'
import { Button } from '../components/button'
import { Head } from '@inertiajs/react'
import type { Gear } from '../../types/gear'
import CardGear from '../components/cards/card-gear'

interface Props {
  tools: Tool[]
  randomGears: Gear[]
}

export default function Home(props: Props) {
  const { tools, randomGears } = props

  return (
    <>
      <Head>
        <title>Tools</title>
      </Head>

      <div className="pb-10 w-full" lg="w-1/2 py-40">
        <h1 className="font-black text-4xl mb-5" lg="text-6xl">
          Discover the best tools to upgrade your stream.
        </h1>
        <h2 className="text-gray mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non lacus at orci commodo
          bibendum a non mauris. Sed pellentesque nisi sit amet erat tempor consectetur.
        </h2>
        <Button link="/tools/add">
          <span className="i-ri:add-line"></span>
          Submit a tool
        </Button>
      </div>

      <div
        className="grid grid-cols-1 gap-10 mb-10"
        sm="grid-cols-2"
        lg="grid-cols-3"
        xl="grid-cols-4"
      >
        {tools.slice(0, 4).map((tool) => (
          <CardTool key={tool.id} tool={tool} />
        ))}
      </div>

      <div className="p-10 bg-black rounded-xl mb-10">
        <h3 className="font-black text-2xl mb-5 text-center">Our recommanded streaming products</h3>
        <div
          className="grid grid-cols-1 gap-10 mb-5"
          sm="grid-cols-2"
          lg="grid-cols-3"
          xl="grid-cols-5"
        >
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

      <div className="grid grid-cols-1 gap-10" sm="grid-cols-2" lg="grid-cols-3" xl="grid-cols-4">
        {tools.slice(5, 9999).map((tool) => (
          <CardTool key={tool.id} tool={tool} />
        ))}
      </div>
    </>
  )
}
