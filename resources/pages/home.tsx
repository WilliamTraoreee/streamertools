import { CardTool } from '../components/cards/card-tool'
import type { Tool } from '../../types/tool'
import { Button } from '../components/button'
import { Head } from '@inertiajs/react'
import type { Gear } from '../../types/gear'
import CardGear from '../components/cards/card-gear'
import { PriceFilter } from '../components/filters/price-filter'
import { useState } from 'react'
import { ProviderFilter } from '../components/filters/provider-filter'
import type { Provider } from '../../types/providers'

interface Props {
  tools: Tool[]
  randomGears: Gear[]
}

export default function Home(props: Props) {
  const { tools, randomGears } = props

  const [currentPriceFilter, setCurrentPriceFilter] = useState<'free' | 'paid' | 'all'>('all')
  const [currentProviderFilter, setCurrentProviderFilter] = useState<'all' | Provider>('all')

  return (
    <>
      <Head title="Tools">
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="description"
          content="Find the best tools all in one place to boost your streaming experience!"
        />
        <link rel="canonical" href="https://streamertools.app/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tools | Streamertools" />
        <meta
          property="og:description"
          content="Find the best tools all in one place to boost your streaming experience!"
        />
        <meta property="og:url" content="https://streamertools.app/" />
        <meta property="og:site_name" content="Tools | Streamertools" />
        <meta
          property="og:image"
          content="https://streamertools.s3.eu-central-1.amazonaws.com/og.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@willtraore" />
      </Head>

      <div className="pb-10 w-full" lg="w-3/5 py-40">
        <h1 className="font-black text-4xl mb-5" lg="text-6xl">
          Find the best tools all in one place to boost your streaming experience!
        </h1>
        <h2 className="text-gray mb-10">
          Check out a bunch of must-have tools to make your streaming experience easier. Save time
          and find solutions hassle-free!
        </h2>
        <Button link="/tools/add">
          <span className="i-ri:add-line"></span>
          Submit a tool
        </Button>
      </div>

      <div className="w-full flex justify-end mb-5 gap-3">
        <PriceFilter
          currentFilter={currentPriceFilter}
          onFilterChange={(filter) => setCurrentPriceFilter(filter)}
        />
        <ProviderFilter
          currentFilter={currentProviderFilter}
          onFilterChange={(filter) => setCurrentProviderFilter(filter)}
        />
      </div>

      <div
        className="grid grid-cols-1 gap-10 mb-10"
        sm="grid-cols-2"
        lg="grid-cols-3"
        xl="grid-cols-4"
      >
        {tools
          .filter((tool) => {
            if (currentPriceFilter === 'all') return true
            if (currentPriceFilter === 'free' && tool.prices.includes('free')) return true
            if (currentPriceFilter === 'paid' && tool.prices.includes('paid')) return true

            return false
          })
          .filter((tool) => {
            if (currentProviderFilter === 'all') return true
            if (tool.providers.includes(currentProviderFilter)) return true

            return false
          })
          .slice(0, 4)
          .map((tool) => (
            <CardTool key={tool.id} tool={tool} />
          ))}
      </div>

      <div className="p-10 bg-black rounded-xl mb-10">
        <h3 className="font-black text-2xl mb-5 text-center">
          The latest product recommendations for your stream
        </h3>
        <div
          className="grid grid-cols-1 gap-10 mb-5"
          sm="grid-cols-2"
          lg="grid-cols-3"
          xl="grid-cols-6"
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
        {tools
          .filter((tool) => {
            if (currentPriceFilter === 'all') return true
            if (currentPriceFilter === 'free' && tool.prices.includes('free')) return true
            if (currentPriceFilter === 'paid' && tool.prices.includes('paid')) return true

            return false
          })
          .filter((tool) => {
            if (currentProviderFilter === 'all') return true
            if (tool.providers.includes(currentProviderFilter)) return true

            return false
          })
          .slice(5, 9999)
          .map((tool) => (
            <CardTool key={tool.id} tool={tool} />
          ))}
      </div>
    </>
  )
}
